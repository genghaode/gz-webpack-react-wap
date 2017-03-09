import React, { Component } from 'react'
import { List, WhiteSpace, Button } from 'antd-mobile'
import './index.css'
const Item = List.Item

class _UserList extends Component {
  render() {
    return (
      <div>
      	<WhiteSpace />
      	<div className="loginBtnWrap" hidden={this.props.loginStatus != '1'? false:true}>
	      	<Button type="primary" onClick={() => this._onClick('/login')}>登录</Button>
      	</div>
      	<WhiteSpace />
				<List>
				  <Item 
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-settings"></i>}
				    onClick={()=>this._onClick('/user/settings')}
				  >
				    设置
				  </Item>
				  <Item
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-service"></i>}
				    onClick={()=>this._onClick('/user/service')}
				  >
				    客服
				  </Item>
				</List>
				<WhiteSpace />
				<List 
				  renderFooter={() => <div className="userListFooter">版本号</div>}
				>
				  <Item
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-favor"></i>}
				    onClick={()=>{return this.props.loginStatus != '1'? this._onClick('/login'):this._onClick('/user/favor')}}
				  >
				    我的收藏
				  </Item>
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
