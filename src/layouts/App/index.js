import React, { Component } from 'react'
import { Header } from '../Header'
import { Tab } from '../Tab'
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
