import React from 'react';
import { useRouteMatch, Link as RouterLink } from 'react-router-dom';
import { KeyboardBackspace } from '@material-ui/icons';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { SidebarMenu } from 'ui/molecules';
import { CrmIcon } from 'ui/atoms/icons';
import { Link, Typography, Box } from 'ui/atoms';

import { DmsTemplatesSidebarMenuProps } from './dmsTemplatesSidebarMenu.types';

export const DmsTemplatesSidebarMenu = ({ onHide, isVisible }: DmsTemplatesSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();

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
        <Link component={RouterLink} to={AppRoute.dms + '/templates'}>
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
