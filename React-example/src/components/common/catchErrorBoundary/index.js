import React, {
    Component
} from 'react';
import { Alert } from 'antd';

export default class CatchErrorBoundary extends Component {
    state={
        error:null,
        info:null
    }
    componentDidCatch(error, info) {
        this.setState({
            error,
            info
        });
    }
    componentWillReceiveProps(){
        this.setState({
            error:null,
            info:null
        });
    }
    render(){

        let {error, info}=this.state;

        if(error)

            if(process.env.NODE_ENV==='production'){
                return (
                    <Alert
                        message='程序出错了'
                        description='程序员已经在修复了，稍安勿躁'
                        type='error'
                    />
                );
            }else{
                return (
                    <Alert
                        message={`Error: ${error.toString()}`}
                        description={
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:info &&info.componentStack.replace(/[\n\r]/g, '<br/>').replace(/\s/g, '&nbsp;')}}
                            />
                        }
                        type='error'
                    />
                );
            }

        return this.props.children;

    }
}