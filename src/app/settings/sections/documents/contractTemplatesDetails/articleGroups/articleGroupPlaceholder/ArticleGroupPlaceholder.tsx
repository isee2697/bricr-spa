import React from 'react';
import clsx from 'classnames';
import { useDrop } from 'react-dnd';

import { ArticleGroupPlaceholderProps } from './ArticleGroupPlaceholder.types';
import { useStyles } from './ArticleGroupPlaceholder.styles';

export const ArticleGroupPlaceholder = ({ onDrop }: ArticleGroupPlaceholderProps) => {
  const classes = useStyles();
  const [{ isOver, isDrag }, drop] = useDrop({
    accept: 'AddContractTemplateArticleGroupField',
    drop: onDrop,
    canDrop: () => true,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });

  return <div ref={drop} className={clsx(classes.placeholder, (isOver || isDrag) && 'dragging')} />;
};
