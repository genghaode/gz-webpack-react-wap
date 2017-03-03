import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pageConfig } from '../../routes'


const _Header = (props) => {
  return (
    <div>
    	<h1>{pageConfig[props.pathname].title}</h1>
    </div>
  )
}

export const Header = connect(
  (state) => {
    console.log(state)
    return {
      pathname: state.routing.locationBeforeTransitions.pathname
    }
  }, (dispatch) => {
    return {

    }
  }
)(_Header)
