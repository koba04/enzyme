import React from 'react';
import { expect } from 'chai';
import { tree } from 'enzyme';

describe('tree', () => {
  describe('prop()', () => {
    it('should be able to get the props value', () => {
      const wrapper = tree(<div className="foo">bar</div>);
      expect(wrapper.prop('className')).to.equal('foo');
    });
  });
  describe('state()', () => {
    it('should be able to get the state value', () => {
      class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            count: 1,
          };
        }
        render() {
          return <div>{this.state.count}</div>;
        }
      }
      const wrapper = tree(<App />);
      expect(wrapper.state('count')).to.equal(1);
    });
  });
});
