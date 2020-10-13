import React from 'react';
import { useSlate } from 'slate-react';
import { Editor } from 'slate';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'ui/atoms/icons';
import { ToolbarButton } from '../toolbarButton/ToolbarButton';
import { LeafTypes } from '../leaf/Leaf.types';

import { MarkButtonProps } from './MarkButton.types';

const isMarkActive = (editor: Editor, format: LeafTypes) => {
  const marks = Editor.marks(editor);

  return marks ? marks[format] === true : false;
};

const toggleMark = (editor: Editor, format: LeafTypes) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const MarkButton = ({ format }: MarkButtonProps) => {
  const editor = useSlate();

  const icons = {
    [LeafTypes.BOLD]: <BoldIcon color="inherit" />,
    [LeafTypes.UNDERLINE]: <UnderlineIcon color="inherit" />,
    [LeafTypes.ITALIC]: <ItalicIcon color="inherit" />,
  };

  return (
    <ToolbarButton onClick={() => toggleMark(editor, format)} active={isMarkActive(editor, format)}>
      {icons[format]}
    </ToolbarButton>
  );
};
