import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, RadioGroupField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Menu, Typography } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { DeleteIcon, SquareIcon } from 'ui/atoms/icons';
import { CustomerType } from '../DocumentContractFlow.types';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

export function ContractHandoverForm() {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const listCustomers = Object.keys(CustomerType).map(type => ({
    label: `pim_details.customer_type.${type}`,
    icon: <SquareIcon />,
    value: type,
  }));

  return (
    <>
      <FormSection
        title={formatMessage({
          id: 'pim_details.documents.handover',
        })}
        isExpandable
        isInitExpanded
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            <FormSubSectionHeader
              title={formatMessage({ id: `pim_details.documents.costs_borne_by` })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mt={1} />
            <RadioGroupField disabled={!editing} name="costsBorneBy" options={listCustomers} />

            <Box mt={1} />
            <FormSubSectionHeader
              title={formatMessage({ id: `pim_details.documents.notary_appointed_by` })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mt={1} />
            <RadioGroupField disabled={!editing} name="notaryAppointedBy" options={listCustomers} />

            <Box mt={1} />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography variant="h5">
                  {formatMessage({
                    id: 'pim_details.documents.handover.check',
                  })}
                </Typography>
              }
            />

            <Box mt={1} />
            <Grid item xs={12} sm={4}>
              <DatePickerField
                label={formatMessage({
                  id: 'pim_details.documents.transfer_of_ownership',
                })}
                name="transferOfOwnership"
                disabled={!editing}
                placeholder={formatMessage({ id: 'common.date_picker' })}
              />
            </Grid>
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
