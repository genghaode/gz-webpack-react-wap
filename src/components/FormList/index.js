import React, { Component } from 'react'
import { List, WhiteSpace, Button, InputItem } from 'antd-mobile'

class _FormList extends Component {
  render() {
    return (
      <div>
    		<WhiteSpace />
				<List>
				  <InputItem
				    placeholder="请输入用户名"
				    clear
				    autoFocus
				    onChange={this.props._onChangeName}
				    error={this.props.errorName}
				  >
				    用户名
				  </InputItem>
				  <InputItem
				    placeholder="请输入密码"
				    clear
				    type="password"
				    onChange={this.props._onChangePwd}
				    error={this.props.errorPwd}
				  >
				   	密码
				  </InputItem>
				</List>
				<WhiteSpace />
				<div className="loginBtnWrap">
					<Button type="primary" loading={this.props.isloading} onClick={this.props._onClick}>登录</Button>
				</div>
    	</div>
    )
  }
}

export const FormList = _FormList
