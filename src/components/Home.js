import React, { Component } from 'react';
import Login from '../containers/login/index'
import { Sidebar, Content  } from '../layout/index'


class Home extends Component {
  render() {
    return (
      <div className='maincontent'>
				{/*<Sidebar/>*/}
        <Content/>
      </div>
    );
  }
}

export default Home;
