import React from 'react';

import { useLocale } from 'hooks';
import { Section } from '../section/Section';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Form } from '../form/Form';

import { TextChaptersProps } from './TextChapters.types';

export const TextChapters = ({ onAdd, onSave, options, chapters }: TextChaptersProps) => {
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
          <Form title={chapter.name} onSave={onSave} initialValues={{}}>
            <SingleChoose
              disabled={!editing}
              options={options}
              titleId="pim_details.media.text_chapters.single_choose"
            />
          </Form>
        ))
      }
    </Section>
  );
};
