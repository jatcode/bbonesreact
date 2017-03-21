import React from 'react';
import './layout.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export const DefaultLayout = ({component:Component,...rest}) =>{
  return(
    <Route {...rest} render={matchProps =>(
      <div className="DefaultLayout">
        <div className="Header">Header</div>
          <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )} />
  )
};
export const Sidebar = (props)=>
  <div className='childbox sidebar'>
    {props.children}
  </div>

export function Header (props){
  return (
      <header>
        <div className="tinyheader">
          <a href="#">
            <span><img src="./pb-logo.jpg"/></span>
            <span>{'PB_0.0.2'}</span>
          </a>
          <div className="menu-login">
            <Link to='/signup' className='menu-login-link'>SignUp</Link>
            <Link to='/login'  className='menu-login-link'>Login</Link>
          </div>
        </div>
          {props.children}
      </header>
  );
}
export function NavBar (props){
	const {links} = props;
  return (
    <nav className=" navbar sidebar">
			<ul className="menu-list">
					{ links.map(({linkTo, linkName},i)=>
						<li key={i} className='menu-item'><Link to={linkTo} className='menu-link'>{linkName}</Link></li>
					)}
			</ul>
    </nav>
  );
}

export function Container (props){
  return (
    <div className="container">
      {props.children}
    </div>
  );
}
export function Content (props){
  return (
    <div className="childbox content">
			<h3>Content goes here </h3>
      {props.children}
    </div>
  );
}

export function Footer (props){
  return (
    <div className=" childbox footer is-center">
        RulesWare CopyRights 2017 
        {props.children}
    </div>
  );
}

