import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import RelatedItems from './SlideShow.jsx';
import PzSlider from './PzSlider.jsx';


describe('RelatedItems', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<RelatedItems debug />);
    expect(component).toMatchSnapshot();
  });
  it('should render correctly with no props', () => {
    const component = shallow(<RelatedItems />);  
    expect(component).toMatchSnapshot();
  });
  it('renders PzSlider component', () => {
    const wrapper = shallow(
      <RelatedItems />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('RelatedItems renders a document title', () => {
    const wrapper = shallow(
      <RelatedItems title="[Events]" />,
    );
    expect(wrapper.prop('title')).toEqual('[Events]');
  });
  it('pass a selected value to the onClick handler', () => {
    const value = '2';
    const onClick = jest.fn();
    const wrapper = shallow(
      <button type="submit" onClick={onClick} />,
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.find('select').simulate('change', {
      target: { value },
    });
    expect(onClick).toBeCalledWith(value);
  });
});
