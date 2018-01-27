import ReactWrapper from './ReactWrapper';
import ShallowWrapper from './ShallowWrapper';
import EnzymeAdapter from './EnzymeAdapter';

import mount from './mount';
import shallow from './shallow';
import render from './render';
import tree from './tree';
import { merge as configure } from './configuration';

module.exports = {
  render,
  shallow,
  tree,
  mount,
  ShallowWrapper,
  ReactWrapper,
  configure,
  EnzymeAdapter,
};
