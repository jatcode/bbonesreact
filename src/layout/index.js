import React from 'react';
import './layout.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import pblogo  from '../images/pb-logo.jpg'
import Public  from '../components/public'
import Login  from '../containers/login/index'
import SignUp  from '../containers/login/signup'



export function Header (props){
  return (
      <header>
        <div className="tinyheader">
					<a href="/">
            <span><img src={pblogo}/></span>
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
const Protected = () => <h3>Protected</h3>
export const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
export function Content (props){
  return (
    <div className="childbox content">
			 <Route path="/signup" component={SignUp}/>
			 <Route path="/login" component={Login}/>
			 <PrivateRoute path="/protected" component={Protected}/>
      {props.children}
    </div>
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
export const Sidebar = (props)=>
  <div className='childbox sidebar'>
    {props.children}
  </div>
export function Footer (props){
  return (
    <div className=" childbox footer is-center">
        RulesWare CopyRights 2017 
        {props.children}
    </div>
  );
}
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

