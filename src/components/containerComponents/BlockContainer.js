import React, { Component } from 'react'
import BlockItem from '../presentationComponents/BlockItem'

class BlockContainer extends Component {

    constructor(props) {
        super(props);
    
        console.log(this.props)
    }
    render() {
        return this.props.blockInformation.map(blockInformation => (<BlockItem key={blockInformation.head_block_id} 
            blockInformation = {blockInformation} />
            )
        )
    }
}

export default BlockContainer
