import { autorun,  observable, action } from 'mobx'
var request = require('superagent');
import {SERVER} from '../constants'
import feClient from '../feClient'

class Login {
	@observable user = {
		email: '',
		password: ''
	}
	

	
	@action performLogin(email, password,callback){
		// console.log(this.state)
    // const {email, password} = this.state;
    if (email && password) {
      // request.post(`${SERVER}/signup`)
			// .send({email: email, password: password})
			// .then(data => {
      //   console.log('data comming from response', data)
      // }).catch(error => {
      //   console.log('ERROR comming from response', error)
      // })
      feClient
			.authenticate({
		    type: 'local',
		    'email': email,
		    'password': password
		  })
			.then((result)=>{
				console.log('Authenticated!', app.get('token'));
				console.log('result!', result);
			})
			.catch(function(error){
		    console.error('Error authenticating!', error);
		  });
  
    } else {
      alert(`This is the data from the form ${email} and ${password} `);
    }
	}
}

//var store = window.store = new LoginState 

export default new Login();
