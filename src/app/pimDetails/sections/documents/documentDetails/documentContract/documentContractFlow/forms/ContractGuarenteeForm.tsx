import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';
import { Box, Grid, Menu, MenuItem, Typography } from 'ui/atoms';
import { useStyles } from '../DocumentContractFlow.styles';
import { DeleteIcon, HistoryIcon } from 'ui/atoms/icons';

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

export function ContractGuarenteeForm() {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const percentage = 10;
  const price = '23,500.00';

  return (
    <>
      <FormSection
        title={formatMessage({
          id: 'pim_details.documents.guarentee',
        })}
        isExpandable
        isInitExpanded
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <DatePickerField
                  label={formatMessage({
                    id: 'pim_details.documents.guarentee_date',
                  })}
                  name="guarenteeDate"
                  disabled={!editing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <GenericField
                  disabled={!editing}
                  name="depositAmount"
                  label="pim_details.documents.deposit_amount"
                  size="medium"
                  InputProps={{ endAdornment: <Typography>€</Typography> }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box mt={4} />
                <Typography variant="h5">
                  {formatMessage({ id: 'pim_details.documents.guarentee.placeholder' })} <br />
                  <b>{percentage}%</b> {formatMessage({ id: 'pim_details.documents.salesprice' })}
                  {' = '}
                  <b>€ {price}</b>
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
