import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas sobre componente Gif Grid Item', () => {
  const url = 'http://localhost/gif.jpg';
  const title = 'Goku vs vegeta';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should be return a GifGridItem rendered', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a <p> with title inside', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should be have an image with alt property equals to title and src equals to url', () => {
    const img = wrapper.find('img');

    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test('div should be have animated__fadeIn class ', () => {
    const div = wrapper.find('div');
    // forma 1
    expect(div.hasClass('animate__fadeIn')).toBe(true);

    // forma 2
    // const className = div.prop('className');
    // expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
