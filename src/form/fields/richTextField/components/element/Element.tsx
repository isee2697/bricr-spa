import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';

import { Typography } from 'ui/atoms';

import { ElementTypes } from './Element.types';
import { useStyles } from './Element.styles';

export const Element = ({ attributes, children, element }: RenderElementProps) => {
  const classes = useStyles();

  switch (element.type) {
    case ElementTypes.QUOTE:
      return (
        <blockquote {...attributes} className={classes.blockquote}>
          {children}
        </blockquote>
      );
    case ElementTypes.BULLET_LIST:
      return <ul {...attributes}>{children}</ul>;
    case ElementTypes.HEADING_ONE:
      return (
        <Typography variant="h1" {...attributes}>
          {children}
        </Typography>
      );
    case ElementTypes.HEADING_TWO:
      return (
        <Typography variant="h2" {...attributes}>
          {children}
        </Typography>
      );
    case ElementTypes.LIST_ITEM:
      return <li {...attributes}>{children}</li>;
    case ElementTypes.NUMBER_LIST:
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
