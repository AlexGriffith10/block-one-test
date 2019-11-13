import {BASE_URL, GET_INFO_PATH, GET_BLOCK_BY_ID_PATH} from '../../constants/Constants';
import axios from 'axios';

const helperService = {

    getFirstBlock() {
        return axios.get(BASE_URL + GET_INFO_PATH)
      },
    
    getBockInfoById(id){
        return (
            axios.post(BASE_URL + GET_BLOCK_BY_ID_PATH, {'block_num_or_id': id})
        )
    }
}

export default helperService;

