import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pageConfig } from '../../routes'
import { NavBar } from 'antd-mobile'

class _Header extends Component {
  render() {
    const { pathname } = this.props
    if (pageConfig[pathname].headerType == '1') {
      return (
        <NavBar 
          mode = "dark"
          iconName={null}
          rightContent = {<i className="iconfont icon-search"></i>} 
        > 
        { pageConfig[pathname].title } 
        </NavBar>
      )
    } else if (pageConfig[pathname].headerType == '2') {
      return (
        <NavBar 
          mode = "dark"
          leftContent="返回"
          onLeftClick={() => this._onLeftClick()}
        > 
        { pageConfig[pathname].title } 
        </NavBar>
      )
    } else {
      return (<div></div>)
    }
  }
  _onLeftClick() {
    this.context.router.goBack()
  }
}

_Header.contextTypes = {
  router: React.PropTypes.object
}

export const Header = connect(
  (state) => {
    return {
      pathname: state.routing.locationBeforeTransitions.pathname
    }
  }, (dispatch) => {
    return {

    }
  }
)(_Header)
