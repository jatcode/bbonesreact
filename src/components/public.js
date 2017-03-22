import React, {Component} from 'react';
import {FormInput, InputField} from '../components/MyComponents'
import {inject, observer} from 'mobx-react';
import pblogo  from '../images/pb-logo.jpg'


@inject('login','appState')@observer
class Public extends Component {
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
  }

  render() {
		const visible = 'visible';
		console.log('appState',this.props)
    var {email, password} = this.props.login.user;
    return (
      <div className={`loginform ${visible}`}>
        <div className='loginbar'>
          <a href="#">
            <span id='title'>{'PUBLIC'}</span>
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
export default Public;
