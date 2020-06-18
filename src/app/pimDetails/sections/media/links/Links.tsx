import React from 'react';

import { Section } from '../section/Section';
import { Form } from '../form/Form';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Input } from '../form/parts/Input';
import { useLocale } from 'hooks';

import { LinksProps } from './Links.types';

export const Links = ({ onAdd, onSave, options, links }: LinksProps) => {
  const { formatMessage } = useLocale();

  return (
    <Section
      count={links.length}
      icon="🎥"
      emptyLineFirst={formatMessage({ id: 'pim_details.media.links.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.media.links.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.media.links.title' })}
      onAdd={onAdd}
    >
      {editing =>
        links.map(link => (
          <Form
            title={link.name ?? formatMessage({ id: 'pim_details.media.links.default_name' })}
            onSave={onSave}
            initialValues={{}}
          >
            <SingleChoose disabled={!editing} options={options} titleId="pim_details.media.links.single_choose" />
            <Input
              disabled={!editing}
              label="pim_details.media.links.label"
              name="description"
              placeholder="pim_details.media.links.placeholder"
            />
          </Form>
        ))
      }
    </Section>
  );
};
