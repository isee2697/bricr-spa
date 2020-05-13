import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

import { IconButton, Breadrcumbs, Link, Box, Grid, Button, Typography, Avatar, Placeholder } from 'ui/atoms';
import { HideIcon } from 'ui/atoms/icons/hide/HideIcon';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { EditIcon } from 'ui/atoms/icons/edit/EditIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { AppRoute } from 'routing/AppRoute.enum';

import { PimDetailsHeaderProps } from './PimDetailsHeader.types';
import { useStyles } from './PimDetailsHeader.styles';

export const PimDetailsHeader = ({ isSidebarVisible, onOpenSidebar, name }: PimDetailsHeaderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    <>
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
              {name && (
                <Link component={RouterLink} to={pathname}>
                  {name}
                </Link>
              )}
              {!name && (
                <Link component={RouterLink} to={pathname}>
                  <Placeholder variant="text" width={100} />
                </Link>
              )}
            </Breadrcumbs>
          </Box>
          <Button
            color="primary"
            startIcon={<EditIcon color="inherit" />}
            variant="contained"
            onClick={() => {}}
            size="small"
          >
            {formatMessage({ id: AppMessages['pim_details.customize'] })}
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Box display="flex" alignItems="center">
          <Avatar variant="rounded" bgcolor={theme.palette.red.light} className={classes.avatarIcon}>
            <Box color={theme.palette.red.main}>
              <BuildingIcon color="inherit" />
            </Box>
          </Avatar>
          <Typography variant="h1">{name ? name : <Placeholder variant="text" width={150} />}</Typography>
        </Box>
      </Grid>
    </>
  );
};
