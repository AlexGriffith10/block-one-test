import React, { Component } from 'react'
import EosService from '../../services/Eos.service'
import BlockContainer from './BlockContainer'
import Button from '../presentationComponents/Button'

export default class BlockListContainer extends Component {

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
                <Button onClick={(e) => {this.getBlocks()}}/>
            </div>
        )
    }
}

