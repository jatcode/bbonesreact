import React, { Component } from 'react';
import { Container,Header,Content } from '../layout/index.js';
import Login from '../containers/login/index';
import SignUP from '../containers/login/signup';
import Routes from '../containers/login/routerex';
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
			 <Header />
			 <Content/>
			 <DevTools />
		 </div>
   );
 }
}

export default App;
{/* <h2>{this.props.store.todos[0]}</h2> */}
