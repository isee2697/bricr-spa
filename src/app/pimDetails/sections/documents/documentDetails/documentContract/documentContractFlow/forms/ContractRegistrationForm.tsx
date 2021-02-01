import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, RadioGroupField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Typography, Menu } from 'ui/atoms';
import { DeleteIcon, SquareIcon } from 'ui/atoms/icons';
import { RegistrationCostType } from '../DocumentContractFlow.types';
import { FormSubSectionHeader } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

export function ContractRegistrationForm() {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const costTypes = [
    ...Object.keys(RegistrationCostType).map(type => ({
      label: `pim_details.property.${type}`,
      icon: <SquareIcon />,
      value: type,
    })),
  ];

  return (
    <>
      <FormSection
        title={formatMessage({
          id: 'pim_details.documents.registration',
        })}
        isExpandable
        isInitExpanded
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography variant="h5">
                  {formatMessage({ id: 'pim_details.documents.check_if_registration' })}
                </Typography>
              }
            />
            <Box mt={1} />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'pim_details.documents.earliest_date',
                  })}
                  name="earliestDate"
                  disabled={!editing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
            </Grid>

            <Box mt={1} />
            <FormSubSectionHeader
              title={formatMessage({ id: `pim_details.documents.costs_registration_for` })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mt={1} />
            <RadioGroupField disabled={!editing} name="notaryAppointedBy" options={costTypes} />
          </AutosaveForm>
        )}
      </FormSection>
      <Menu
        id="contract-form-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
          color="secondary"
        />
      </Menu>
    </>
  );
}
