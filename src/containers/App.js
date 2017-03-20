import React, { Component } from 'react';
// import Main from '../components/Main';
// import SignUp from '../containers/login/signup'
import {Container } from '../layout/index.js';
import Login from '../containers/login/index'
import Routes from '../containers/login/routerex'

class App extends Component {
	constructor(props) {
		super(props);
	}
 render() {
	 return (
		 <Container>
			 {/* <Login /> */}
			 <Routes />
			 {/* {this.props.children} */}
		 </Container>
   );
 }
}

export default App;
