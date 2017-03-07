import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { pageConfig } from '../../routes'

const Item = TabBar.Item

class _Tab extends Component {
  render() {
    const { pathname } = this.props

    return (
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={pageConfig[pathname].tab}>
	    	<Item title="首页" key="首页" icon={<i className="iconfont icon-home"></i>} selectedIcon={<i className="iconfont icon-homefill"></i>} selected={pathname === '/'} onPress={ ()=> {
	    			this._onPress('/')
	    		}}
	    	/>
	    	<Item title="分类" key="分类" icon={<i className="iconfont icon-circle"></i>} selectedIcon={<i className="iconfont icon-circlefill"></i>} selected={pathname === '/category'} onPress={()=> {
	    			this._onPress('/category')
	    		}}
	    	/>
	    	<Item title="我的" key="我的" icon={<i className="iconfont icon-people"></i>} selectedIcon={<i className="iconfont icon-peoplefill"></i>} selected={pathname === '/user'} onPress={()=> {
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
