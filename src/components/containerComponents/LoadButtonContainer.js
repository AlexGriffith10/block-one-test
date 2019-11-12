import React, { Component } from 'react';
import Button from '../presentationComponents/Button';

export class LoadButtonContainer extends Component {
    render() {
        return <Button onClick={this.props.getBlocks}/>
    }
}

export default LoadButtonContainer
