import React from 'react';
import { expect } from 'chai';
import { tree } from 'enzyme';

describe('tree', () => {
  describe('prop()', () => {
    const wrapper = tree(<div className="foo">bar</div>);
    expect(wrapper.prop('className')).to.equal('foo');
  });
});
