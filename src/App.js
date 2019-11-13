import React, { Component } from 'react';
import Header from './components/layouts/Header';
import BlockListContainer from './components/containerComponents/BlockListContainer';
import './App.css';

class App extends Component {

  componentDidMount(){
  }

  render(){
    return (
      <div className="App">
        <div className = "Container">
          <Header />
          <BlockListContainer />
        </div>
      </div>
    );
  }
}

export default App;
