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
import { CadastreType } from 'api/types';

import { useStyles } from './PimDetailsSidebarMenu.styles';
import { PimDetailsSidebarMenuProps, subMenuItem } from './PimDetailsSidebarMenu.types';

export const PimDetailsSidebarMenu = ({ onHide, pim }: PimDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const outsideGroups = groupBy((pim && pim.outsideFeatures) || [], outside => outside.type);
  const floorGroups = groupBy((pim && pim.floors) || [], floor => floor.floorType);
  const meterGroups = groupBy((pim && pim.services && pim.services.meters) || [], meter => meter.type);
  const plotGroups = groupBy(
    (pim && pim.cadastre && pim.cadastre.filter(c => c.type === CadastreType.Plot).reverse()) || [],
    c => c.type,
  );

  const createSubMenuData = (id: string, label: string, amount: number, key: number): subMenuItem => {
    return { id, label, number: amount > 1 ? amount - key : undefined };
  };

  const items = [
    {
      name: 'general',
      icon: <BuildingIcon />,
    },
    {
      name: 'inside',
      icon: <FilesIcon />,
      subItems: Object.values(floorGroups).flatMap(values =>
        values.map((floor, key) =>
          createSubMenuData(
            floor.id,
            `dictionaries.floor_type.${floor.floorType}`,
            floorGroups[floor.floorType].length,
            key,
          ),
        ),
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
          values.map((outside, key) =>
            createSubMenuData(outside.id, 'pim_details.cadastre.plot.title', plotGroups[outside.type].length, key),
          ),
        ),
      ],
    },
    {
      name: 'services',
      subItems: Object.entries(meterGroups).map((values, key) =>
        createSubMenuData(values[0].toLowerCase(), `pim_details.services.${values[0].toLowerCase()}_meters`, 0, key),
      ),
      icon: <HelpIcon />,
    },
    {
      name: 'details',
      icon: <PinIcon />,
    },
    {
      name: 'prices',
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
