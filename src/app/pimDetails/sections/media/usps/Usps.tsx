import React from 'react';

import { useLocale } from 'hooks';
import { Section } from '../section/Section';
import { Form } from '../form/Form';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Input } from '../form/parts/Input';
import { UpdateUspInput } from 'api/types';

import { UspsProps } from './Usps.types';

export const Usps = ({ onAdd, onSave, options, usps }: UspsProps) => {
  const { formatMessage } = useLocale();

  return (
    <Section
      count={usps.length}
      icon="💼"
      emptyLineFirst={formatMessage({ id: 'pim_details.media.usps.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.media.usps.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.media.usps.title' })}
      onAdd={onAdd}
    >
      {editing =>
        usps.map(usp => (
          <Form<UpdateUspInput>
            title={
              usp.type
                ? formatMessage({ id: `dictionaries.media.chapter_or_usp.${usp.type}` })
                : formatMessage({ id: 'pim_details.media.usps.default_name' })
            }
            onSave={onSave}
            initialValues={usp}
          >
            <SingleChoose disabled={!editing} options={options} titleId="pim_details.media.usps.single_choose" />
            <Input
              disabled={!editing}
              label="pim_details.media.usps.label"
              name="description"
              placeholder="pim_details.media.usps.placeholder"
            />
          </Form>
        ))
      }
    </Section>
  );
};
