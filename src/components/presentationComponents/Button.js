import React, {Component} from 'react'
import {LOAD} from '../../constants/Constants';

export default class Button extends Component{
    render(){
        console.log(this.props.newBlocks)
    return (
        <div>
            <button onClick = {this.props.onClick}>{LOAD}</button>
        </div>
    )
    }
}
