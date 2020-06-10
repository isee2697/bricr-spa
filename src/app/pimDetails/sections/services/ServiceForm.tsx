import React, { ReactElement } from 'react';

import { SubSectionHeader } from 'ui/molecules';
import { Grid, Collapse, Typography, Box } from 'ui/atoms';
import { GenericField, DatePickerField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';

import { ServiceFormProps } from './Services.types';
import { onwershipTypes } from './dictionaries';

export const ServiceForm: <T extends { id: string }>(p: ServiceFormProps<T>) => ReactElement<ServiceFormProps<T>> = ({
  title,
  onToggleClick,
  toggled,
  item,
  isEditMode,
  types,
  typesTitle,
  hasOwnership,
}) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <SubSectionHeader onOptionsClick={() => {}} onToggleClick={onToggleClick} toggled={toggled}>
        <Box display="flex">{title}</Box>
      </SubSectionHeader>
      <Collapse in={toggled}>
        <Typography variant="h2">{formatMessage({ id: 'pim_details.services.service_form.general_title' })}</Typography>
        <Grid container spacing={3}>
          <Grid item md={8}>
            <GenericField
              fullWidth
              label="pim_details.services.service_form.name"
              name="service.name"
              id={`service.name.${item.id}`}
              disabled={!isEditMode}
            />
          </Grid>
          <Grid item md={4}>
            <DatePickerField
              fullWidth
              label="pim_details.services.service_form.year"
              name="service.year"
              id={`service.year.${item.id}`}
              format="yyyy"
              disabled={!isEditMode}
            />
          </Grid>
          {types && (
            <Grid item xs={12}>
              <Typography variant="h2">{typesTitle && formatMessage({ id: typesTitle })}</Typography>
              <Box mb={2} />
              <RadioGroupField disabled={!isEditMode} md={2} name="service.source" options={types} />
            </Grid>
          )}
          {hasOwnership && (
            <Grid item xs={12}>
              <Typography variant="h2">
                {formatMessage({ id: 'pim_details.services.service_form.ownership_title' })}
              </Typography>
              <Box mb={2} />
              <RadioGroupField disabled={!isEditMode} md={2} name="service.type" options={onwershipTypes} />
            </Grid>
          )}
        </Grid>
        <Box mb={4} />
      </Collapse>
    </>
  );
};
