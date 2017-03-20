import { autorun,  observable } from 'mobx'


class AppState {
	@observable todos = ['buy milk','buy eggs']
	@observable filter = ''
	@observable user = {
		email: '',
		password: ''
	}
}

//var store = window.store = new AppState 

export default new AppState;
