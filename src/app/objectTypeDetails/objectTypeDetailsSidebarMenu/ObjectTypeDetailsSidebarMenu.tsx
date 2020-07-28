import React from 'react';
import { Link, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { SideMenu } from 'ui/molecules';
import { Box, SideMenuItem, SideSubMenuItem } from 'ui/atoms';
import { ArrowLeftIcon, BuildingIcon, NewConstructionIcon, SaleIcon } from 'ui/atoms/icons';
import { SidebarHideButton } from 'ui/atoms/sidebarHideButton/SidebarHideButton';
import { SidebarTitleTile } from 'ui/atoms/sidebarTitleTile/SidebarTitleTile';
import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';

import { useStyles } from './ObjectTypeDetailsSidebarMenu.styles';
import { ObjectTypeDetailsSidebarMenuProps } from './ObjectTypeDetailsSidebarMenu.types';

const menuItems = [
  { key: 'dashboard' },
  { key: 'summary' },
  { key: 'projectJourney' },
  { key: 'salesSettings' },
  { key: 'characteristics' },
  { key: 'prices', subItems: ['costs'] },
  { key: 'services' },
  { key: 'media' },
  { key: 'properties', count: 0 },
];

export const ObjectTypeDetailsSidebarMenu = ({ onHide, ncp, objectTypes }: ObjectTypeDetailsSidebarMenuProps) => {
  const { projectId } = useParams<{ projectId: string }>();
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className={classes.hideButton} onClick={onHide}>
        <SidebarHideButton />
      </div>
      <div className={classes.menuWrapper}>
        <Box mb={2}>
          <SidebarTitleTile
            prevPage={ncp?.getNcp.name}
            title={objectTypes?.getObjectTypeGeneral.name}
            subtitle={formatMessage({ id: 'common.sidebar_category.object_type' })}
            category={EntityType.ObjectType}
            icon={<NewConstructionIcon color="inherit" />}
            prevPageicon={
              <Box color={theme.palette.green.main}>
                <BuildingIcon color="inherit" />
              </Box>
            }
          />
        </Box>
        <SideMenu className={classes.root} disablePadding>
          {menuItems.map(item => (
            <SideMenuItem
              key={item.key}
              icon={<SaleIcon />}
              title={formatMessage({ id: `project_details.menu.${item.key}` })}
              selected={pathname.startsWith(`${url}/${item.key}`)}
              badge={item.count}
              onClick={() => push(`${url}/${item.key}`)}
            >
              {item.subItems?.map(subItem => (
                <SideSubMenuItem
                  key={subItem}
                  title={formatMessage({ id: `project_details.menu.${subItem}` })}
                  selected={pathname === `${url}/${item.key}/${subItem}`}
                  onClick={() => push(`${url}/${item.key}/${subItem}`)}
                />
              ))}
            </SideMenuItem>
          ))}
        </SideMenu>
        <SideMenuItem
          className={classes.backToList}
          title={
            <Link to={`${AppRoute.projectDetails.replace(':id', projectId)}/objectTypes`}>
              <ArrowLeftIcon color="inherit" />
              {formatMessage({ id: `project_details.object_types.menu.back_to_object_type_list` })}
            </Link>
          }
          selected={false}
        />
      </div>
    </div>
  );
};
