import {
  getAdapter,
  makeOptions,
  sym,
  privateSet,
} from './Utils';

const RENDERER = sym('__renderer__');

class TreeWrapper {
  constructor(nodes, passedOptions = {}) {
    const options = makeOptions(passedOptions);
    const renderer = getAdapter(options).createRenderer({ mode: 'tree', ...options });
    privateSet(this, RENDERER, renderer);
    this[RENDERER].render(nodes);
  }
  props() {
    return this[RENDERER].getNode().props;
  }
  prop(propName) {
    return this.props()[propName];
  }
  instance() {
    return this[RENDERER].getNode().instance;
  }
  state(name) {
    return this.instance().state[name];
  }
}

export default TreeWrapper;
