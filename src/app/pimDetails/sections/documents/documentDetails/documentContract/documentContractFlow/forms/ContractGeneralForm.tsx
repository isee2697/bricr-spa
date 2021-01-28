import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { Box, Grid, Menu, MenuItem, Typography } from 'ui/atoms';
import { DeleteIcon, HistoryIcon, SquareIcon } from 'ui/atoms/icons';
import { PricingType } from 'api/types';
import { ContractFormProps } from '../DocumentContractFlow.types';
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

export function ContractGeneralForm({ documentKind }: ContractFormProps) {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const listTypes = [
    ...Object.keys(PricingType).map(type => ({
      label: `pim_details.prices.${type}`,
      icon: <SquareIcon />,
      value: type,
    })),
    {
      label: '+',
      icon: <SquareIcon />,
      value: '+',
    },
  ];

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.version.title' })}
        isExpandable
        isInitExpanded
        onOptionsClick={onMenuClick}
      >
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            <FormSubSectionHeader
              title={formatMessage({ id: `pim_details.documents.${documentKind}.type` })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mt={3.5} />
            <RadioGroupField disabled={!editing} name="typeOfList" options={listTypes} />
            <Box mt={1} />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <GenericField disabled={!editing} name="version" label="pim_details.documents.version" size="medium" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerField
                  label={formatMessage({
                    id: 'pim_details.documents.version_started',
                  })}
                  name="versionStarted"
                  disabled={!editing}
                  placeholder={formatMessage({ id: 'common.date_picker' })}
                />
              </Grid>
            </Grid>
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
