/*
用户个人中心路由组件
 */

import React from 'react'
import {Result, List, WhiteSpace, Button, Modal, Toast} from 'antd-mobile'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {resetUser} from '../../redux/actions'
import {reqGetEdit} from "../../api";
import store from "../../redux/store";

const Item = List.Item
const Brief = Item.Brief

class Personal extends React.Component {

    state = {
        user: {},
    };

  logout = () => {
    // alert('-----')
    Modal.alert('退出', '确定退出登陆吗?', [
      {text: '取消'},
      {
        text: '确定',
        onPress: ()=> {

          // 干掉cookie中userid
          Cookies.remove('userid')
          // 干掉redux管理user
          this.props.resetUser()
        }
      }
    ])
  };

    editPersonal = () => {
        this.props.history.push({pathname: '/editPersonal'})
    };

    getEdit = () => {
        reqGetEdit(store.getState().user._id).then( res => {
            const { code, message, messageBody } = res.data;
            code === 0 && this.setState({
                user:messageBody,
            });
            code !== 0 && Toast.fail(message);
        }).catch( err => {
            Toast.fail('请求失败!');
        });
    };
    componentDidMount() {
        this.getEdit();
    }

    render() {
    const {username, info, header, company, post, salary} = this.state.user;
    return (
      <div style={{marginBottom:50, marginTop:50}}>
        <Result
          img={ header && <img src={require(`../../assets/images/${header}.png`)} style={{width: 50}} alt="header"/>}
          title={username}
          message={company}
        />

        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>职位: {post}</Brief>
            <Brief>简介: {info}</Brief>
            {salary ? <Brief>薪资: {salary}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.logout}>退出登录</Button>
        </List>
          <Button type='primary' onClick={this.editPersonal} style={{marginTop: '20px'}}>编辑个人信息</Button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {resetUser}
)(Personal)