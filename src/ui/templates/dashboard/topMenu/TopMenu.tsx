import React from 'react';
import { useLocation } from 'react-router-dom';

import { Tabs } from 'ui/atoms';
import { LinkTab } from 'ui/molecules';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { CrmIcon } from 'ui/atoms/icons/crm/CrmIcon';
import { GraphIcon } from 'ui/atoms/icons/graph/GraphIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

const menuLinks = [AppRoute.home, AppRoute.pim, AppRoute.crm, AppRoute.sales];

export const TopMenu = () => {
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();
  const activeLinkIndex = menuLinks.findIndex(link => link !== AppRoute.home && pathname.startsWith(link));

  return (
    <Tabs value={activeLinkIndex !== -1 ? activeLinkIndex : 0} indicatorColor="primary" textColor="primary" centered>
      <LinkTab
        icon={<HomeIcon color="inherit" />}
        label={formatMessage({ id: AppMessages['header.links.home'] })}
        to="/"
      />
      <LinkTab
        icon={<BuildingIcon color="inherit" />}
        label={formatMessage({ id: AppMessages['header.links.pim'] })}
        to="/pim"
      />
      <LinkTab
        icon={<CrmIcon color="inherit" />}
        label={formatMessage({ id: AppMessages['header.links.crm'] })}
        to="/crm"
      />
      <LinkTab
        icon={<GraphIcon color="inherit" />}
        label={formatMessage({ id: AppMessages['header.links.sales'] })}
        to="/sales"
      />
    </Tabs>
  );
};
