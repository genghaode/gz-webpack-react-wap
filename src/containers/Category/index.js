import React, { Component } from 'react'
import { connect } from 'react-redux'

const _Category = (props) => {
  return (
    <div>
      Category
      {props.children}
    </div>
  )
}

export const Category = connect(
  (state) => {
    return {

    }
  }, (dispatch) => {
    return {

    }
  }
)(_Category)
