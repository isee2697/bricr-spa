import React, { ReactElement, useState } from 'react';
import clsx from 'classnames';
import { Grid } from '@material-ui/core';
import { DateTime } from 'luxon';

import { Box, Chip, IconButton, Typography, Menu, MenuItem } from 'ui/atoms';
import { CheckList } from '../CheckList.types';
import { useLocale } from 'hooks';
import { CheckIcon, ClockIcon, CloseIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './BrokerItem.styles';

export const BrokerItem = ({
  item: { id, type, steps, condition },
  checkbox,
  checked,
  onClick,
}: {
  item: CheckList;
  checkbox: ReactElement;
  checked: boolean;
  onClick: VoidFunction;
}) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const actions = [
    {
      value: 'upload',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'edit',
      icon: <ClockIcon />,
      onClick: () => {
        onClick();
      },
    },
    {
      value: 'delete',
      icon: <DeleteIcon color="inherit" />,
      onClick: () => {},
      color: 'red',
    },
  ];

  return (
    <>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          {checkbox}
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h5">{formatMessage({ id: `dictionaries.type_of_document.${type}` })}</Typography>
            </Grid>
            <Grid item xs={3}>
              {steps[0].status === 'completed' ? (
                <Box display="flex" alignItems="center">
                  <CheckIcon color="action" className={clsx(classes.stepIcon, steps[0].status)} />
                  <Box ml={1} />
                  <Typography variant="h6" color="textSecondary">
                    {steps[0].date?.toLocaleString(DateTime.DATE_SHORT)}
                  </Typography>
                </Box>
              ) : (
                <CloseIcon color="error" className={clsx(classes.stepIcon, steps[0].status)} />
              )}
            </Grid>
            <Grid item xs={2}>
              <Chip
                size="small"
                variant="outlined"
                label={formatMessage({
                  id: `dictionaries.checklist_condition.${condition}`,
                })}
                className={classes.gray}
              />
            </Grid>
            <Grid item xs={1} alignItems="flex-end">
              <IconButton size="small" variant="roundedContained" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Menu
        id={`checklist-row-menu-${id}`}
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        {actions.map((action, index) => (
          <MenuItem
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Box ml={2} display="flex" width="100%" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">
                {formatMessage({
                  id: `calendar.action.${action.value}`,
                })}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
