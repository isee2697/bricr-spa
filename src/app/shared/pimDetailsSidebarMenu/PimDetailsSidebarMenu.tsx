import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { SidebarMenu } from 'ui/molecules';
import { Box, SidebarTitleTile } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { PropertyType } from 'api/types';
import { EntityType, useEntityType } from 'app/shared/entityType';
import { BuildingIcon, ComplexBuildingIcon, CrmIcon, MailIcon, SaleIcon } from 'ui/atoms/icons';
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
  allocateResultsNumber = 0,
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
  let title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city}` : '';
  title = title.length > 25 ? `${title.slice(0, 25)}...` : title;

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
        items: [
          { key: 'dashboard' },
          {
            key: 'summary',
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
          { key: 'propertyJourney' },
          {
            key: 'salesSettings',
            subItems: [
              {
                id: 'allocation1',
                label: 'pim_details.sales_settings.allocation.title',
              },
              {
                id: 'allocation2',
                label: 'pim_details.sales_settings.allocation.title',
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
          {
            key: 'documents',
            subItems: [
              {
                id: 'checklist',
                label: 'pim_details.documents.checklist.title',
              },
              {
                id: 'audit_checklist',
                label: 'pim_details.documents.audit_checklist.menu_title',
              },
            ],
            icon: <CrmIcon />,
          },
          { key: 'contacts' },
          { key: 'marketing' },
          { key: 'reactions' },
          { key: 'tiara' },
          { key: 'allocateResults', count: allocateResultsNumber },
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
      menuTitleIcon={<SaleIcon />}
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
          formatMessage({
            id: `pim.type.${type}`,
          })
        )
      }
    />
  );
};
