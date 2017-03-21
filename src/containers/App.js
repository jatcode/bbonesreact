import React, { Component } from 'react';
// import Main from '../components/Main';
// import SignUp from '../containers/login/signup'
import {Container } from '../layout/index.js';
import Login from '../containers/login/index';
import SignUP from '../containers/login/signup';
import Routes from '../containers/login/routerex';
import TodoList from './TodoList';
import TodoStore from './TodoStore';
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react';

// @observer(['login']) 
class App extends Component {
	constructor(props) {
		super(props);
	}
 render() {
	//  console.log('store in app',this.props.store)
	 return (
		 <div>
			 <SignUP />
			 <DevTools />
		 </div>
   );
 }
}

export default App;
{/* <h2>{this.props.store.todos[0]}</h2> */}
