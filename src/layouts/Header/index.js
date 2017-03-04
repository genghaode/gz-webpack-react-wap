import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pageConfig } from '../../routes'
import { NavBar, Icon } from 'antd-mobile'

const _Header = (props) => {
  return ( 
    <NavBar mode = "dark"
    rightContent = {
      <i className="iconfont icon-wxbsousuotuiguang"></i>
    } > { pageConfig[props.pathname].title } </NavBar>
  )
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


