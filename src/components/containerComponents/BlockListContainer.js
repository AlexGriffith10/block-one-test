import React, { Component } from 'react'
import EosService from '../../services/new.service'
import BlockContainer from './BlockContainer'

export class BlockListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allBlocks: []
        };
    };

    getBlocks(){
        EosService.getAllBlocks(this)
        console.log('This is component state')
        console.log(this.state)
    }

    getAllBlocks(blocks){
        console.log("GOT TO ALLBLOCKS");
        this.setState({allBlocks: blocks})
    }

    getNewBlocks = () => {
        console.log(this.state)
      }

    render() {
        return (
            <div>
                <BlockContainer allBlocks = {this.state.allBlocks}/>
                <button onClick={(e) => {this.getBlocks()}}>New Button</button>
                <button onClick = {this.getNewBlocks}>Check state</button>
            </div>
        )
    }
}

export default BlockListContainer
