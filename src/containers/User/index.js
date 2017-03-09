import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserList } from '../../components'

const _User = (props) => {
  return (
    <div>
			<UserList loginStatus={props.loginStatus} />
		</div>
  )
}

export const User = connect((state) => {
  return {
    loginStatus: state.loginStatus
  }
}, (dispatch) => {
  return {

  }
})(_User)
