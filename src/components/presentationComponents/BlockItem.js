import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class BlockItem extends Component {
    render() {
        console.log('#######HERE')
        console.log(this.props.newBlock)
    return (
        <div>
            <p>{this.props.newBlock.id}</p>
            <p>{this.props.newBlock.timestamp}</p>
            <p>{this.props.newBlock.transactions.length}</p>
        </div>
    )
    }
}

BlockItem.propTypes = {
    blockInformation: PropTypes.object.isRequired
}
