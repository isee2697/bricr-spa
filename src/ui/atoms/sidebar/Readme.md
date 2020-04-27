Example of Sidebar component
```jsx harmony
import { Sidebar, IconButton, Badge } from 'ui/atoms';
import { ShortcutsIcon } from 'ui/atoms/icons/shortcuts/ShortcutsIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { useTheme } from '@material-ui/core';

const theme = useTheme();

<div style={{display: 'flex', background: theme.palette.gray.light}}>
  <div style={{flex: '1 1 auto', padding: 10}}> Some content </div>
  <Sidebar>
    <IconButton size="small" aria-label="add">
      <ShortcutsIcon color="inherit" />
    </IconButton>

    <IconButton size="small" aria-label="add">
      <Badge badgeContent={2} color="secondary">
        <MailIcon color="inherit" />
      </Badge>
    </IconButton>

    <Sidebar.Divider/>

    <IconButton size="small" aria-label="add">
      <ShortcutsIcon color="inherit" />
    </IconButton>

    <IconButton size="small" aria-label="add">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="inherit" />
      </Badge>
    </IconButton>
  </Sidebar>
</div>
```