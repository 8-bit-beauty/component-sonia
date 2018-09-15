import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import PzElement from './PzElement.jsx';

describe('PzElement', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PzElement debug />);
    expect(component).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
    const component = shallow(<PzElement />);
    expect(component).toMatchSnapshot();
  });
});
