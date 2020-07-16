import React, { ReactElement } from 'react';

import { Service } from 'api/types';
import { Grid, Typography, Box } from 'ui/atoms';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { ServiceFormProps } from '../Service.types';
import { onwershipTypes } from '../dictionaries';

export const ServiceForm: <T extends Service>(p: ServiceFormProps<T>) => ReactElement<ServiceFormProps<T>> = ({
  item,
  isEditMode,
  types,
  typesTitle,
  hasOwnership,
}) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Typography variant="h2">{formatMessage({ id: 'pim_details.services.service_form.general_title' })}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GenericField
            label="pim_details.services.description_placeholder"
            placeholder="pim_details.services.description_placeholder"
            name="description"
            id={`service.description.${item.id}`}
            disabled={!isEditMode}
          />
        </Grid>
        <Grid item md={8}>
          <GenericField
            fullWidth
            label="pim_details.services.service_form.name"
            name="name"
            id={`service.name.${item.id}`}
            disabled={!isEditMode}
          />
        </Grid>
        <Grid item md={4}>
          <DatePickerField
            label="pim_details.services.service_form.year"
            placeholder="common.year_placeholder"
            name="yearOfInstallation"
            id={`service.yearOfInstallation.${item.id}`}
            disabled={!isEditMode}
            isYearPicker
          />
        </Grid>
        {types && (
          <Grid item xs={12}>
            <Typography variant="h2">{typesTitle && formatMessage({ id: typesTitle })}</Typography>
            <Box mb={2} />
            <RadioGroupField disabled={!isEditMode} md={2} name="configuration.fuel" options={types} />
          </Grid>
        )}
        {hasOwnership && (
          <Grid item xs={12}>
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.services.service_form.ownership_title' })}
            </Typography>
            <Box mb={2} />
            <RadioGroupField disabled={!isEditMode} md={2} name="ownership" options={onwershipTypes} />
          </Grid>
        )}
      </Grid>
      <Box mb={4} />
    </>
  );
};
