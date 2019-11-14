import React from  'react';
import {shallow} from 'enzyme';
import BlockContainer from './BlockContainer';
import {dummyProps} from '../../__mocks__/Mocks'

describe("Button Presentation Component", () => {
    test("renders component", () => {
        const wrapper = shallow(<BlockContainer allBlocks={dummyProps}/>);

        expect(wrapper.exists()).toBe(true)
    })
})

describe("snapshot test", () => {
    test("check snapshot against component", () => {
        const wrapper = shallow(<BlockContainer allBlocks={dummyProps} />);

        expect(wrapper).toMatchSnapshot();
    })
})