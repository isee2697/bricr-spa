import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { SidebarMenu } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { Box } from 'ui/atoms';

export const ChartDetailSidebarMenu = () => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();

  const menu: SidebarMenuType = {
    url,
    back: {
      url: `${AppRoute.insights}/charts`,
      title: formatMessage({ id: `common.back_to_list` }),
    },
    groups: [
      {
        items: [
          {
            key: 'visualisation',
            icon: '1.',
          },
          {
            key: 'data',
            icon: '2.',
          },
          {
            key: 'preview',
            icon: '3.',
          },
        ],
      },
    ],
  };

  return <SidebarMenu translationPrefix="insights.chart_details.menu" menu={menu} menuTitle={<Box mt={-7} />} />;
};
