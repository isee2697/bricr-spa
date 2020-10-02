import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Form } from 'app/shared/media/form/Form';
import { Input } from 'app/shared/media/form/parts/Input';
import { Section } from 'app/shared/media/section/Section';

const links = [
  { id: 'bla1', name: 'Viewing moment 1', url: 'bla' },
  { id: 'bla2', name: 'Viewing moment 2', url: 'bla' },
];

export const Moments = () => {
  const { formatMessage } = useLocale();
  const [toggled, setToggled] = useState<string | undefined>('bla');

  const onSave = async (values: unknown) => {
    try {
      console.log(await values);

      return { error: false };
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <Section
      count={1}
      icon="🎥"
      emptyLineFirst={formatMessage({ id: 'pim_details.media.links.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.media.links.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.media.links.title' })}
      onAdd={() => console.log('onAdd')}
    >
      {editing =>
        links.map((link, index) => (
          <Form
            key={link.id}
            title={link.name ?? formatMessage({ id: 'pim_details.media.links.default_name' })}
            onSave={onSave}
            initialValues={link}
            counter={index + 1}
            onExpand={() => setToggled(toggled => (toggled !== link.id ? link.id : undefined))}
            isExpanded={toggled === link.id}
          >
            <Input
              disabled={!editing}
              label="pim_details.media.links.name_label"
              name="name"
              placeholder="pim_details.media.links.name_placeholder"
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
