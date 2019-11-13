import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class BlockItem extends Component {
    render() {
        console.log('#######')
        console.log(this.props.newBlock.id)
    return (
        <div>
            <p>{this.props.newBlock.id}</p>
            <p>{this.props.newBlock.timeStamp}</p>
            <p>{this.props.newBlock.transactions}</p>
        </div>
    )
    }
}

BlockItem.propTypes = {
    blockInformation: PropTypes.object.isRequired
}
