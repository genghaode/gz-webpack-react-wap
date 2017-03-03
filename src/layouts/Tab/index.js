import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { browserHistory } from 'react-router'

class _Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'home'
    }
  }

  render() {
    return (
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" >
	    	<TabBar.Item title="首页" key="首页" icon={<i className="iconfont icon-wxbzhuye"></i>} selectedIcon={<i className="iconfont icon-wxbzhuye"></i>} selected={this.state.selected === 'home'} onPress={ ()=> {
	    			this.setState({selected: 'home'})
	    			browserHistory.push('/')
	    		}}
	    	>
	    		<div>1111</div>
	    	</TabBar.Item>
	    	<TabBar.Item title="分类" key="分类" icon={<i className="iconfont icon-all"></i>} selectedIcon={<i className="iconfont icon-all"></i>} selected={this.state.selected === 'all'} onPress={()=> {
	    			this.setState({selected: 'all'})
	    			browserHistory.push('/')
	    		}}
	    	>
	    		<div>2222</div>
	    	</TabBar.Item>
	    	<TabBar.Item title="我的" key="我的" icon={<i className="iconfont icon-account"></i>} selectedIcon={<i className="iconfont icon-account"></i>} selected={this.state.selected === 'me'} onPress={()=> {
	    			this.setState({selected: 'me'})
	    			browserHistory.push('/user')
	    		}}
	    	>
	    		<div>333</div>
	    	</TabBar.Item>
	    </TabBar>
    )
  }
}
export const Tab = _Tab
