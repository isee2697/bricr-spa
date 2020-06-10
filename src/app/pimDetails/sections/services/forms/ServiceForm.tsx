import React, { ReactElement } from 'react';
import arrayMutators from 'final-form-arrays';

import { Service } from 'api/types';
import { SubSectionHeader } from 'ui/molecules';
import { Grid, Collapse, Typography, Box } from 'ui/atoms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { CalendarIcon } from 'ui/atoms/icons';
import { ServiceFormProps } from '../Services.types';
import { onwershipTypes } from '../dictionaries';

export const ServiceForm: <T extends Service>(p: ServiceFormProps<T>) => ReactElement<ServiceFormProps<T>> = ({
  title,
  onToggleClick,
  toggled,
  item,
  isEditMode,
  types,
  typesTitle,
  hasOwnership,
  onSave,
}) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm initialValues={item} onSave={onSave} mutators={{ ...arrayMutators }} subscription={{}}>
      <SubSectionHeader onOptionsClick={() => {}} onToggleClick={onToggleClick} toggled={toggled}>
        <Box display="flex">{title}</Box>
      </SubSectionHeader>
      <Collapse in={toggled}>
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
            <GenericField
              fullWidth
              label="pim_details.services.service_form.year"
              name="yearOfInstallation"
              id={`service.yearOfInstallation.${item.id}`}
              disabled={!isEditMode}
              type="number"
              InputProps={{
                endAdornment: <CalendarIcon />,
              }}
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
      </Collapse>
    </AutosaveForm>
  );
};
