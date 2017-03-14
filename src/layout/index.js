import React from 'react';
import './layout.css';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




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
export const ZideBar = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '20%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bubblegum">Bubblegum</Link></li>
          <li><Link to="/shoelaces">Shoelaces</Link></li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places as you want in your app. 
          // It will render along with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else 
              //that requires you to render multiple things in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as above, but different components this time.
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        ))}
      </div>
    </div>
  </Router>
);

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
	/*export function Header (props){
  return (
    <div className=" childbox header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <a className="pure-menu-heading" href="">{'PB_0.0.2'}</a>
            <ul className="pure-menu-list">
                 <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li> 
                 <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tour</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sign Up</a></li> 
                {props.children}
            </ul>
        </div>
    </div>
  );
}*/

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

