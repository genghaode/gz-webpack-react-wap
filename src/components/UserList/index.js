import React, { Component } from 'react'
import { List, WhiteSpace } from 'antd-mobile'
import './index.css'

class _UserList extends Component {
  render() {
    return (
      <div>
      	<WhiteSpace size="xl" />
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
				<WhiteSpace size="xl" />
				<List 
				  renderFooter={() => <div className="userListFooter">版本号</div>}
				>
				  <List.Item 
				    arrow="horizontal"
				    thumb={<i className="iconfont icon-favor"></i>}
				    onClick={()=>this._onClick('/user/favor')}
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
