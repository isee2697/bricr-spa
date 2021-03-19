import React from 'react';

import { fireEvent, render } from 'tests';
import { palette } from 'theme/palette';
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
        menuTitleIcon={<HomeIcon />}
      />,
    );

    expect(getByText('test-menu.title')).toBeInTheDocument();
    expect(getByText(`test-menu.menu.${menu.groups[0].items[0].key}`)).toBeInTheDocument();
  });

  test('hidden when isVisible false', () => {
    const { queryByText } = render(
      <SidebarMenu
        isVisible={false}
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

    expect(queryByText('test-menu.title')).toBeNull();
  });

  test('hide on click hide button', () => {
    const onHide = jest.fn();
    const { container } = render(
      <SidebarMenu isVisible onHide={onHide} translationPrefix="test-menu.menu" menu={menu} />,
    );

    expect(container.querySelector('svg')).toBeInTheDocument();
    fireEvent.click(container.querySelector('svg')!);

    expect(onHide).toBeCalled();
  });

  test('render children', () => {
    const { queryByText } = render(
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
      >
        <div>Test children</div>
      </SidebarMenu>,
    );

    expect(queryByText('Test children')).toBeInTheDocument();
  });

  test('correct banner color', () => {
    const { container } = render(
      <SidebarMenu
        isVisible
        hasHideButton={false}
        bannerColor={palette.red.main}
        translationPrefix="test-menu.menu"
        menu={menu}
        menuTitle={'test-menu.title'}
        menuTitleIcon={<HomeIcon />}
        menuSubTitle={'test-menu.subtitle'}
      />,
    );

    expect(container.querySelector('svg')?.parentElement).toHaveStyle(`color: ${palette.red.main}`);
  });
});
