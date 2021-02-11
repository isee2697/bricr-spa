import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SidebarMenu } from 'ui/molecules';
import { ClockIcon, DocIcon, GraphArrowIcon, NcRentIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { SidebarTitleTile } from 'ui/atoms/sidebarTitleTile/SidebarTitleTile';
import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

import { ProjectDetailsSidebarMenuProps } from './ProjectDetailsSidebarMenu.types';

export const ProjectDetailsSidebarMenu = ({
  onHide,
  objectTypeNumber,
  title,
  linkedPropertiesNumber,
  allocateResultsNumber,
  isVisible,
}: ProjectDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();

  const menu: SidebarMenuType = {
    url: url,
    back: {
      url: AppRoute.project,
      title: formatMessage({ id: `project_details.menu.back_to_ncp_list` }),
    },
    groups: [
      {
        items: [
          { key: 'dashboard', icon: <GraphArrowIcon /> },
          { key: 'projectJourney', icon: <NcRentIcon /> },
          { key: 'timeline', icon: <ClockIcon /> },
          { key: 'summary', icon: <DocIcon /> },
        ],
      },
      {
        isCollapsable: true,
        key: 'project_details.menu.pim_intake',
        items: [
          {
            key: 'general',
          },
          {
            key: 'characteristics',
          },
          {
            key: 'prices',
            subItems: ['costs', 'interests'],
          },
          {
            key: 'services',
          },
          {
            key: 'media',
          },
        ],
      },
      {
        items: [
          { key: 'objectTypes', count: objectTypeNumber },
          { key: 'properties', count: linkedPropertiesNumber },
        ],
      },
      {
        isCollapsable: true,
        key: 'project_details.menu.documents',
        items: [],
      },
      {
        isCollapsable: true,
        key: 'project_details.menu.allocate',
        items: [
          {
            key: 'allocateResults',
          },
          {
            key: 'allocateSettings',
            title: formatMessage({ id: 'project_details.menu.allocateCriteria' }),
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'project_details.menu.sales',
        items: [],
      },
      {
        isCollapsable: true,
        key: 'project_details.menu.marketing',
        items: [],
      },
      {
        isCollapsable: true,
        key: 'project_details.menu.contacts',
        items: [],
      },
      {
        items: [{ key: 'tiara' }],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      menu={menu}
      translationPrefix="project_details.menu"
      menuTitle={
        <SidebarTitleTile
          title={title}
          subtitle={formatMessage({ id: 'common.sidebar_category.project' })}
          category={EntityType.Project}
          icon={<NewConstructionIcon color="inherit" />}
        />
      }
    />
  );
};
