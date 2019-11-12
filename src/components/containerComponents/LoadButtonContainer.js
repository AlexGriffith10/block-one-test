import React, { Component } from 'react';
import Button from '../presentationComponents/Button';
import buildRequest from '../../services/EosService'
import axios from 'axios';
import {BASEURL} from '../../constants/Constants'

export class LoadButtonContainer extends Component {

    render() {
        console.log(this.props.newBlocks)
        return <Button  newBlocks = {this.props.newBlocks} onClick = {this.props.newBlocks.bind(this)}/>
    }
}

export default LoadButtonContainer
