import TreeWrapper from './TreeWrapper';

/**
 * Tree renders a react component and provides a testing wrapper around it.
 *
 * @param node
 * @returns {TreeWrapper}
 */
export default function tree(node, options) {
  return new TreeWrapper(node, null, options);
}
