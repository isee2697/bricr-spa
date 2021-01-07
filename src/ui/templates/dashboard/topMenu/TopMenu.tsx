import React from 'react';
import { useLocation } from 'react-router-dom';

import { Tabs } from 'ui/atoms';
import { LinkTab } from 'ui/molecules';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { CrmIcon } from 'ui/atoms/icons/crm/CrmIcon';
import { GraphIcon } from 'ui/atoms/icons/graph/GraphIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks/useLocale/useLocale';
import { matchesRouteAlias } from 'routing/AppRoute.aliases';

import { useStyles } from './TopMenu.styles';

const menuLinks = [AppRoute.home, AppRoute.pim, AppRoute.crm, AppRoute.sales];

export const TopMenu = () => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const activeLinkIndex =
    pathname === AppRoute.home
      ? 0
      : menuLinks.findIndex(
          link => (link !== AppRoute.home && pathname.startsWith(link)) || matchesRouteAlias(pathname, link),
        );

  return (
    <Tabs
      value={activeLinkIndex !== -1 ? activeLinkIndex : false}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <LinkTab
        className={classes.linkTab}
        icon={<HomeIcon color="inherit" />}
        label={formatMessage({ id: 'header.links.home' })}
        to="/"
      />
      <LinkTab
        className={classes.linkTab}
        icon={<BuildingIcon color="inherit" />}
        label={formatMessage({ id: 'header.links.pim' })}
        to="/pim"
      />
      <LinkTab
        className={classes.linkTab}
        icon={<CrmIcon color="inherit" />}
        label={formatMessage({ id: 'header.links.crm' })}
        to="/crm"
      />
      <LinkTab
        className={classes.linkTab}
        icon={<GraphIcon color="inherit" />}
        label={formatMessage({ id: 'header.links.sales' })}
        to="/sales"
      />
    </Tabs>
  );
};
