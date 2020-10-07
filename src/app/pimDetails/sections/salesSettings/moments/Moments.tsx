import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { Form } from 'app/shared/media/form/Form';
import { Input } from 'app/shared/media/form/parts/Input';
import { Section } from 'app/shared/media/section/Section';
import { CheckboxGroupField } from 'form/fields';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { SeeIcon } from 'ui/atoms/icons/see/SeeIcon';
import { PinIcon } from 'ui/atoms/icons/pin/PinIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';

const links = [
  { id: 'bla1', name: 'Viewing moment 1', url: 'bla' },
  { id: 'bla2', name: 'Viewing moment 2', url: 'bla' },
];

const checkboxes = [
  {
    label: 'dictionaries.kitchen_construction.DenseKitchen',
    icon: <HomeIcon color="inherit" />,
    value: 'DenseKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.EatInKitchen',
    icon: <SeeIcon color="inherit" />,
    value: 'EatInKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.HalfOpenKitchen',
    icon: <PinIcon color="inherit" />,
    value: 'HalfOpenKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.OpenKitchen',
    icon: <LinkIcon color="inherit" />,
    value: 'OpenKitchen',
  },
];

export const Moments = () => {
  const { formatMessage } = useLocale();
  const [toggled, setToggled] = useState<string | undefined>('bla');

  const onSave = async (values: unknown) => {
    try {
      // console.log(await values);

      return { error: false };
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <Section
      count={1}
      icon="🎥"
      emptyLineFirst={formatMessage({ id: 'pim_details.sales_settings.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.sales_settings.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.sales_settings.title' })}
      onAdd={() => console.log('onAdd')}
    >
      {editing =>
        links.map((link, index) => (
          <Form
            key={link.id}
            title={link.name ?? formatMessage({ id: 'pim_details.sales_settings.default_name' })}
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

            <Box mb={4}>
              <Box mb={3}>
                <FormSubSectionHeader
                  title={formatMessage({ id: 'pim_details.sales_settings.appointment.title' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_appointment' })}
                />
              </Box>
              <Box pl={2}>
                {/* <CheckboxGroupField
                  disabled={!editing}
                  md={2}
                  lg={1}
                  name="houseOutside.generalInformation.qualityInformation"
                  options={checkboxes}
                /> */}
              </Box>
            </Box>
          </Form>
        ))
      }
    </Section>
  );
};
