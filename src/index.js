import React from  'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import  App   from './containers/App'
import  TodoList   from './containers/TodoList'
import  AppState from './stores/AppState'

ReactDOM.render(
	<Router> 
    <App store ={AppState} />
	</Router>
	,
  document.getElementById('root')
);

