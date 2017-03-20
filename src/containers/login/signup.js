import React, { Component } from 'react';
import {
	  BrowserRouter as Router,
	  Route,
	  Link,
	  Redirect,
	  withRouter
} from 'react-router-dom'

import { FormInput, FormInput1 } from '../../components/MyComponents'
import { SERVER } from '../../constants' 
var request = require('superagent');

class SignUp extends Component {
  constructor(props) {
    super(props);var request = require('superagent');
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// .type('form')
    handleSubmit(event) {
        console.log(this.state)
        const {username, password } = this.state;
    event.preventDefault();
    if(username && password){
      request.post(`${SERVER}/signup`)
      .send({ email: username, password: password })
      .then(data=>{console.log(`data comming from response`,data)})
      .catch(error=>{console.log(`ERROR comming from response`,error)})
    }else{
      alert(`This is the data from the form ${username} and ${password} `);
    }
  }

  render() {
		const visible= 'visible';

    return (
      <div className={`loginform ${visible}`}>
        <div className='loginbar'>
          <a href="#">
            <span><img src="./pb-logo.jpg"/></span>
            <span>{'PROCESS BRIDGE'}</span>
            <span>{'SignUP'}</span>
          </a>
        </div>
        <form onSubmit={this.handleSubmit}>
            
          <FormInput1 type='text' placeholder='Username' name='username'
              value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}
          />
          <FormInput1 type='password' placeholder='Password' name='password'
              value={this.state.password} onChange={(e)=> this.setState({password:e.target.value})}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default SignUp;
