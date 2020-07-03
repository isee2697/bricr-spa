import React from 'react';

import { Section } from '../section/Section';
import { Form } from '../form/Form';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Input } from '../form/parts/Input';
import { useLocale } from 'hooks';
import { TileButton } from 'ui/molecules';

import { LinksProps } from './Links.types';

export const Links = ({ onAdd, onSave, options, links, newLinkId, onAddCustomType }: LinksProps) => {
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
        links.map((link, index) => (
          <Form
            key={link.id}
            title={link.name ?? formatMessage({ id: 'pim_details.media.links.default_name' })}
            onSave={onSave}
            initialValues={link}
            isInitiallyOpened={newLinkId === link.id}
            counter={index + 1}
          >
            <Input
              disabled={!editing}
              label="pim_details.media.links.name_label"
              name="name"
              placeholder="pim_details.media.links.name_placeholder"
            />
            <SingleChoose
              disabled={!editing}
              options={options}
              titleId="pim_details.media.links.single_choose"
              actionElement={<TileButton onClick={onAddCustomType} isDisabled={!editing} />}
            />
            <Input
              disabled={!editing}
              label="pim_details.media.links.label"
              name="url"
              placeholder="pim_details.media.links.placeholder"
            />
          </Form>
        ))
      }
    </Section>
  );
};
