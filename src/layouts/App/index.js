import React, { Component } from 'react'
import { Header, Tab } from '../'

export const App = (props) => {
  return (
    <div>
    	<Header />
    	{props.children}
  		<Tab />
  	</div>
  )
}
