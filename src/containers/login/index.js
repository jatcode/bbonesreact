import React, {Component} from 'react';
import { FormInput, FormInput1 } from '../../components/MyComponents'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
		const visible= 'visible';

    return (
      <div className={`loginform ${visible}`}>
        <div className='loginbar'>
          <a href="#">
            <span><img src="./pb-logo.jpg"/></span>
            <span>{'PROCESS BRIDGE'}</span>
          </a>
        </div>
        <form onSubmit={this.handleSubmit}>
            
          <FormInput1 type='text' label='Username' name='username'
            // value={this.state.value} onChange={this.handleChange}
          />
          <FormInput1 type='password' label='Password' name='password'
            // value={this.state.value} onChange={this.handleChange}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default Login;
