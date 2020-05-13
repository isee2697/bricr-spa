import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { IconButton, Breadrcumbs, Link, Box, Grid, Placeholder } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons/hide/HideIcon';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { AppRoute } from 'routing/AppRoute.enum';

import { PimDetailsHeaderProps } from './PimDetailsHeader.types';
import { useStyles } from './PimDetailsHeader.styles';

export const PimDetailsHeader = ({ isSidebarVisible, onOpenSidebar, title, action }: PimDetailsHeaderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { pathname } = useLocation();

  return (
    <Grid xs={12} item>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          {!isSidebarVisible && (
            <IconButton
              className={classes.hideSidebarButton}
              onClick={onOpenSidebar}
              size="small"
              variant="roundedContained"
            >
              <HideIcon />
            </IconButton>
          )}
          <Breadrcumbs separator=">">
            <Link component={RouterLink} to="/">
              {formatMessage({ id: AppMessages['header.links.home'] })}
            </Link>
            <Link component={RouterLink} to={AppRoute.pim}>
              {formatMessage({ id: AppMessages['header.links.pim'] })}
            </Link>
            {title && (
              <Link component={RouterLink} to={pathname}>
                {title}
              </Link>
            )}
            {!title && (
              <Link component={RouterLink} to={pathname}>
                <Placeholder variant="text" width={100} />
              </Link>
            )}
          </Breadrcumbs>
        </Box>
        {action}
      </Box>
    </Grid>
  );
};
