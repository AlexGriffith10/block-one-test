import React from  'react';
import {shallow} from 'enzyme';
import BlockContainer from './BlockContainer';
import {dummyProps} from '../../mocks/Mocks'

describe("Button Presentation Component", () => {
    test("renders component", () => {
        const wrapper = shallow(<BlockContainer allBlocks={dummyProps}/>);

        expect(wrapper.exists()).toBe(true)
    })
})