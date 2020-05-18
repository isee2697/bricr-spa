import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import { SideMenu } from 'ui/molecules';
import { SideMenuItem, SideSubMenuItem } from 'ui/atoms';
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

import { useStyles } from './PimDetailsSidebarMenu.styles';
import { PimDetailsSidebarMenuProps } from './PimDetailsSidebarMenu.types';

export const PimDetailsSidebarMenu = ({ onHide, floors }: PimDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const items = [
    {
      name: 'general',
      icon: <BuildingIcon />,
    },
    {
      name: 'inside',
      icon: <FilesIcon />,
      subItems: floors.map(floor => ({
        id: floor.id,
        label: `dictionaries.floor_type.${floor.floorType}`,
      })),
    },
    {
      name: 'outside',
      icon: <LockIcon />,
    },
    {
      name: 'cadastre',
      icon: <FilterIcon />,
    },
    {
      name: 'services',
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
          <Link to={`${url}/${item.name}`} key={item.name}>
            <SideMenuItem
              icon={item.icon}
              title={formatMessage({ id: `pim_details.menu.${item.name}` })}
              selected={pathname.startsWith(`${url}/${item.name}`)}
            >
              {item.subItems?.map(subItem => (
                <Link to={`${url}/${item.name}/${subItem.id}`} key={subItem.id}>
                  <SideSubMenuItem
                    title={formatMessage({ id: subItem.label })}
                    selected={pathname === `${url}/${item.name}/${subItem.id}`}
                  />
                </Link>
              ))}
            </SideMenuItem>
          </Link>
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
