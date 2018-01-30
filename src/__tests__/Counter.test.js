import React from 'react';
import { shallow } from 'enzyme';

import Counter from '../Counter';

describe('Counter', () => {

  it('starts at zero', () => {
    const wrapper = shallow(<Counter />);

    expect(wrapper.state('count')).toBe(0);
    expect(wrapper.find('.count-display').text()).toBe('0');
  });

  describe('handleIncrement()', () => {
    it('incremements', () => {
      const wrapper = shallow(<Counter />);
      const handleIncrement = wrapper.instance().handleIncrement;

      expect(wrapper.state('count')).toBe(0);

      handleIncrement();

      expect(wrapper.state('count')).toBe(1);
    });
  });

  describe('handleReset()', () => {
    it('resets', () => {
      const wrapper = shallow(<Counter />);
      const handleReset = wrapper.instance().handleReset;

      wrapper.setState({ count: 10 });

      handleReset();

      expect(wrapper.state('count')).toBe(0);
    });

    it('is called on button click', () => {
      const spy = jest.spyOn(Counter.prototype, 'handleReset');
      const wrapper = shallow(<Counter />);

      wrapper.find('#reset').simulate('click');

      expect(spy).toHaveBeenCalled();

      spy.mockClear();
    });
  });
});
