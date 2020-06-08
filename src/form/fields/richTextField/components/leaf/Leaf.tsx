import React from 'react';
import { RenderLeafProps } from 'slate-react/dist/components/editable';

import { LeafTypes } from './Leaf.types';

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf[LeafTypes.BOLD]) {
    children = <strong>{children}</strong>;
  }

  if (leaf[LeafTypes.ITALIC]) {
    children = <em>{children}</em>;
  }

  if (leaf[LeafTypes.UNDERLINE]) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
