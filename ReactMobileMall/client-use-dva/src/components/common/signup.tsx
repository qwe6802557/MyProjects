import React, { Component } from 'react';
import { List, Button, WhiteSpace, WingBlank, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

import event from 'utils/event';
interface Props {
  form?: any;
}
interface State {
  isSignupShow: boolean;
}
@createForm()
class Signup extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isSignupShow: false
    };
  }
  componentDidMount() {
    event.on('showSignup', bool => {
      this.setState({ isSignupShow: bool });
    });
  }
  handleSubmit = e => {
    const {
      form: { validateFields, getFieldValue }
    } = this.props;
    e.preventDefault();
    validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const query = {
          username: getFieldValue('username'),
          password: getFieldValue('password'),
          repeatPwd: getFieldValue('repeatPwd')
        };
        const url = window.$api.user.signup;
        try {
          await window.$http.put(url, { query });
          event.emit('showSignup', false);
          event.emit('showLogin', true);
        } catch (err) {
          window.$commonErrorHandler(url)(err);
        }
      }
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    const { isSignupShow } = this.state;
    const signupHtml = () => (
      <div className="login">
        <div
          onClick={() => this.setState({ isSignupShow: false })}
          className="mask"
        />
        <div className="login-form">
          <WingBlank>
            <p className="flex-box">注册</p>
            <List>
              <InputItem
                {...getFieldProps('username')}
                type="text"
                placeholder="用户名"
                clear
                moneyKeyboardAlign="left"
              />
            </List>

            <WhiteSpace />
            <List>
              <InputItem
                {...getFieldProps('password')}
                type="password"
                placeholder="密码"
                clear
                moneyKeyboardAlign="left"
              />
            </List>
            <WhiteSpace />
            <List>
              <InputItem
                {...getFieldProps('repeatPwd')}
                type="password"
                placeholder="确认密码"
                clear
                moneyKeyboardAlign="left"
              />
            </List>
            <WhiteSpace />
            <List>
              <Button
                onClick={this.handleSubmit}
                type="primary"
                style={{ color: '#fff' }}
              >
                注册
              </Button>
            </List>
          </WingBlank>
        </div>
      </div>
    );
    return <div>{isSignupShow ? signupHtml() : null}</div>;
  }
}

export default Signup;
