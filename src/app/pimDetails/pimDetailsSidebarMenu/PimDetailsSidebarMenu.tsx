import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import groupBy from 'lodash/groupBy';

import { SideMenu } from 'ui/molecules';
import { Box, SideMenuItem, SideSubMenuItem } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { UnseeIcon } from 'ui/atoms/icons/unsee/UnseeIcon';
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

import { useStyles } from './PimDetailsSidebarMenu.styles';
import { PimDetailsSidebarMenuProps, SubMenuItem } from './PimDetailsSidebarMenu.types';

export const PimDetailsSidebarMenu = ({ onHide, pim, services, cadastre, inside }: PimDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const floorOrder = [FloorType.Attic, FloorType.Loft, FloorType.Floor, FloorType.GroundFloor, FloorType.Basement];
  const outsideGroups = groupBy((pim && pim.outsideFeatures) || [], outside => outside.type);
  const meterGroups = groupBy((services && services.meters) || [], meter => meter.type);
  const plotGroups = groupBy(
    (cadastre && cadastre.cadastre?.filter(c => c.type === CadastreType.Plot).reverse()) || [],
    c => c.type,
  );

  const createSubMenuData = (id: string, label: string, amount: number, key: number): SubMenuItem => {
    return { id, label, number: amount > 1 ? amount - key : undefined };
  };

  const floors = floorOrder.flatMap(type => {
    const floorItems = (inside && inside.floors?.filter(floor => floor.floorType === type)) || [];

    return floorItems.map((floor, key) =>
      createSubMenuData(floor.id, `dictionaries.floor_type.${floor.floorType}`, floorItems.length, key),
    );
  });

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
      subItems: floors,
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
          values.map((outside, key) =>
            createSubMenuData(outside.id, 'pim_details.cadastre.plot.title', plotGroups[outside.type].length, key),
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
      <SideMenuItem
        className={classes.hideMenu}
        icon={<UnseeIcon />}
        title={formatMessage({ id: `pim_details.menu.hide_sidebar` })}
        selected={false}
        onClick={onHide}
      />
      <SideMenu className={classes.menu}>
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
              <Link to={`${url}/${item.name}/${subItem.id}`} key={subItem.id}>
                <SideSubMenuItem
                  title={
                    <>
                      <Box mr={4} />
                      {formatMessage({ id: subItem.label })} {subItem.number}
                    </>
                  }
                  selected={pathname === `${url}/${item.name}/${subItem.id}`}
                />
              </Link>
            ))}
          </SideMenuItem>
        ))}
      </SideMenu>
      <Link to={AppRoute.pim}>
        <SideMenuItem
          className={classes.backToList}
          icon={<ArrowLeftIcon color="inherit" />}
          title={formatMessage({ id: `pim_details.menu.back_to_pim_list` })}
          selected={false}
        />
      </Link>
    </div>
  );
};
