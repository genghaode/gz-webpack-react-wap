import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Home, Category, User, Service, Settings, Favor, Login } from '../containers'
import { App } from '../layouts'

const history = syncHistoryWithStore(browserHistory, store)

export const Root = () => {

  return (
    <Provider store={store}>
	    <Router history={history}>
			  <Route path="/" component={App}>
		    	<IndexRoute	component={Home} />
			    <Route path="category" component={Category}>
			    </Route>
			    <Route path="user">
				    <IndexRoute	component={User} />
						<Route path="favor" component={Favor} />
			    	<Route path="settings" component={Settings} />
			    	<Route path="service" component={Service} />
			    </Route>
			    <Route path="login" component={Login} />
		    </Route>
	  	</Router>
	  </Provider>
  )
}
