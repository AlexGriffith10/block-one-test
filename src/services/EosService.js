import {BASEURL, GETINFOPATH, GETBLOCKINFOBYIDPATH, BLOCKCOUNT, EXPECTEDNUMBEROFBLOCKS} from '../constants/Constants';
import axios from 'axios';

export function getFirstBlock(){
    return axios.get(BASEURL + GETINFOPATH)
    .then(response => response.data.head_block_id)
  }

export function getBockInfoById(id){
    return (
        axios.post(BASEURL + GETBLOCKINFOBYIDPATH, {'block_num_or_id': id})
        .then(response => response)
    )
}

export function combineBlockInfo(){
   return(
       getFirstBlock()
       .then(head_block_id => head_block_id)
       .then(head_block_id => getBockInfoById(head_block_id))
       ) 
}

export async function buildBlockList(EXPECTEDNUMBEROFBLOCKS){
    let block = await combineBlockInfo()
    for(let i = 0; i<10; i++){

        console.log(block)
        block = await getBockInfoById(block.data.previous)
    }

        // .then(response => this.setState({blockInformation: [ ...this.state.blockInformation, response]}))
}
