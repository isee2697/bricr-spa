Example of Select component

```jsx harmony
import { Select } from './Select';

import { Grid, MenuItem } from 'ui/atoms';

const options = ['option 1', 'option 2'].map(key => (
  <MenuItem key={key} value={key}>
    {key}
  </MenuItem>
));

<Grid container spacing={3}>
  <Grid item xs={4}>
    <Select name="field1" label="Label">
      {options}
    </Select>
  </Grid>
  <Grid item xs={4}>
    <Select name="field2">
      {options}
    </Select>
  </Grid>
</Grid>;
```
