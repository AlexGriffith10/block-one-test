import React, { Component } from 'react';
import Header from './components/layouts/Header';
import LoadButtonContainer from './components/containerComponents/LoadButtonContainer'
import BlockContainer from './components/containerComponents/BlockContainer';
import axios from 'axios';
import './App.css';
import { BASEURL, BLOCKCOUNT, BLOCKLIST } from './constants/Constants';
import { combineBlockInfo, buildBlockList} from './services/EosService'

class App extends Component {
  state = {
    blockInformation: [],
    myBlocks: []
  }

  async componentDidMount(){
    axios.get(BASEURL + 'get_info')
    .then(response => {
      this.setState({blockInformation: [response.data]});
    }).then(console.log('this is my state ' + this.state))

    let tenBlocks = await buildBlockList()
    this.setState({myBlocks: [tenBlocks]})
    // .then(response => response.data)
    // .then(response => this.setState({myBlocks: response}));
  }

  getNewBlocks = () => {
    console.log(this.state)
  }

  // buildBlockList = (EXPECTEDNUMBEROFBLOCKS) => {
  //     console.log("running")
  //       combineBlockInfo()
  //       .then(response => this.setState({blockInformation: [ ...this.state.blockInformation, response]}))
  // }

  render(){
    return (
      <div className="App">
        <div className = "Container">
          <Header />
          <BlockContainer blockInformation = {this.state.blockInformation} newBlocks = {this.state.myBlocks}/>
          <LoadButtonContainer blockInformation={this.state.blockInformation} newBlocks = {buildBlockList}/>
          <button onClick = {this.getNewBlocks}>Check state</button>
        </div>
      </div>
    );
  }
}

export default App;
