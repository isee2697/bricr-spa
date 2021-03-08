Example of SidebarTiteTile
```jsx harmony
import { SidebarTitleTile } from 'ui/atoms';
import { SquareIcon } from 'ui/atoms/icons';
import { EntityType } from 'app/shared/entityType';

<>
  <SidebarTitleTile title={'Sidebar Test Title'} icon={<SquareIcon />} />
  <SidebarTitleTile title={'Sidebar Test Title'} subtitle={'Sidebar Test Subtitle'} icon={<SquareIcon />} />
  <SidebarTitleTile title={'Sidebar Test Title'} subtitle={'Sidebar Test Subtitle'} category={EntityType.Project} icon={<SquareIcon />} />
</>
```