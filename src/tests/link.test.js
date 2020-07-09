import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from '../shared/utility'

it('renders correctly', () => {
    const tree = shallow(<Link page="http://www.facebook.com">Facebook</Link>);

    expect(tree).toMatchSnapshot();
});
