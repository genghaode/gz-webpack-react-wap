import React, { Component } from 'react'
import { connect } from 'react-redux'

const _Category = (props) => {
  const { num } = props
  return (
    <div>
			Category
			{num}
			{props.children}
		</div>
  )
}

export const Category = connect(
  (state) => {
    return {
      num: state.test1
    }
  }, (dispatch) => {
    return {

    }
  }
)(_Category)
