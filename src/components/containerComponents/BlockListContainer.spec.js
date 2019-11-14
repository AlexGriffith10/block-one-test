import React from  'react';
import Enzyme, {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import BlockListContainer from './BlockListContainer';
import {dummyProps} from '../../__mocks__/Mocks'

describe("Button Presentation Component", () => {
    test("renders component", () => {
        const wrapper = shallow(<BlockListContainer />);
        wrapper.setProps({allBlocks: dummyProps})

        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find("Button")).toHaveLength(1)
    })
})

describe("snapshot test", () => {
    test("check snapshot against component", () => {
        const wrapper = shallow(<BlockListContainer allBlocks={dummyProps} />);

        expect(wrapper).toMatchSnapshot();
    })
})
