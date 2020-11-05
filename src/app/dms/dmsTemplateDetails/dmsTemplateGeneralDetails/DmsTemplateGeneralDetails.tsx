import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import {
  AogIcon,
  BogIcon,
  CalendarIcon,
  ComplexBuildingIcon,
  EditIcon,
  FilterIcon,
  FolderIcon,
  MailIcon,
  MutationIcon,
} from 'ui/atoms/icons';

import { DmsTemplateGeneralDetailsProps } from './DmsTemplateGeneralDetails.types';

const types = [
  {
    value: 'house',
    label: `dictionaries.propertyTypes.house`,
    icon: <AogIcon />,
  },
  {
    value: 'apartment',
    label: `dictionaries.propertyTypes.apartment`,
    icon: <BogIcon />,
  },
  {
    value: 'bog',
    label: `dictionaries.propertyTypes.bog`,
    icon: <CalendarIcon />,
  },
  {
    value: 'aog',
    label: `dictionaries.propertyTypes.aog`,
    icon: <ComplexBuildingIcon />,
  },
  {
    value: 'parkingLot',
    label: `dictionaries.propertyTypes.parkingLot`,
    icon: <EditIcon />,
  },
  {
    value: 'buildingPlot',
    label: `dictionaries.propertyTypes.buildingPlot`,
    icon: <FolderIcon />,
  },
  {
    value: 'relte',
    label: `dictionaries.propertyTypes.relte`,
    icon: <FilterIcon />,
  },
  {
    value: 'ncSale',
    label: `dictionaries.propertyTypes.ncSale`,
    icon: <MailIcon />,
  },
  {
    value: 'ncRent',
    label: `dictionaries.propertyTypes.ncRent`,
    icon: <MutationIcon />,
  },
];

const rights = [
  {
    value: 'create',
    label: 'dictionaries.settings.rights.Create',
    icon: <AogIcon />,
  },
  {
    value: 'read',
    label: 'dictionaries.settings.rights.Read',
    icon: <BogIcon />,
  },
  {
    value: 'update',
    label: 'dictionaries.settings.rights.Update',
    icon: <CalendarIcon />,
  },
  {
    value: 'delete',
    label: 'dictionaries.settings.rights.Delete',
    icon: <ComplexBuildingIcon />,
  },
];

export const DmsTemplateGeneralDetails = ({ template }: DmsTemplateGeneralDetailsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page showHeader title={template.name} titleActions={[]}>
        <Box display="flex" flexDirection="column" width="100%">
          <Box mt={1}>
            <FormSection
              title={formatMessage({ id: 'dms.template.template_name' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <GenericField
                    name="templateName"
                    label="dms.template.street"
                    placeholder="dms.template.street.placeholder"
                    size="medium"
                    disabled={!editing}
                  />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: 'dms.template.template_details' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <FormSubSectionHeader
                    title={formatMessage({ id: 'dms.template.pick_type_of_property' })}
                    subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
                  />
                  <Box mt={2} />
                  <RadioGroupField disabled={!editing} name="templateProperties.type" options={types} />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: 'dms.template.template_security' })}
              onOptionsClick={() => {}}
              isExpandable
              isInitExpanded
            >
              {editing => (
                <AutosaveForm onSave={() => Promise.resolve(undefined)}>
                  <FormSubSectionHeader
                    title={formatMessage({ id: 'dms.template.rights' })}
                    subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
                  />
                  <Box mt={2} />
                  <RadioGroupField disabled={!editing} name="templateSecurity" options={rights} />
                </AutosaveForm>
              )}
            </FormSection>
          </Box>
        </Box>
      </Page>
    </>
  );
};
