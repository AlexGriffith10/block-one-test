import React, { Component } from 'react'
import BlockItem from '../presentationComponents/BlockItem'

class BlockContainer extends Component {
    state= {}

    hardReset(){
        this.setState({ state: this.state})
    }

    render() {
        console.log("my new blocks")
        console.log(this.props.newBlocks)
        return (this.props.newBlocksS.map((newBlock) => (<BlockItem key = {newBlock.id} newBlock = {newBlock} reset = {this.hardReset}/>
            ))
        )
    }
}

export default BlockContainer
