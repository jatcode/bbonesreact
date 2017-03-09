import React, { Component } from 'react';
import Login from '../containers/login/index'
import { Sidebar, Content  } from '../layout/index'

class Home extends Component {
  render() {
    return (
      <div>
        {/* <User {...this.props}/> */}
				{/* {...this.props} */}
        <Sidebar/>
        <Content/>
        {/* <Login /> */}
      </div>
    );
  }
}

export default Home;
