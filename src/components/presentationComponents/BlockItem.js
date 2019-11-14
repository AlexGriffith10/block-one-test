import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class BlockItem extends Component {
    
    render() {
    return (
        <div>
            <button data-toggle="collapse" data-target={`#${this.props.newBlock.id}`}>
                <p>Block ID{this.props.newBlock.id}</p>
                <p>Block timestamp{this.props.newBlock.timestamp}</p>
                <p>Block Action Count{this.props.newBlock.transactions.length}</p> </button>
            <div id={`${this.props.newBlock.id}`} className="collapse">
            <p>Full Output</p>
            <div>{this.props.allInfo}</div>
            </div>
        </div>
    )
    }
}

BlockItem.propTypes = {
    newBlock: PropTypes.object.isRequired
}
