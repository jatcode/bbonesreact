import React, { Component } from 'react';
// import Main from '../components/Main';
// import SignUp from '../containers/login/signup'
import {Container } from '../layout/index.js';
import Login from '../containers/login/index'
import SignUp from '../containers/login/signup'

class App extends Component {
	constructor(props) {
		super(props);
	}
 render() {
	 return (
		 <Container>
			 <SignUp />
			 {this.props.children}
		 </Container>
   );
 }
}

export default App;
