import React from  'react';
import {shallow} from 'enzyme';
import Button from './Button';

describe("Button Presentation Component", () => {
    test("renders component", () => {
        const wrapper = shallow(<Button />);

        expect(wrapper.exists()).toBe(true)
    })
})