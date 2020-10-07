import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocale, useCustomLabels, useToggleOnNewlyCreated } from 'hooks';
import { UpdateUspInput, LabelProperty } from 'api/types';
import { TileButton } from 'ui/molecules';
import { useEntityType } from 'app/shared/entityType';
import { Section } from '../section/Section';
import { Form } from '../form/Form';
import { SingleChoose } from '../form/parts/SingleChoose';
import { Input } from '../form/parts/Input';

import { UspsProps } from './Usps.types';

export const Usps = ({ onAdd, onSave, options, usps, newUspId, onAddCustomType }: UspsProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const { entityType } = useEntityType();
  const [toggled, setToggled] = useState<string | undefined>(newUspId);

  useToggleOnNewlyCreated(newUspId, setToggled);

  const customLabels = useCustomLabels(id, [LabelProperty.Usp], entityType)[LabelProperty.Usp] ?? [];

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
        usps.map((usp, index) => (
          <Form<UpdateUspInput>
            key={usp.id}
            title={
              usp.type
                ? formatMessage({
                    id: `dictionaries.media.chapter_or_usp.${usp.type}`,
                    defaultMessage: customLabels.find(({ value }) => value === usp.type)?.label ?? ' ',
                  })
                : formatMessage({ id: 'pim_details.media.usps.default_name' })
            }
            onSave={onSave}
            initialValues={usp}
            counter={index + 1}
            onExpand={() => setToggled(toggled => (toggled !== usp.id ? usp.id : undefined))}
            isExpanded={toggled === usp.id}
          >
            <SingleChoose
              disabled={!editing}
              options={options}
              titleId="pim_details.media.usps.single_choose"
              actionElement={<TileButton onClick={onAddCustomType} isDisabled={!editing} />}
            />
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
