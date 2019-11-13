import React, { Component } from 'react'
import BlockItem from '../presentationComponents/BlockItem'

class BlockContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            allBlocks: []
        }
    }

    render() {
        return (this.props.allBlocks.map((currentBlock, i) => (<BlockItem key = {i} newBlock = {currentBlock} />
            ))
        )
    }
}

export default BlockContainer
