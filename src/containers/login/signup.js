import React, { Component } from 'react';
// import { SreguLabel, MyButton } from '../../components/MyComponents'

class SignUp extends Component {

	render(){
		return(
			<form>
				<header>SignUp Form</header>
				{/* <SreguLabel labelFor={'userNombre'} labelName={'usuario'} /> */}
				{/* <MyButton> boton</MyButton> */}
				<input type='text' name='username' />
				<input type='password' name='username' />
			</form>
		);
	}
}
export default SignUp;
