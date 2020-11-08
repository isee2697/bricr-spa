import React from 'react';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import { KeyboardBackspace } from '@material-ui/icons';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SidebarMenu } from 'ui/molecules';
import { CrmIcon } from 'ui/atoms/icons';
import { Link, Typography, Box } from 'ui/atoms';

import { DmsDetailsSidebarMenuProps } from './dmsDetailsSidebarMenu.types';

export const DmsDetailsSidebarMenu = ({ onHide, isVisible }: DmsDetailsSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const urlPath = url.split('/');
  urlPath.pop();
  const parentUrl = urlPath.join('/');

  const menu = {
    url,
    groups: [
      {
        items: [
          { key: 'general', selected: true, icon: <CrmIcon /> },
          { key: 'layout', icon: <CrmIcon /> },
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
