import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import {FormInput, InputField} from '../../components/MyComponents'
import {inject, observer} from 'mobx-react';
import pblogo  from '../../images/pb-logo.jpg'

var request = require('superagent');

@inject('login')@observer
class SignUp extends Component {
  constructor(props) {
    super(props);
    var request = require('superagent');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProperty = this.updateProperty.bind(this)
  }

  updateProperty(key, value) {
    this.props.login.user[key] = value
  }

  handleSubmit(event) {
    event.preventDefault();
    const {email, password } = this.props.login.user;
    console.log('this is the email:',email);
    console.log('this is the paassword:',password);
    this.props.login.performLogin(email,password);
    // const {username, password} = this.state;
    // if (username && password) {
    //   request.post(`${SERVER}/signup`).send({email: username, password: password}).then(data => {
    //     console.log('data comming from response', data)
    //   }).catch(error => {
    //     console.log('ERROR comming from response', error)
    //   })
    // } else {
    //   alert(`This is the data from the form ${username} and ${password} `);
    // }
  }

  render() {
    const visible = 'visible';
    var {email, password} = this.props.login.user;
    return (
      <div className={`loginform ${visible}`}>
        <div className='loginbar'>
          <a href="#">
            <span><img src={pblogo}/></span>
            <span id='title'>{'SIGNUP'}</span>
          </a>
        </div>
        <form onSubmit={this.handleSubmit}>
          <InputField type='text' name='email' placeholder='Email' value={email} onChange={this.updateProperty}/>
          <InputField type='password' name='password' placeholder='Password' value={password} onChange={this.updateProperty}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default SignUp;