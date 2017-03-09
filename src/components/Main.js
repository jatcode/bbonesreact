import React, { Component } from 'react';
import { Header, Container, Sidebar, Content, Footer  } from '../layout/index'
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
					<Sidebar/>
					<Content/>
					<Footer/>
							{/* {React.cloneElement(this.props.children, this.props)} */}
			</Container>
		);
	}
};

export default Main;