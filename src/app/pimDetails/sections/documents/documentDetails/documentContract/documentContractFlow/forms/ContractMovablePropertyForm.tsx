import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenericField, RadioGroupField } from 'form/fields';
import { Box, Checkbox, FormControlLabel, Grid, Menu, Typography } from 'ui/atoms';
import { DeleteIcon, SquareIcon } from 'ui/atoms/icons';
import { MovablePropertyType } from '../DocumentContractFlow.types';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

export function ContractMovablePropertyForm() {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const movableProperties = [
    ...Object.keys(MovablePropertyType).map(type => ({
      label: `pim_details.property.${type}`,
      icon: <SquareIcon />,
      value: type,
    })),
  ];

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.documents.movable_property' })}
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
                  {formatMessage({ id: 'pim_details.documents.check_if_movable_property' })}
                </Typography>
              }
            />
            <Box mt={3} />
            <FormSubSectionHeader
              title={formatMessage({ id: `pim_details.documents.movable_property_by` })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mt={3.5} />
            <RadioGroupField disabled={!editing} name="movablePropertyBy" options={movableProperties} />
            <Box mt={1} />
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={6} sm={4}>
                <GenericField
                  disabled={!editing}
                  name="price"
                  label="pim_details.documents.movable_property_appreciated_on"
                  size="medium"
                  InputProps={{ endAdornment: <Typography>€</Typography> }}
                />
              </Grid>
              <Grid item xs={6} sm={8}>
                <Box mt={4} />
                <Typography variant="h5">
                  {formatMessage({ id: 'pim_details.documents.check_movable_property_list' })}
                </Typography>
              </Grid>
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
