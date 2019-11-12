import React, { Component } from 'react';
import Header from './components/layouts/Header';
import LoadButtonContainer from './components/containerComponents/LoadButtonContainer'
import BlockContainer from './components/containerComponents/BlockContainer';
import axios from 'axios';
import './App.css';
import { BASEURL } from './constants/Constants';

class App extends Component {
  state = {
    blockInformation: []
  }

  componentDidMount(){
    axios.get(BASEURL + 'get_info')
    .then(response => {
      this.setState({blockInformation: [response.data]});
    }).then(console.log('this is my state ' + this.state))
  }

  getNewBlocks = () => {
    axios.get(BASEURL + 'get_info')
    .then(response => {
      console.log(response.data);
      this.setState({blockInformation: [response.data]});
    }).then(console.log('this is my NEW state ' + this.state))
  }

  render(){
    return (
      <div className="App">
        <div className = "Container">
          <Header />
          <BlockContainer blockInformation = {this.state.blockInformation}/>
          <LoadButtonContainer newBlocks = {this.getNewBlocks}/>
        </div>
      </div>
    );
  }
}

export default App;
