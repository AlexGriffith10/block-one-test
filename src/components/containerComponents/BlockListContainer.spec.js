import React from  'react';
import {shallow} from 'enzyme';
import BlockListContainer from './BlockListContainer';
import {dummyProps} from '../../mocks/Mocks'

describe("Button Presentation Component", () => {
    test("renders component", () => {
        const wrapper = shallow(<BlockListContainer />);
        wrapper.setProps({allBlocks: dummyProps})

        expect(wrapper.exists()).toBe(true)
    })
})