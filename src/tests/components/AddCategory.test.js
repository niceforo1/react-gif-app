import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test in <AddCategory/> component', () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test('should be render <AddCategory/> ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be change the input text', () => {
    /*const input = wrapper.find('input');

    input.simulate('change');*/
  });
});
