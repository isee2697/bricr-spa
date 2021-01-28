import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenericField, RadioGroupField } from 'form/fields';
import { Box, Grid, MenuItem, Menu, Typography } from 'ui/atoms';
import { HistoryIcon, SquareIcon, DeleteIcon } from 'ui/atoms/icons';
import { SalesConditionsType } from '../DocumentContractFlow.types';
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

export function ContractSalesPriceForm() {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const salesConditions = [
    ...Object.keys(SalesConditionsType).map(type => ({
      label: `pim_details.prices.${type}`,
      icon: <SquareIcon />,
      value: type,
    })),
  ];

  const askingPrice = '235.000,00';
  const askingIncrease = '10';

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.documents.sales_price' })}
        isExpandable
        isInitExpanded
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={6} sm={4}>
                <GenericField
                  disabled={!editing}
                  name="price"
                  label="pim_details.documents.sales_price"
                  size="medium"
                  InputProps={{ endAdornment: <Typography>€</Typography> }}
                />
              </Grid>
              <Grid item xs={6} sm={8}>
                <Box mt={4} />
                <Typography variant="h5">
                  {formatMessage({ id: 'pim_details.documents.asking_price_was' })}{' '}
                  <b>
                    € {askingPrice} (+ {askingIncrease}%)
                  </b>
                </Typography>
              </Grid>
            </Grid>
            <Box mt={3} />
            <FormSubSectionHeader
              title={formatMessage({ id: `pim_details.documents.sales_conditions` })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mt={3.5} />
            <RadioGroupField disabled={!editing} name="salesConditions" options={salesConditions} />
            <Box mt={1} />
            <GenericField disabled={!editing} name="note" label="pim_details.documents.note" size="medium" />
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
