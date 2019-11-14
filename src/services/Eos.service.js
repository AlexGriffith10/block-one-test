import helperService from './helpers/Helpers'
import {TOTAL_BLOCK_COUNT} from '../constants/Constants'

const EosService = {

    getAllBlocks(component) {
        const allBlocks = []

        helperService.getFirstBlock()
        .then((response) => response.data)
        .then((response) => { 
            let nextBlockId = response.head_block_id
            this.getBlockForId(nextBlockId, allBlocks, 0, component);
        });
    },

    getBlockForId(id, allBlocks, count, component) {
        if (count < TOTAL_BLOCK_COUNT) {
            count += 1;

            helperService.getBockInfoById(id)
            .then((response) => response.data)
            .then((response) => { 
                let currentBlock = response;
                allBlocks.push(currentBlock)
                this.getBlockForId(currentBlock.previous, allBlocks, count, component);
            });
        }
        else {
            component.setState({loading: false});
            component.setState({allBlocks: allBlocks});
        }
    }
}

export default EosService;