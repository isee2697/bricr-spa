import React from 'react';
import { useSlate } from 'slate-react';
import { Editor, Transforms } from 'slate';

import { BulletListIcon, HeadingOneIcon, HeadingTwoIcon, NumberListIcon, QuoteIcon } from 'ui/atoms/icons';
import { ToolbarButton } from '../toolbarButton/ToolbarButton';
import { ElementTypes } from '../element/Element.types';

import { BlockButtonProps } from './BlockButton.types';

const LIST_TYPES = [ElementTypes.NUMBER_LIST, ElementTypes.BULLET_LIST];

const isBlockActive = (editor: Editor, format: ElementTypes) => {
  const [match] = Array.from(
    Editor.nodes(editor, {
      match: n => (n.type as ElementTypes) === format,
    }),
  );

  return !!match;
};

const setNodeType = (isActive: boolean, isList: boolean, format: ElementTypes): ElementTypes => {
  if (isActive) {
    return ElementTypes.PARAGRAPH;
  }

  return isList ? ElementTypes.LIST_ITEM : format;
};

const toggleBlock = (editor: Editor, format: ElementTypes) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type as ElementTypes),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: setNodeType(isActive, isList, format),
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const BlockButton = ({ format }: BlockButtonProps) => {
  const editor = useSlate();

  const icons = {
    [ElementTypes.BULLET_LIST]: <BulletListIcon color="inherit" />,
    [ElementTypes.NUMBER_LIST]: <NumberListIcon color="inherit" />,
    [ElementTypes.QUOTE]: <QuoteIcon color="inherit" />,
    [ElementTypes.HEADING_ONE]: <HeadingOneIcon color="inherit" />,
    [ElementTypes.HEADING_TWO]: <HeadingTwoIcon color="inherit" />,
  };

  return (
    <ToolbarButton onClick={() => toggleBlock(editor, format)} active={isBlockActive(editor, format)}>
      {icons[format]}
    </ToolbarButton>
  );
};
