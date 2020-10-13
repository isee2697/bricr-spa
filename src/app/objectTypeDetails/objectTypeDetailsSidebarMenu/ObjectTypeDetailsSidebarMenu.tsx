import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/core';
import { SidebarMenu } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Box } from 'ui/atoms';
import { BuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { SidebarTitleTile } from 'ui/atoms/sidebarTitleTile/SidebarTitleTile';
import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';

import { ObjectTypeDetailsSidebarMenuProps } from './ObjectTypeDetailsSidebarMenu.types';

export const ObjectTypeDetailsSidebarMenu = ({ onHide, isVisible, data }: ObjectTypeDetailsSidebarMenuProps) => {
  const { projectId } = useParams<{ projectId: string }>();
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const theme = useTheme();

  const menu = {
    url: url,
    back: {
      url: `${AppRoute.projectDetails.replace(':id', projectId)}/objectTypes`,
      title: formatMessage({ id: `project_details.object_types.menu.back_to_object_type_list` }),
    },
    groups: [
      {
        items: [{ key: 'dashboard' }, { key: 'summary' }, { key: 'objectJourney' }, { key: 'salesSettings' }],
      },
      {
        items: [
          { key: 'characteristics' },
          { key: 'prices', subItems: ['costs'] },
          { key: 'services' },
          { key: 'media' },
          { key: 'properties', count: data?.linkedProperty.linkedProperties.metadata?.total },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="project_details.menu"
      menu={menu}
      menuTitle={
        <SidebarTitleTile
          prevPage={data?.project.name}
          title={data?.objectType.name}
          subtitle={formatMessage({ id: 'common.sidebar_category.object_type' })}
          category={EntityType.ObjectType}
          icon={<NewConstructionIcon color="inherit" />}
          prevPageicon={
            <Box color={theme.palette.green.main}>
              <BuildingIcon color="inherit" />
            </Box>
          }
        />
      }
    />
  );
};
