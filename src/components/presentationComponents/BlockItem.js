import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class BlockItem extends Component {
    
    render() {
    return (

        <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={'#'+this.props.newBlock.id} aria-expanded="true" aria-controls="collapseOne">
          Block ID: {this.props.newBlock.id}
          Block Timestamp: {this.props.newBlock.timestamp}
          Block Action Count: {this.props.newBlock.transactions.length}
        </button>
      </h5>
    </div>

    <div id={this.props.newBlock.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
       {this.props.allInfo}
      </div>
    </div>
  </div>
  </div>
    )
    }
}

BlockItem.propTypes = {
    newBlock: PropTypes.object.isRequired
}
