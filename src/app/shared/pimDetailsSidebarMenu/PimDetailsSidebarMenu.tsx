import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import groupBy from 'lodash/groupBy';
import { useTheme } from '@material-ui/core';

import { SidebarMenu } from 'ui/molecules';
import { Box, SidebarTitleTile } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { CadastreType, FloorType } from 'api/types';
import { EntityType, useEntityType } from 'app/shared/entityType';
import {
  ComplexBuildingIcon,
  GraphIcon,
  MailIcon,
  PinIcon,
  HelpIcon,
  FilterIcon,
  LockIcon,
  FilesIcon,
  BuildingIcon,
} from 'ui/atoms/icons';

import { PimDetailsSidebarMenuProps, SubMenuItem } from './PimDetailsSidebarMenu.types';

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

  const createSubMenuData = (id: string, label: string, amount: number, key: number): SubMenuItem => {
    const number = amount > 1 ? amount - key : undefined;

    return { id, title: `${formatMessage({ id: label })} ${number ?? ''}` };
  };

  const floorGroups = groupBy(data.getPimInside.floors || [], floor => floor.floorType);
  const outsideGroups = groupBy(data.getPimOutside.outsideFeatures || [], outside => outside.type);
  const plotGroups = groupBy(
    data.getPimCadastre.cadastre?.filter(c => c.type === CadastreType.Plot) || [],
    c => c.type,
  );
  const meterGroups = groupBy(data.getPimServices.meters || [], meter => meter.type);

  const items = [
    {
      key: 'general',
      icon: <BuildingIcon />,
      subItems: [
        {
          id: 'location',
          label: 'pim_details.general.location.title',
        },
      ],
    },
    {
      key: 'inside',
      icon: <FilesIcon />,
      subItems: Object.values(floorGroups).flatMap(values =>
        values.map(({ id, floorType }, index) => {
          const amount = floorGroups[floorType].length,
            indexAscending = index + 1,
            indexDescending = amount - index;
          const number = amount > 1 ? (floorType === FloorType.Basement ? indexAscending : indexDescending) : undefined;

          return {
            id,
            label: `dictionaries.floor_type.${floorType}`,
            number,
          };
        }),
      ),
    },
    {
      key: 'outside',
      icon: <LockIcon />,
      subItems: Object.values(outsideGroups).flatMap(values =>
        values.map((outside, key) =>
          createSubMenuData(
            outside.id,
            `dictionaries.outside_type.${outside.type}`,
            outsideGroups[outside.type].length,
            key,
          ),
        ),
      ),
    },
    {
      key: 'cadastre',
      icon: <FilterIcon />,
      subItems: Object.values(plotGroups).flatMap(values =>
        values.map((plot, key) =>
          createSubMenuData(plot.id, 'pim_details.cadastre.plot.title', plotGroups[plot.type].length, key),
        ),
      ),
    },
    {
      key: 'services',
      icon: <HelpIcon />,
    },
    {
      key: 'meters',
      subItems: Object.entries(meterGroups).map((values, key) =>
        createSubMenuData(values[0].toLowerCase(), `dictionaries.service.meter.${values[0]}Meters`, 0, key),
      ),
      icon: <HelpIcon />,
    },
    {
      key: 'specification',
      subItems: [
        {
          id: 'advanced',
          label: 'pim_details.specification.advanced.title',
        },
        {
          id: 'linked-property',
          label: 'pim_details.specification.linked_properties.title',
        },
        {
          id: 'inspection',
          label: 'pim_details.specification.inspection.title',
        },
      ],
      icon: <PinIcon />,
    },
    {
      key: 'media',
      icon: <GraphIcon />,
    },
  ];

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
