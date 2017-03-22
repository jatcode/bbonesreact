import React from  'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'mobx-react'
import  App   from './containers/App'
import  TodoList   from './containers/TodoList'

import  stores from './stores'

ReactDOM.render(
	<Provider login ={stores.login} appState={stores.appState}>
		<Router> 
	    <App />
		</Router>
	</Provider>
	,
  document.getElementById('root')
);

