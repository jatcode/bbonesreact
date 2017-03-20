import { autorun,  observable } from 'mobx'


class LoginState {
	@observable todos = ['buy milk','buy eggs']
	@observable filter = ''
}

//var store = window.store = new LoginState 

export default new LoginState;
