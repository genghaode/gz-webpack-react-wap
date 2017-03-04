import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { pageConfig } from '../../routes'

class _Tab extends Component {
  render() {
    const { pathname } = this.props
    return (
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={pageConfig[pathname].tab}>
	    	<TabBar.Item title="首页" key="首页" icon={<i className="iconfont icon-wxbzhuye"></i>} selectedIcon={<i className="iconfont icon-wxbzhuye"></i>} selected={pathname === '/'} onPress={ ()=> {
	    			this._onPress('/')
	    		}}
	    	/>
	    	<TabBar.Item title="分类" key="分类" icon={<i className="iconfont icon-all"></i>} selectedIcon={<i className="iconfont icon-all"></i>} selected={pathname === '/category'} onPress={()=> {
	    			this._onPress('/category')
	    		}}
	    	/>
	    	<TabBar.Item title="我的" key="我的" icon={<i className="iconfont icon-account"></i>} selectedIcon={<i className="iconfont icon-account"></i>} selected={pathname === '/user'} onPress={()=> {
	    			this._onPress('/user')
	    		}}
	    	/>
	    </TabBar>
    )
  }
  _onPress(path) {
    this.context.router.push(path)
  }
}

_Tab.contextTypes = {
  router: React.PropTypes.object
}

export const Tab = connect(
  (state) => {
    return {
      pathname: state.routing.locationBeforeTransitions.pathname
    }
  }, (dispatch) => {
    return {

    }
  }
)(_Tab)
