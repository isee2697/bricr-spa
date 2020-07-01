import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale, useCustomLabels } from 'hooks';
import { Section } from '../section/Section';
import { Form } from '../form/Form';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Input } from '../form/parts/Input';
import { UpdateTagInput, LabelProperty } from 'api/types';
import { TileButton } from 'ui/molecules';

import { TagsProps } from './Tags.types';

export const Tags = ({ onAdd, onSave, options, tags, newTagId, onAddCustomType }: TagsProps) => {
  const { formatMessage } = useLocale();
  const { id: pimId } = useParams<{ id: string }>();

  const customLabels = useCustomLabels(pimId, [LabelProperty.Tag])[LabelProperty.Tag] ?? [];

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
                ? formatMessage({
                    id: `dictionaries.media.tag.${tag.type}`,
                    defaultMessage: customLabels.find(({ value }) => value === tag.type)?.label ?? ' ',
                  })
                : formatMessage({ id: 'pim_details.media.tags.default_name' })
            }
            onSave={onSave}
            initialValues={tag}
            key={tag.id}
            isInitiallyOpened={tag.id === newTagId}
          >
            <SingleChoose
              disabled={!editing}
              options={options}
              titleId="pim_details.media.tags.single_choose"
              xs={3}
              actionElement={<TileButton onClick={onAddCustomType} isDisabled={!editing} />}
            />
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
