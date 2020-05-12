Example of QuantityInput component
```jsx harmony
import { QuantityInput } from 'ui/molecules';
import { Grid } from 'ui/atoms';

const [value, setValue] = React.useState(0);

<Grid container spacing={10}>
  <Grid item xs={4}>
    <QuantityInput min={0} label="Quantity" max={10} value={value} onChange={setValue} />
  </Grid>
  <Grid item xs={4}>
    <QuantityInput min={0} label="Disabled" max={10} value={value} onChange={setValue} disabled />
  </Grid>
</Grid>
```
