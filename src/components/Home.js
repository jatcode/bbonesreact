import React, { Component } from 'react';
// import User from '../containers/users/index';
import Login from '../containers/login/index'

class Home extends Component {
  render() {
    return (
      <div>
        {/* <User {...this.props}/> */}
				{/* {...this.props} */}
				<Login />
      </div>
    );
  }
}

export default Home;
