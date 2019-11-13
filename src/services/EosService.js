import {BASEURL, GETINFOPATH, GETBLOCKINFOBYIDPATH} from '../constants/Constants';
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

export async function buildBlockList(){
    let bList = new Array(10)
    let block = await combineBlockInfo()
    for(let i = 0; i<10; i++){
        block = await getBockInfoById(block.data.previous)
        bList[i] = block.data;
        console.log("THIS IS BLOCK")
        console.log(bList)
    }
    return bList;
}
