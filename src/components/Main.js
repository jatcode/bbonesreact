import React, { Component } from 'react';
import { Header, Container, Sidebar, Content, Footer, NavBar } from '../layout/index'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import   Home from './Home';
import Login from '../containers/login/index'
import SignUp from '../containers/login/signup'
class Main extends Component {
	render(){
		//const links = [{linkTo:'/',linkName:'Home'},{linkTo:'/login',linkName:'Login'}];
		return (
			<SignUp />
		);
	}
};

export default Main;
