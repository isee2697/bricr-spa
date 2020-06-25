import React from 'react';

import { useLocale } from 'hooks';
import { Section } from '../section/Section';
import { Form } from '../form/Form';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Input } from '../form/parts/Input';
import { UpdateTagInput } from 'api/types';

import { TagsProps } from './Tags.types';

export const Tags = ({ onAdd, onSave, options, tags }: TagsProps) => {
  const { formatMessage } = useLocale();

  return (
    <Section
      count={tags.length}
      icon="✌"
      emptyLineFirst={formatMessage({ id: 'pim_details.media.tags.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.media.tags.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.media.tags.title' })}
      onAdd={onAdd}
    >
      {editing =>
        tags.map(tag => (
          <Form<UpdateTagInput>
            title={
              tag.type
                ? formatMessage({ id: `dictionaries.media.tag.${tag.type}` })
                : formatMessage({ id: 'pim_details.media.tags.default_name' })
            }
            onSave={onSave}
            initialValues={tag}
            key={tag.id}
          >
            <SingleChoose disabled={!editing} options={options} titleId="pim_details.media.tags.single_choose" />
            <Input
              disabled={!editing}
              label="pim_details.media.tags.label"
              name="description"
              placeholder="pim_details.media.tags.placeholder"
            />
          </Form>
        ))
      }
    </Section>
  );
};
