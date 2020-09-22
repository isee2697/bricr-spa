import React from 'react';

import { AppRoute } from 'routing/AppRoute.enum';
import { Box, Grid, SidebarTitleTile } from 'ui/atoms';
import { SettingsIcon } from 'ui/atoms/icons';
import { Modal } from '../modal/Modal';
import { SidebarMenu } from '../sidebarMenu/SidebarMenu';

export const Filters = () => {
  const menu = {
    url: '/',
    back: {
      url: AppRoute.home,
      title: 'Go Back',
    },
    groups: [
      {
        isCollapsable: false,
        key: 'settings.menu.general',
        items: [{ key: 'workflowTemplates' }],
      },
    ],
  };

  return (
    <Modal fullWidth title="Filters for property list" isOpened={true}>
      <Grid container spacing={0}>
        <SidebarMenu
          onHide={() => false}
          isVisible={true}
          menu={menu}
          translationPrefix="settings.menu"
          menuTitle={<SidebarTitleTile title={'Title'} icon={<SettingsIcon color="inherit" />} />}
        />
        <Box flex={1} padding={3}>
          <Grid item xs={12}>
            ASD
          </Grid>
        </Box>
      </Grid>
    </Modal>
  );
};
