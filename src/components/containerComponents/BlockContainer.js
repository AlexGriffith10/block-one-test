import React, { Component } from 'react'
import BlockItem from '../presentationComponents/BlockItem'
import PropTypes from 'prop-types'

export default class BlockContainer extends Component {
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

BlockContainer.propTypes = {
    allBlocks: PropTypes.array.isRequired
}
