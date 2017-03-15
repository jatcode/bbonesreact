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
        <form onSubmit={this.handleSubmit}>
          <FormInput label='myLabel' name='dallas'/>
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type='password' value={this.state.value} onChange={this.handleChange} name='username'/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
export default Login;
