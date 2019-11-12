import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class BlockItem extends Component {
    render() {
        console.log('#######')
        console.log(this.props.newBlock)
    return (
        <div>
            <p>{this.props.newBlock.data.id}</p>
            <p>{this.props.newBlock.data.timeStamp}</p>
            <p>{this.props.newBlock.data.transactions}</p>
        </div>
    )
    }
}

BlockItem.propTypes = {
    blockInformation: PropTypes.object.isRequired
}
