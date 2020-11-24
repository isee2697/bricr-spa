import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useLocale } from 'hooks';
import { SidebarMenu } from 'ui/molecules';
import { NewConstructionIcon } from 'ui/atoms/icons';
import { SidebarTitleTile } from 'ui/atoms/sidebarTitleTile/SidebarTitleTile';
import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';

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

  const menu = {
    url: url,
    back: {
      url: AppRoute.project,
      title: formatMessage({ id: `project_details.menu.back_to_ncp_list` }),
    },
    groups: [
      {
        items: [{ key: 'dashboard' }, { key: 'summary' }, { key: 'projectJourney' }, { key: 'salesSettings' }],
      },
      {
        items: [
          { key: 'general' },
          { key: 'characteristics' },
          { key: 'prices', subItems: ['costs', 'interests'] },
          { key: 'services' },
          { key: 'media' },
          { key: 'objectTypes', count: objectTypeNumber },
          { key: 'properties', count: linkedPropertiesNumber },
          {
            key: 'allocateResults',
            count: allocateResultsNumber,
          },
          { key: 'tiara' },
        ],
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
