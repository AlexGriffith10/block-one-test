import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class BlockItem extends Component {
    render() {
        console.log("item state info " + this.props.blockInformation);
    const {id, timeStamp, actionCountForBlock} = this.props.blockInformation
    return (
        <div>
            <p>{id}</p>
            <p>{timeStamp}</p>
            <p>{actionCountForBlock}</p>
        </div>
    )
    }
}

BlockItem.propTypes = {
    blockInformation: PropTypes.object.isRequired
}
