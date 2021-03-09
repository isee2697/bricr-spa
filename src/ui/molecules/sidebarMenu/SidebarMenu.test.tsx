import React from 'react';

import { render } from 'tests';
import { Box, SidebarTitleTile } from 'ui/atoms';
import { HomeIcon, SalesIcon } from 'ui/atoms/icons';

import { SidebarMenu } from './SidebarMenu';

const menu = {
  url: 'http://localhost',
  groups: [
    {
      items: [
        {
          key: 'item',
          icon: <HomeIcon />,
          subItems: [
            {
              id: 'item_1',
              label: 'Item 1',
            },
          ],
        },
      ],
    },
  ],
};

describe('SidebarMenu', () => {
  test('render correctly', () => {
    const { getByText } = render(
      <SidebarMenu
        isVisible
        translationPrefix="test-menu.menu"
        menu={menu}
        menuTitle={
          <SidebarTitleTile
            title={'test-menu.title'}
            icon={
              <Box display="flex" alignItems="center" justifyContent="center">
                <SalesIcon color="inherit" />
              </Box>
            }
          />
        }
      />,
    );

    expect(getByText('test-menu.title')).toBeInTheDocument();
    expect(getByText(`test-menu.menu.${menu.groups[0].items[0].key}`)).toBeInTheDocument();
  });
});
