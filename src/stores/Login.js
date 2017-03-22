import {autorun, observable, action} from 'mobx'
var request = require('superagent');
import {SERVER} from '../constants'
import feClient from '../feClient'

const userService = feClient.service('users');

class Login {
  @observable user = {
    email: '',
    password: ''
  }

  @action performLogin(email, password, callback) {
    // console.log(this.state)
    // const {email, password} = this.state;
    if (email && password) {
      feClient.authenticate({type:'local', 'email':email, 'password':password})
      .then((result) => {
        console.log('Authenticated!', feClient.get('token'));
        console.log('result!', result);
      })
      .catch(function(error) {
        console.error('Error authenticating!', error);
      });
    } else {
      alert(`This is the data from the form ${email} and ${password} `);
    }
  }
  @action performSignUp(email, password) {
    if (email && password) {
      userService.create({email:email,password:password})
      .then((result) => {
        console.log('USER CREATED ', result);
      })
      .catch(function(error) {
        console.error('Error Creating!', error);
      });
    } else {
      alert(`This is the data from the form ${email} and ${password} `);
    }
  }
}
userService.on('created', function(user) {
  console.log('Someone created a user', user);
});
export default new Login();
