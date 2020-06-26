import React from 'react';

import { useLocale } from 'hooks';
import { Section } from '../section/Section';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Form } from '../form/Form';
import { Editor } from 'app/pimDetails/sections/media/form/parts/Editor';
import { Input } from 'app/pimDetails/sections/media/form/parts/Input';
import { TileButton } from 'ui/molecules';

import { TextChaptersProps } from './TextChapters.types';

export const TextChapters = ({
  onAdd,
  onSave,
  options,
  chapters,
  newChapterId,
  onAddCustomType,
}: TextChaptersProps) => {
  const { formatMessage } = useLocale();

  return (
    <Section
      count={chapters.length}
      icon="✍"
      emptyLineFirst={formatMessage({ id: 'pim_details.media.text_chapters.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.media.text_chapters.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.media.text_chapters.title' })}
      onAdd={onAdd}
    >
      {editing =>
        chapters.map(chapter => (
          <Form
            title={chapter.name ?? formatMessage({ id: 'pim_details.media.text_chapters.default_name' })}
            onSave={onSave}
            initialValues={chapter}
            isInitiallyOpened={newChapterId === chapter.id}
          >
            <Input
              disabled={!editing}
              label="pim_details.media.text_chapters.name_label"
              name="name"
              placeholder="pim_details.media.text_chapters.name_placeholder"
            />
            <Editor titleId="pim_details.media.text_chapters.editor" disabled={!editing} />
            <SingleChoose
              disabled={!editing}
              options={options}
              titleId="pim_details.media.text_chapters.single_choose"
              actionElement={<TileButton onClick={onAddCustomType} isDisabled={!editing} />}
            />
          </Form>
        ))
      }
    </Section>
  );
};
