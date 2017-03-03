import React, { Component } from 'react'
import { Header } from '../Header'


export const App = (props) => {
  return (
    <div>
    	<Header />
    	{props.children}
  		{props.home}
  		{props.tab}
  	</div>
  )
}
