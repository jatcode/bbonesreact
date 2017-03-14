import React, { Component } from 'react';
// import { SreguLabel, MyButton } from '../../components/MyComponents'

class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

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

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Username:
					<input type='text' name='username' />
				</label>
				<label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
				<label>
          Password:
					<input type='password' value={this.state.value} onChange={this.handleChange}  name='username' />
        </label>
        <input type="submit" value="Submit" />
			</form>
		);
	}
}
export default Login;
