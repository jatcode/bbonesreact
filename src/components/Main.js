import React, { Component } from 'react';
import { Header, Container, Sidebar, Content, Footer  } from '../layout/index'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'
import   Home from './Home';

class Main extends Component {
	render(){
		return (
			<Container>
					<Header>
						<ul>
			        <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
			        <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About</Link></li>
						</ul>
					</Header> 
					<Home/>
					<Footer/>
							{/* {React.cloneElement(this.props.children, this.props)} */}
			</Container>
		);
	}
};

export default Main;