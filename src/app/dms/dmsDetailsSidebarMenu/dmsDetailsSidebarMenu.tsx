import React from 'react';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import { KeyboardBackspace } from '@material-ui/icons';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SidebarMenu } from 'ui/molecules';
import { Link, Typography, Box } from 'ui/atoms';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

import { DmsDetailsSidebarMenuProps } from './dmsDetailsSidebarMenu.types';

export const DmsDetailsSidebarMenu = ({ onHide, isVisible }: DmsDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const urlPath = url.split('/');
  urlPath.pop();
  const parentUrl = urlPath.join('/');

  const menu: SidebarMenuType = {
    url,
    groups: [
      {
        items: [
          { key: 'general', hideIcon: true, title: `1. ${formatMessage({ id: 'dms.templates.general' })}` },
          {
            key: 'configureSettings',
            hideIcon: true,
            title: `2. ${formatMessage({ id: 'dms.templates.configure_settings' })}`,
          },
          {
            key: 'layoutPreview',
            hideIcon: true,
            title: `3. ${formatMessage({ id: 'dms.templates.layout_preview' })}`,
          },
        ],
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="dms.templates.menu"
      menu={menu}
      menuTitle={
        <Link component={RouterLink} to={parentUrl}>
          <Box display="flex" alignItems="center" justifyContent="center" my={2} width="100%">
            <KeyboardBackspace />
            <Box ml={2}>
              <Typography variant="h4">{formatMessage({ id: `dms.menu.back_to_list` })}</Typography>
            </Box>
          </Box>
        </Link>
      }
    />
  );
};
