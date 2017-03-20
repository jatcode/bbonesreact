import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import {FormInput, FormInput1, InputField} from '../../components/MyComponents'
import {SERVER} from '../../constants'
import {observer} from 'mobx-react';

var request = require('superagent');

@observer
class SignUp extends Component {
  constructor(props) {
    super(props);
    var request = require('superagent');
    // this.state = {
    //   username: '',
    //   password: ''
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProperty = this.updateProperty.bind(this)
  }

  updateProperty(key, value) {
    this.props.person[key] = value
  }

  handleSubmit(event) {
    console.log(this.state)
    const {username, password} = this.state;
    event.preventDefault();
    if (username && password) {
      request.post(`${SERVER}/signup`).send({email: username, password: password}).then(data => {
        console.log('data comming from response', data)
      }).catch(error => {
        console.log('ERROR comming from response', error)
      })
    } else {
      alert(`This is the data from the form ${username} and ${password} `);
    }
  }

  render() {
    const visible = 'visible';
		var {email, password} = this.props.store.user;
		console.log('store abajo',this.props.store.user);

    return (
      <div className={`loginform ${visible}`}>
        <div className='loginbar'>
          <a href="#">
            <span><img src="./pb-logo.jpg"/></span>
            <span>{'PROCESS BRIDGE'}</span>
            <span>{'SIGNUP'}</span>
          </a>
        </div>
        <form onSubmit={this.handleSubmit}>
          <InputField type='text' name='email' value={email} onChange={this.updateProperty} placeholder='Email'/>
          <InputField type='password' name='password' value={password} onChange={this.updateProperty} placeholder='Password'/>
          {/* <FormInput1 type='text' placeholder='Username' name='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
          <FormInput1 type='password' placeholder='Password' name='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/> */}
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default SignUp;
