import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class BlockItem extends Component {
    render() {
    const {head_block_id, head_block_time, fork_db_block_num} = this.props.blockInformation
    return (
        <div>
            <p>{head_block_id}</p>
            <p>{head_block_time}</p>
            <p>{fork_db_block_num}</p>
        </div>
    )
    }
}

BlockItem.propTypes = {
    blockInformation: PropTypes.object.isRequired
}
