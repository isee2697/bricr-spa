Example of SidebarMenu

```jsx harmony
import { SidebarMenu } from './SidebarMenu';
import { SidebarTitleTile, Box } from 'ui/atoms';
import { SalesIcon, HomeIcon } from 'ui/atoms/icons';

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

<Box style={{ height: 'calc(100vh - 64px)' }}>
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
  />
</Box>
```