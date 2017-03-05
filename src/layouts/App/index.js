import React, { Component } from 'react'
import { Header, Tab } from '../'
import './index.css'

export const App = (props) => {
  return (
    <div>
    	<Header />
    	<div className="container">
    		{props.children}
    	</div>
  		<Tab />
  	</div>
  )
}
