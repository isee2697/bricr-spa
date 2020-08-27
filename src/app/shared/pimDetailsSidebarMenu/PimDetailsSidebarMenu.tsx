import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { SidebarMenu } from 'ui/molecules';
import { Box, SidebarTitleTile } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { PropertyType } from 'api/types';
import { EntityType, useEntityType } from 'app/shared/entityType';
import { ComplexBuildingIcon, MailIcon, BuildingIcon } from 'ui/atoms/icons';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

import { PimDetailsSidebarMenuProps, SideBarItemTypes } from './PimDetailsSidebarMenu.types';
import { getMenuItem } from './PimDetailsSidebarMenu.helpers';

const getBackUrl = (routeParams: Record<string, string>) => {
  if (routeParams.projectId && routeParams.objectTypeId) {
    return (
      AppRoute.objectTypeDetails.replace(':id', routeParams.objectTypeId).replace(':projectId', routeParams.projectId) +
      '/properties'
    );
  }

  return AppRoute.pim;
};

export const PimDetailsSidebarMenu = ({ onHide, data, objectTypeName, isVisible }: PimDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const params = useParams();
  const { entityType } = useEntityType();
  const theme = useTheme();

  if (!data) {
    return null;
  }

  const items: MenuItem[] = [];

  switch (data.getPimGeneral.propertyType) {
    case PropertyType.House:
    case PropertyType.Apartment:
      items.push(
        getMenuItem(SideBarItemTypes.General, data, formatMessage),
        getMenuItem(SideBarItemTypes.Cadastre, data, formatMessage),
        getMenuItem(SideBarItemTypes.Inside, data, formatMessage),
        getMenuItem(SideBarItemTypes.Outside, data, formatMessage),
        getMenuItem(SideBarItemTypes.Services, data, formatMessage),
        getMenuItem(SideBarItemTypes.Meters, data, formatMessage),
        getMenuItem(SideBarItemTypes.Specification, data, formatMessage),
        getMenuItem(SideBarItemTypes.Media, data, formatMessage),
      );
      break;
    case PropertyType.Commercial:
      items.push(
        getMenuItem(SideBarItemTypes.General, data, formatMessage),
        getMenuItem(SideBarItemTypes.Cadastre, data, formatMessage),
        getMenuItem(SideBarItemTypes.Commercial, data, formatMessage),
        getMenuItem(SideBarItemTypes.Services, data, formatMessage),
        getMenuItem(SideBarItemTypes.Meters, data, formatMessage),
        getMenuItem(SideBarItemTypes.Specification, data, formatMessage),
        getMenuItem(SideBarItemTypes.Media, data, formatMessage),
      );
      break;
    case PropertyType.Agricultural:
      items.push(
        getMenuItem(SideBarItemTypes.General, data, formatMessage),
        getMenuItem(SideBarItemTypes.Cadastre, data, formatMessage),
        getMenuItem(SideBarItemTypes.Ground, data, formatMessage),
        getMenuItem(SideBarItemTypes.Installations, data, formatMessage),
        getMenuItem(SideBarItemTypes.Buildings, data, formatMessage),
        getMenuItem(SideBarItemTypes.Animals, data, formatMessage),
        getMenuItem(SideBarItemTypes.Services, data, formatMessage),
        getMenuItem(SideBarItemTypes.Meters, data, formatMessage),
        getMenuItem(SideBarItemTypes.Specification, data, formatMessage),
        getMenuItem(SideBarItemTypes.Media, data, formatMessage),
      );
      break;
    default:
      items.push(
        getMenuItem(SideBarItemTypes.General, data, formatMessage),
        getMenuItem(SideBarItemTypes.Cadastre, data, formatMessage),
        getMenuItem(SideBarItemTypes.Services, data, formatMessage),
        getMenuItem(SideBarItemTypes.Meters, data, formatMessage),
        getMenuItem(SideBarItemTypes.Specification, data, formatMessage),
        getMenuItem(SideBarItemTypes.Media, data, formatMessage),
      );
      break;
  }

  const menu = {
    url: url,
    back: {
      url: getBackUrl(params),
      title: formatMessage({
        id:
          entityType === EntityType.Property
            ? `pim_details.menu.back_to_pim_list`
            : `project_details.properties.menu.back_to_properties_list`,
      }),
    },
    groups: [
      {
        items: [{ key: 'dashboard' }, { key: 'summary' }, { key: 'propertyJourney' }, { key: 'salesSettings' }],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.pim_intake',
        items,
      },
      {
        items: [
          {
            key: 'prices',
            subItems: [
              {
                id: 'costs',
                label: 'pim_details.prices.costs.title',
              },
              {
                id: 'investments',
                label: 'pim_details.prices.investments.menu_title',
              },
            ],
            icon: <MailIcon />,
          },
          { key: 'documents' },
          { key: 'contacts' },
          { key: 'marketing' },
          { key: 'reactions' },
        ],
      },
    ],
  };

  const pim = data?.getPimGeneral;
  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city}` : '';

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="pim_details.menu"
      menu={menu}
      menuTitle={
        objectTypeName ? (
          <SidebarTitleTile
            prevPage={objectTypeName}
            title={title}
            subtitle={formatMessage({ id: 'common.sidebar_category.property' })}
            category={EntityType.LinkedProperty}
            icon={<BuildingIcon color="inherit" />}
            prevPageicon={
              <Box color={theme.palette.purple.main}>
                <ComplexBuildingIcon color="inherit" />
              </Box>
            }
          />
        ) : (
          undefined
        )
      }
    />
  );
};
