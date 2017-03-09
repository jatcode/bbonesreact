import React, { Component } from 'react';
import Main from '../components/Main';
import Routir from '../router'

class App extends Component {
  
  render(){
    return(
      <div>
        <h1>MAIN APP</h1>
        <Main/>
        <Routir/>
      </div>
    );
  }
}

export default App;
