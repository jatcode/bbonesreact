import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer 
class TodoList extends Component {
	render(){
		console.log(this.props)
		return(
			<h1>{`mobx ${this.props.store}`}</h1>

		);
	}
}

export default TodoList;
