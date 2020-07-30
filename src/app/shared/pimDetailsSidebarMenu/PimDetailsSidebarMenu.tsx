import React from 'react';
import { Link, useRouteMatch, useLocation, useParams } from 'react-router-dom';
import groupBy from 'lodash/groupBy';

import { SideMenu } from 'ui/molecules';
import { Box, SideMenuItem, SideSubMenuItem } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { FilesIcon } from 'ui/atoms/icons/files/FilesIcon';
import { LockIcon } from 'ui/atoms/icons/lock/LockIcon';
import { FilterIcon } from 'ui/atoms/icons/filter/FilterIcon';
import { HelpIcon } from 'ui/atoms/icons/help/HelpIcon';
import { PinIcon } from 'ui/atoms/icons/pin/PinIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { GraphIcon } from 'ui/atoms/icons/graph/GraphIcon';
import { TasksIcon } from 'ui/atoms/icons/tasks/TasksIcon';
import { ArrowLeftIcon } from 'ui/atoms/icons/arrowLeft/ArrowLeftIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { CadastreType, FloorType } from 'api/types';
import { SidebarHideButton } from 'ui/atoms/sidebarHideButton/SidebarHideButton';
import { EntityType, useEntityType } from 'app/shared/entityType';

import { useStyles } from './PimDetailsSidebarMenu.styles';
import { PimDetailsSidebarMenuProps, SubMenuItem } from './PimDetailsSidebarMenu.types';

const createSubMenuData = (id: string, label: string, amount: number, key: number): SubMenuItem => {
  return { id, label, number: amount > 1 ? amount - key : undefined };
};

const getBackUrl = (routeParams: Record<string, string>) => {
  if (routeParams.projectId && routeParams.objectTypeId) {
    return (
      AppRoute.objectTypeDetails.replace(':id', routeParams.objectTypeId).replace(':projectId', routeParams.projectId) +
      '/properties'
    );
  }

  return AppRoute.pim;
};

export const PimDetailsSidebarMenu = ({ onHide, data }: PimDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { url } = useRouteMatch();
  const params = useParams();
  const { pathname } = useLocation();
  const { entityType } = useEntityType();

  if (!data) {
    return null;
  }

  const floorGroups = groupBy(data.getPimInside.floors || [], floor => floor.floorType);
  const outsideGroups = groupBy(data.getPimOutside.outsideFeatures || [], outside => outside.type);
  const plotGroups = groupBy(
    data.getPimCadastre.cadastre?.filter(c => c.type === CadastreType.Plot) || [],
    c => c.type,
  );
  const meterGroups = groupBy(data.getPimServices.meters || [], meter => meter.type);

  const items = [
    {
      name: 'general',
      icon: <BuildingIcon />,
      subItems: [
        {
          id: 'location',
          label: 'pim_details.general.location.title',
        },
      ],
    },
    {
      name: 'inside',
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
      name: 'outside',
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
      name: 'cadastre',
      icon: <FilterIcon />,
      subItems: [
        {
          id: 'cadastreMap',
          label: 'pim_details.cadastre.cadastre_map',
        },
        ...Object.values(plotGroups).flatMap(values =>
          values.map((plot, key) =>
            createSubMenuData(plot.id, 'pim_details.cadastre.plot.title', plotGroups[plot.type].length, key),
          ),
        ),
      ],
    },
    {
      name: 'services',
      subItems: Object.entries(meterGroups).map((values, key) =>
        createSubMenuData(values[0].toLowerCase(), `dictionaries.service.meter.${values[0]}Meters`, 0, key),
      ),
      icon: <HelpIcon />,
    },
    {
      name: 'specification',
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
      name: 'prices',
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
      name: 'media',
      icon: <GraphIcon />,
    },
    {
      name: 'summary',
      icon: <TasksIcon />,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.hideButton} onClick={onHide}>
        <SidebarHideButton />
      </div>
      <div className={classes.menuWrapper}>
        <SideMenu className={classes.menu} disablePadding>
          {items.map(item => (
            <SideMenuItem
              key={item.name}
              icon={item.icon}
              title={
                <Link to={`${url}/${item.name}`}>
                  {item.icon || <Box mr={4} />}
                  {formatMessage({ id: `pim_details.menu.${item.name}` })}
                </Link>
              }
              selected={pathname.startsWith(`${url}/${item.name}`)}
            >
              {item.subItems?.map(subItem => (
                <SideSubMenuItem
                  key={subItem.id}
                  title={
                    <Link to={`${url}/${item.name}/${subItem.id}`}>
                      <Box mr={4} />
                      {formatMessage({ id: subItem.label })} {subItem.number}
                    </Link>
                  }
                  selected={pathname === `${url}/${item.name}/${subItem.id}`}
                />
              ))}
            </SideMenuItem>
          ))}
        </SideMenu>
        <SideMenuItem
          className={classes.backToList}
          title={
            <Link to={getBackUrl(params)}>
              <ArrowLeftIcon color="inherit" />
              {formatMessage({
                id:
                  entityType === EntityType.Property
                    ? `pim_details.menu.back_to_pim_list`
                    : `project_details.properties.menu.back_to_properties_list`,
              })}
            </Link>
          }
          selected={false}
        />
      </div>
    </div>
  );
};
