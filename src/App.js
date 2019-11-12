import React, { Component } from 'react';
import Header from './components/layouts/Header';
import LoadButtonContainer from './components/containerComponents/LoadButtonContainer'
import BlockContainer from './components/containerComponents/BlockContainer';
import axios from 'axios';
import getBlocks from './api/ApiCalls'
import './App.css';

class App extends Component {
  state = {
    blockInformation: []
  }

  componentDidMount(){
    axios.get('https://api.eosnewyork.io/v1/chain/get_info')
    .then(response => {
      console.log(response.data);
      this.setState({blockInformation: response.data});
    }).then(console.log('this is my state ' + this.state))
  }

  // getBlocks = () => {
  //   axios.get('https://api.eosnewyork.io/v1/chain/get_info')
  //   .then(response => this.setState({blockInformation: [...this.state.blockInformation, response.data]}))
  //   console.log("new state is " + this.state)
  // }

  render(){
    return (
      <div className="App">
        <div className = "Container">
          <Header />
          {/* <BlockContainer blockInformation = {this.state.blockInformation}/> */}
          <LoadButtonContainer onClick = {getBlocks}/>
        </div>
      </div>
    );
  }
}

export default App;
