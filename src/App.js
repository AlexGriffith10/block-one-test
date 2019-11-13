import React, { Component } from 'react';
import Header from './components/layouts/Header';
import LoadButtonContainer from './components/containerComponents/LoadButtonContainer'
import BlockListContainer from './components/containerComponents/BlockListContainer';
import './App.css';
import { BASEURL, BLOCKCOUNT, BLOCKLIST } from './constants/Constants';
import helperService from './services/eos.service.'

class App extends Component {
  state = {
    blockInformation: [],
    myBlocks: []
  }

  async componentDidMount(){

    // let tenBlocks = await EosService.buildBlockList()
    // this.setState({myBlocks: [tenBlocks]})
    // axios.get(BASEURL + 'get_info')
    // .then(response => {
    // this.setState({blockInformation: [response.data]})
    // })
  }
  
  async updateBlocks(){
      helperService.buildBlockList(this)
  }

  render(){
    return (
      <div className="App">
        <div className = "Container">
          <Header />
          <BlockListContainer blockInformation = {this.state.blockInformation} newBlocks = {this.state.myBlocks} />
          <LoadButtonContainer myBlocks={this.state.myBlocks} newBlocks = {this.updateBlocks}/>
        </div>
      </div>
    );
  }
}

export default App;
