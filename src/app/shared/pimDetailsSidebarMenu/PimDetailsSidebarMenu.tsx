import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { SidebarMenu } from 'ui/molecules';
import { Box, SidebarTitleTile } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { PropertyType } from 'api/types';
import { EntityType, useEntityType } from 'app/shared/entityType';
import {
  BuildingIcon,
  ClockIcon,
  ComplexBuildingIcon,
  DocIcon,
  GraphArrowIcon,
  NcRentIcon,
  SaleIcon,
} from 'ui/atoms/icons';
import { MenuItem, SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { PimTypes } from 'app/pim/dictionaries';

import { PimDetailsSidebarMenuProps, SideBarItemTypes } from './PimDetailsSidebarMenu.types';
import { getMenuItem } from './PimDetailsSidebarMenu.helpers';

const getBackUrl = (routeParams: Record<string, string>, type?: PropertyType) => {
  if (routeParams.projectId && routeParams.objectTypeId) {
    return (
      AppRoute.objectTypeDetails.replace(':id', routeParams.objectTypeId).replace(':projectId', routeParams.projectId) +
      '/properties'
    );
  }

  const path = type && PimTypes.find(pimType => pimType.types?.includes(type))?.name;

  return `${AppRoute.pim}${path && '/'}${path}`;
};

export const PimDetailsSidebarMenu = ({
  onHide,
  data,
  objectTypeName,
  isVisible,
  picture,
}: PimDetailsSidebarMenuProps) => {
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
    case PropertyType.BuildingPlot:
      items.push(
        getMenuItem(SideBarItemTypes.General, data, formatMessage),
        getMenuItem(SideBarItemTypes.Cadastre, data, formatMessage),
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

  const pim = data?.getPimGeneral;
  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city}` : '';

  const type =
    pim?.propertyType === PropertyType.House || pim?.propertyType === PropertyType.Apartment
      ? 'residental'
      : pim?.propertyType.toLowerCase();

  const menu: SidebarMenuType = {
    url: url,
    back: {
      url: getBackUrl(params, pim?.propertyType),
      title: formatMessage({
        id:
          entityType === EntityType.Property
            ? `pim_details.menu.back_to_pim_list`
            : `project_details.properties.menu.back_to_properties_list`,
      }),
    },
    groups: [
      {
        spaceAfter: true,
        items: [
          { key: 'dashboard', icon: <GraphArrowIcon /> },
          { key: 'propertyJourney', icon: <NcRentIcon /> },
          { key: 'timeline', icon: <ClockIcon /> },
          {
            key: 'summary',
            icon: <DocIcon />,

            subItems: [
              {
                id: 'inside',
                label: 'pim_details.summary.inside.title',
              },
              {
                id: 'outside',
                label: 'pim_details.summary.outside.title',
              },
              {
                id: 'personal',
                label: 'pim_details.summary.personal.title',
              },
              {
                id: 'signsAndKey',
                label: 'pim_details.summary.signs_and_key.title',
              },
              {
                id: 'auditChecklist',
                label: 'pim_details.summary.audit_checklist.title',
              },
            ],
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.pim_intake',
        items,
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.prices',
        items: [
          {
            key: 'prices',
            title: formatMessage({ id: 'pim_details.menu.prices' }),
          },
          {
            key: 'prices/costs',
            title: formatMessage({ id: 'pim_details.prices.costs.title' }),
          },
          {
            key: 'prices/investments',
            title: formatMessage({ id: 'pim_details.prices.investments.menu_title' }),
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.documents',
        items: [
          {
            key: 'documents/folders',
            title: formatMessage({ id: 'pim_details.documents.folders.title' }),
          },
          {
            key: 'documents/checklist',
            title: formatMessage({ id: 'pim_details.documents.checklist.title' }),
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.allocation',
        items: [
          {
            key: 'allocateResults',
            title: formatMessage({ id: 'pim_details.menu.allocateResults' }),
          },
          {
            key: 'allocateSettings/allocation1',
            title: formatMessage({ id: 'pim_details.allocate_settings.allocation.title' }),
          },
          {
            key: 'allocateSettings/allocation2',
            title: formatMessage({ id: 'pim_details.allocate_settings.allocation.title' }),
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.sales',
        items: [
          {
            key: 'sales',
            title: formatMessage({ id: 'pim_details.menu.sales' }),
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.marketing',
        items: [
          {
            key: 'marketing',
            title: formatMessage({ id: 'pim_details.menu.marketing' }),
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.contacts',
        items: [
          {
            key: 'contacts',
            title: formatMessage({ id: 'pim_details.menu.contacts' }),
          },
        ],
      },
      {
        isCollapsable: true,
        key: 'pim_details.menu.tiara',
        items: [
          {
            key: 'tiara',
            title: formatMessage({ id: 'pim_details.menu.dashboard' }),
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="pim_details.menu"
      menu={menu}
      menuTitleIcon={picture?.file?.url ? picture?.file?.url : <SaleIcon />}
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
          title
        )
      }
      menuSubTitle={formatMessage({
        id: `pim.type.${type}`,
      })}
    />
  );
};

export default PimDetailsSidebarMenu;
