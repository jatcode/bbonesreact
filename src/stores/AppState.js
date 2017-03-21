import { autorun,  observable } from 'mobx'


class AppState {
	@observable currentUser = {
		email: '',
		password: ''
	}
}

//var store = window.store = new AppState 

export default new AppState;
