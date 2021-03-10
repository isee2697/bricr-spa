Example of LinearProgress
```jsx harmony
import { LinearProgress, Box } from 'ui/atoms';

<>
  <LinearProgress value={90} />
  <Box mt={3} />
  <LinearProgress value={90} max={100} />
  <Box mt={3} />
  <LinearProgress value={120} max={100} />
</>
```
