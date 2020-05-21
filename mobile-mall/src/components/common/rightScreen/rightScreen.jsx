import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Drawer, Button } from 'antd';
import {withRouter} from "react-router-dom";
import './rightScreen.less';

@withRouter
export default class RightScreen extends Component{
    static propTypes = {
        drawerTitle:PropTypes.string,  //抽屉头部标题
        createTitle:PropTypes.string, //可选 存在及添加创建活动选项
        loading:PropTypes.bool, //按钮的加载状态
        onValidate: PropTypes.func, //必选 父组件中定义的表单验证方法
        onReset:PropTypes.func, //必传 父组件中定义的表单重置方法
        onCreate:PropTypes.func, //点击创建XX时调用的方法
        // drawer 宽度 默认 273
        drawerWidth: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    };
    static defaultProps = {
        drawerTitle:'',
        createTitle:'',
        loading:false,
        onValidate:null,
        onReset:null,
        onCreate:null,
        drawerWidth: 273
    };
    state = {
        visible:false
    };
    //显示或隐藏右侧抽屉
    showDrawer = async (func) => {
        const { visible } = this.state;
        await this.setState({
            visible: !visible,
        });
        func && func();
    };
    //关闭右侧抽屉
    onClose = () => {
        this.setState({
            visible:false,
        });
    };
    //筛选点击
    screenShow = () => {
        this.showDrawer();
    };
    //执行来自父组件的确认函数并传递参数便于在ajax请求后执行操作
    confirmSubmit = () => {
        this.props.onValidate(this.screenShow, this.onClose);
    };
    componentDidMount() {
        //初始化右侧侧边栏
        const domHeight = document.documentElement.clientHeight;
        document.querySelector(".right-screen").style.height = domHeight - 64 + 'px';
    }
    render() {
        const { drawerTitle, createTitle, children, drawerWidth, onCreate, loading} = this.props;
        return (<div className="right-screen">
            <div className="top-bar">
                {
                    createTitle ? 
                        (<div className="top-bar-create" onClick={ onCreate }>
                            <i className="iconfont iconxinjian"/>
                            <span className="screen-span">{ createTitle }</span>
                        </div>) 
                    : ''
                }
                <div className="top-bar-screen" onClick={this.screenShow.bind(this)}>
                    <i className="iconfont iconshaixuan"/>
                    <span className="screen-span">筛选</span>
                </div>
            </div>
            <Drawer title={drawerTitle}
                placement="right"
                closable={false}
                onClose={this.onClose.bind(this)}
                visible={this.state.visible}
                style={{height: 'calc(100% - 60px)', top: '64px'}}
                drawerStyle={{background:'#F8FAFC'}}
                width={drawerWidth}
            >
                <div className="form-content">
                    { children }
                </div>
                <Button type="primary" shape="round" className="confirm-button" onClick={this.confirmSubmit} loading={loading}>确定</Button>
            </Drawer>
        </div>);
    }
}