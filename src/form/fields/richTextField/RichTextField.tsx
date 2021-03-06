import React, { useCallback, useMemo } from 'react';
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { useField } from 'react-final-form';
import classNames from 'classnames';

import { Leaf } from './components/leaf/Leaf';
import { ToolbarSection } from './components/toolbarSection/ToolbarSection';
import { LeafTypes } from './components/leaf/Leaf.types';
import { ElementTypes } from './components/element/Element.types';
import { Element } from './components/element/Element';
import { Toolbar } from './components/toolbar/Toolbar';
import { BlockButton } from './components/blockButton/BlockButton';
import { MarkButton } from './components/markButton/MarkButton';
import { RichTextFieldProps } from './RichTextField.types';
import { useStyles } from './RichTextField.styles';

export const RICH_TEXT_DEFAULT = [
  {
    children: [{ text: '' }],
  },
];

export const RichTextField = ({ name, placeholder, disabled, withoutBorder, fullWidth }: RichTextFieldProps) => {
  const classes = useStyles();
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);

  const { input } = useField(name, { defaultValue: RICH_TEXT_DEFAULT });

  return (
    <Slate editor={editor} value={input.value} onChange={input.onChange}>
      <div className={!withoutBorder ? classes.container : ''}>
        <Toolbar disabled={disabled}>
          <ToolbarSection>
            <MarkButton format={LeafTypes.BOLD} />
            <MarkButton format={LeafTypes.ITALIC} />
            <MarkButton format={LeafTypes.UNDERLINE} />
          </ToolbarSection>
          <ToolbarSection>
            <BlockButton format={ElementTypes.HEADING_ONE} />
            <BlockButton format={ElementTypes.HEADING_TWO} />
          </ToolbarSection>
          <ToolbarSection>
            <BlockButton format={ElementTypes.QUOTE} />
            <BlockButton format={ElementTypes.NUMBER_LIST} />
            <BlockButton format={ElementTypes.BULLET_LIST} />
          </ToolbarSection>
        </Toolbar>
        <div
          className={classNames('rich-text-field', !fullWidth && classes.editor, disabled && classes.disabled)}
          id={name}
        >
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder={placeholder}
            readOnly={disabled}
          />
        </div>
      </div>
    </Slate>
  );
};
