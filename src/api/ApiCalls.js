import {BASEURL} from '../constants/Constants'
import Axios from 'axios';

export default function ApiCalls() {

    function buildRequest(path, method, data){
        var request = {
            "method": method,
            "url": {BASEURL} + path,
            "headers": {
                "Accept": 'application/json'
            },
            "data": data
        }
        return request
    }

    function getBlocks(){
        var path = 'get_info';
        var request = buildRequest(path, 'GET');

        Axios(request).then(response => console.log(response.data))
    }
    return (
        getBlocks
    )
}

