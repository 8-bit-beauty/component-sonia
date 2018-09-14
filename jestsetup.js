
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;


// basic component rendering

// describe('RelatedItems', () => {
//   test('renders PzSlider component', () => {
//     const wrapper = shallow(
//   <RelatedItems />,
//     );
//     expect(wrapper).toMatchSnapshot();
// 	});
// });

// 	describe('App', () => {
// 		test('renders RelatedItems component', () => {
// 			const wrapper = shallow(
// 		<App />,
// 			);
// 			expect(wrapper).toMatchSnapshot();
// 		});
// 	});

// 		describe('PzSlider', () => {
// 			test('renders PzElement component', () => {
// 				const wrapper = shallow(
// 			<PzSlider />,
// 				);
// 				expect(wrapper).toMatchSnapshot();
// 			});
// 		});

// // testing props
// test('RelatedItems renders a document title', () => {
//   const wrapper = shallow(
//   <PzSlider items={this.state.pageProducts} />,
//   );
//   expect(wrapper.prop('item')).toEqual('{this.state.pageProducts}');
// });

// // testing the event handlers

// test('pass a selected value to the onClick handler', () => {
// 	const value = '2';
// 	const onClick = jest.fn();
// 	const wrapper = shallow(
// 			<button onClick={onClick} />
// 	);

// 	expect(wrapper).toMatchSnapshot();

// 			wrapper.find('select').simulate('change', {
// 			target: { value },
// 	});

// 	expect(onClick).toBeCalledWith(value);
// });

