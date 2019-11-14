import React, { Component } from 'react'
import EosService from '../../services/Eos.service'
import BlockContainer from './BlockContainer'
import Button from '../presentationComponents/Button'
import Spinner from 'react-bootstrap/Spinner'
import '../../App.css'

export default class BlockListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allBlocks: [],
            loading: false
        };
    };

    getBlocks(){
        this.setState({loading: true})
        EosService.getAllBlocks(this)
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div><Spinner animation="border" /><div>Loading</div></div> : <BlockContainer allBlocks = {this.state.allBlocks}/>}
                <Button onClick={(e) => {this.getBlocks()}}/>
            </div>
        )
    }
}

