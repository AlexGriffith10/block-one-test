import React, {Component} from 'react';
import {BASE_URL, GETINFOPATH, GETBLOCKINFOBYIDPATH, EXPECTEDBLOCKCOUNT} from '../constants/Constants';
import axios from 'axios';

const helperService = {

    getFirstBlock() {
        return axios.get(BASE_URL + GETINFOPATH)
      },
    
    getBockInfoById(id){
        return (
            axios.post(BASE_URL + GETBLOCKINFOBYIDPATH, {'block_num_or_id': id})
        )
    },
    
    combineBlockInfo(){
       return(
          this.getFirstBlock()
           .then(head_block_id => head_block_id)
           .then(head_block_id => this.getBockInfoById(head_block_id))
           ) 
    },
    
    async buildBlockList(component){
        let block = await this.combineBlockInfo()
        let allBlocks = []
        for(let i = 0;i < 10; i++){
            console.log("CHECK IT OUT")
            console.log(block.data)
            block = await this.getBockInfoById(block.data.previous)
            .then(response => {
                let newData = {response}
                allBlocks.push = newData;
                component.setState({allBlocks: allBlocks})
     console.log('##################S')
     console.log(allBlocks)
            })
            return allBlocks
            }
    }

}

export default helperService;

