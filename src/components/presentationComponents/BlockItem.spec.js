import React from  'react';
import {shallow} from 'enzyme';
import BlockItem from './BlockItem';

describe("Button Presentation Component", () => {
    test("renders component", () => {
        const dummyProps = {id: 5, timestamp: '05:00', previous: 4, transactions: [1,2,3]}
        const wrapper = shallow(<BlockItem newBlock={dummyProps}/>);

        expect(wrapper.exists()).toBe(true)
    })
})