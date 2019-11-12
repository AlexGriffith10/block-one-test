import React, { Component } from 'react'
import BlockItem from '../presentationComponents/BlockItem'

class BlockContainer extends Component {

    render() {
        console.log("my new blocks")
        console.log(this.props.newBlocks)
        return this.props.newBlocks.map((newBlock) => (<BlockItem newBlock = {newBlock} />
            )
        )
    }
}

export default BlockContainer
