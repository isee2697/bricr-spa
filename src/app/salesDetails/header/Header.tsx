import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Box, IconButton, NavBreadcrumbs, TextField, Typography } from 'ui/atoms';
import { HelpIcon, HideIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { HeaderProps } from './Header.types';
import { useStyles } from './Header.styles';

export const Header = ({ isSidebarVisible, onSidebarOpen }: HeaderProps) => {
  const classes = useStyles();
  const { params } = useRouteMatch();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box display="flex" alignItems="center">
        {!isSidebarVisible && (
          <IconButton
            className={classes.hideSidebarButton}
            onClick={onSidebarOpen}
            size="small"
            variant="roundedContained"
          >
            <HideIcon />
          </IconButton>
        )}
        <NavBreadcrumbs />
      </Box>
      <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h1">{formatMessage({ id: 'sales_details.title' })}</Typography>
        <Box display="flex" alignItems="center">
          <IconButton size="small" variant="rounded">
            <HelpIcon />
          </IconButton>
          <Box ml={3} />
          <IconButton size="small" variant="rounded">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <TextField
        variant="standard"
        fullWidth
        placeholder={formatMessage({ id: 'sales_details.about_placeholder' }, { type: params.type })}
        className={classes.textFieldAbout}
      />
    </>
  );
};
