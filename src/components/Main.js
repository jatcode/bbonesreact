import React, { Component } from 'react';
import { Header, Container, Sidebar, Content, Footer, NavBar } from '../layout/index'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import   Home from './Home';

class Main extends Component {
	render(){
		const links = [{linkTo:'/',linkName:'Home'},{linkTo:'/login',linkName:'Login'}];
		return (
			<Container>
					<Header>
						{/* <NavBar links={links} /> */}
					</Header> 
					{/* <Home/>
					<Footer/> */}
							{/* {React.cloneElement(this.props.children, this.props)} */}
			</Container>
		);
	}
};

export default Main;
