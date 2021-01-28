import React from 'react';
import { useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Box, NavBreadcrumbs, IconButton, Typography } from 'ui/atoms';
import { MenuIcon, ExitIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './Header.styles';

export const Header = () => {
  const { push } = useHistory();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <NavBreadcrumbs />
        <Box display="flex" alignItems="center">
          <IconButton variant="rounded" size="small" onClick={() => push(`${AppRoute.sales}/invoices`)}>
            <ExitIcon />
          </IconButton>
          <Box ml={3} />
          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="h1" className={classes.fontWeightBold}>
        {formatMessage({ id: 'sales.invoice.title' })}
      </Typography>
    </>
  );
};
