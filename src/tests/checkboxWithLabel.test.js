import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CheckboxWithLabel } from '../shared/utility'

it('check if checkbox rendered or not', () => {
    // Render a checkbox with label in the document
    const wrapper = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    expect(wrapper).toMatchSnapshot();
});

it('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    expect(checkbox.text()).toEqual('Off');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
});