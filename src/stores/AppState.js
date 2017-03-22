import { autorun,  observable } from 'mobx'

class AppState {
	@observable currentUser = {
		isAuthenticated: false,
		redirectToReferrer: false,
		email: '',
		password: '',
	}
}

export default new AppState();
