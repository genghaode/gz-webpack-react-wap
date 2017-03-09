import React, { Component } from 'react'
import { List, WhiteSpace, Button } from 'antd-mobile'
import './index.css'

class _UserList extends Component {
  render() {
    return (
      <div>
      	<WhiteSpace />
      	<div className="loginBtnWrap" hidden={this.props.loginStatus}>
	      	<Button type="primary" onClick={() => this._onClick('/login')}>登录</Button>
      	</div>
      	<WhiteSpace />
				<List>
				  <List.Item 
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-settings"></i>}
				    onClick={()=>this._onClick('/user/settings')}
				  >
				    设置
				  </List.Item>
				  <List.Item 
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-service"></i>}
				    onClick={()=>this._onClick('/user/service')}
				  >
				    客服
				  </List.Item>
				</List>
				<WhiteSpace />
				<List 
				  renderFooter={() => <div className="userListFooter">版本号</div>}
				>
				  <List.Item 
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-favor"></i>}
				    onClick={()=>{return this.props.loginStatus ? this._onClick('/user/favor'):this._onClick('/login')}}
				  >
				    我的收藏
				  </List.Item>
				</List>
    	</div>
    )
  }
  _onClick(path) {
    this.context.router.push(path)
  }
}

_UserList.contextTypes = {
  router: React.PropTypes.object
}

export const UserList = _UserList
