import {List, InputItem, Button, WhiteSpace, Toast} from 'antd-mobile';
import React, { Component } from 'react';
import { createForm } from 'rc-form';
import { reqSearchAll } from "../../api";

class SearchForm extends Component {

    handleClick = () => {

    };

    updateList = (list) => {
      const { tag } = this.props;
      const { showFlag } = tag.state;

      showFlag === 0 && tag.setState({
          bigGodArr: list,
      });

      showFlag === 1 && tag.setState({
          bossArr: list
      });

      showFlag === 2 && tag.setState({
         messageArr: list
      });
    };

    searchList = () => {
        const { tag } = this.props;
        const { showFlag } = tag.state;
        this.props.form.validateFields( (err, values) => {
            if ( err ){
                return Toast.fail('表单填写错误!');
            }
            const { username, post } = values;
            if (!username){
                values.username = '';
            }
            if (!post){
                values.post = '';
            }
            if (showFlag === 0){
                values.type = 'dashen'
            } else {
                values.type = 'laoban'
            }
            reqSearchAll(values).then( res => {
                const { code, message, messageBody } = res.data;
                code === 0 && Toast.success(message);
                code === 0 && this.updateList(messageBody);
                code !== 0 && Toast.fail(message);
            }).catch( err => {
                Toast.fail('请求异常!');
            })
        });
    };

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <List renderHeader={() => '条件查询'}>
                    <InputItem
                        {...getFieldProps('username')}
                        clear
                        placeholder={this.props.addPlace}
                        ref={el => this.autoFocusInst = el}
                    >{this.props.addTitle}</InputItem>
                    <InputItem
                        {...getFieldProps('post')}
                        clear
                        placeholder={this.props.postPlace}
                        ref={el => this.autoFocusInst = el}
                    >{this.props.postTitle}</InputItem>
                    <div><Button icon="down" size="middle" style={ {margin: '10px auto', width:'50%'}} onClick={this.searchList}>搜索</Button><WhiteSpace /></div>
                </List>
            </div>
        )
    }
}
const formWrapper = createForm()(SearchForm);
export default formWrapper;