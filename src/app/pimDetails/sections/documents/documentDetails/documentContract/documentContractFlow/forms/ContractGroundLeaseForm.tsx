import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';
import { Box, Grid, Menu, MenuItem, Typography } from 'ui/atoms';
import { DeleteIcon, HistoryIcon } from 'ui/atoms/icons';
import { useStyles } from '../DocumentContractFlow.styles';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export function ContractGroundLeaseForm() {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.documents.ground_lease_conditions' })}
        isExpandable
        isInitExpanded
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            <GenericField
              disabled={!editing}
              name="conditions"
              label="pim_details.documents.ground_lease_conditions"
              placeholder={formatMessage({ id: 'pim_details.documents.ground_lease_conditions.placeholder' })}
              size="medium"
            />
            <Box mt={3} />
            <Grid container spacing={4}>
              <Grid item xs={6} sm={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'pim_details.documents.leasehold_revision',
                  })}
                  name="leaseholdRevision"
                  disabled={!editing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'pim_details.documents.ground_lease_adjustment',
                  })}
                  name="groundLeaseAdjustment"
                  disabled={!editing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'pim_details.documents.indexation_ground_lease',
                  })}
                  name="indexationGroundLease"
                  disabled={!editing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
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
        <SubMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
        />
      </Menu>
    </>
  );
}
