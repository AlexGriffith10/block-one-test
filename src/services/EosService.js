import React, { Component } from 'react';
import {BASEURL} from '../constants/Constants';

export default class ApiCalls extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export function buildRequest(path, method, data){
    var request = {
        method: method,
        url: {BASEURL} + path,
        headers: {
            'Accept': 'application/json'
        },
        data: data
    }
    return request
}



