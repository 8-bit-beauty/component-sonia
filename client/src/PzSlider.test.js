import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import PzSlider from './PzSlider.jsx';

describe('PzSlider', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PzSlider debug />);
    expect(component).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
    const component = shallow(<PzSlider />);
    expect(component).toMatchSnapshot();
  });
  it('renders PzElement component', () => {
    const wrapper = shallow(
      <PzSlider />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
