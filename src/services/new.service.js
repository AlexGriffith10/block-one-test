import {BASE_URL, GETINFOPATH, GETBLOCKINFOBYIDPATH, EXPECTEDBLOCKCOUNT} from '../constants/Constants';
import helperService from './eos.service.'

const EosService = {

    getAllBlocks(component) {
        const allBlocks = []

        const url = BASE_URL + GETINFOPATH
        // fetch(url, {
        //     method: "post",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: ""
        // })
        helperService.getFirstBlock()
        .then((response) => response.data)
        .then((response) => { 
            let nextBlockId = response.head_block_id
            this.getBlockForId(nextBlockId, allBlocks, 0, component);
        });
    },

    getBlockForId(id, allBlocks, count, component) {
        if (count < 10) {
            count += 1;
            fetch(BASE_URL + GETBLOCKINFOBYIDPATH, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: "{\"block_num_or_id\":\"" + id + "\"}"
            })
            .then((response) => {return response.json();})
            .then((response) => { 
                let currentBlock = response;
                allBlocks.push(currentBlock)
                this.getBlockForId(currentBlock.previous, allBlocks, count, component);
            });
        }
        else {
            component.setState({allBlocks: allBlocks});
        }
    }
}

export default EosService;