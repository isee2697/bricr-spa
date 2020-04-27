Example of Dashboard component
```jsx harmony
import { Dashboard } from 'ui/templates';
import { useTheme } from '@material-ui/core';
const theme = useTheme();

<div style={{background: theme.palette.gray.light}}>
  <Dashboard />
</div>
```