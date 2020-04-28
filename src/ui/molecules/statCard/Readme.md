Example of StatCard component
```jsx harmony
import { useTheme } from '@material-ui/core';

import { StatCard } from './StatCard';

const theme = useTheme();

<div style={{backgroundColor: theme.palette.gray.light, padding: 16, display: 'flex', justifyContent: 'space-between'}}>
  <StatCard value={1021391200} endAdornment="$" variant="info">
    <strong>Info</strong> with $ as end adornment
  </StatCard>

  <StatCard value={10} variant="success">
    Success example
  </StatCard>

  <StatCard value={-300} endAdornment="%" variant="warning">
    Warning with %
  </StatCard>

  <StatCard value={100} endAdornment="$" variant="error">
    Error with $
  </StatCard>
</div>

```