Example of Map

```jsx harmony
import { Box } from 'ui/atoms';
import { Map } from './Map';

<Box display="flex">
  <Box width="50%" height={300}>
    <Map />
  </Box>
  <Box width="50%" height={300}>
    <Map isShowPin />
  </Box>
</Box>
```