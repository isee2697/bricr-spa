Example of Dropdown component

```jsx harmony
import { Grid, Dropdown } from 'ui/atoms';

const [value, setValue] = React.useState();

<Grid container spacing={3}>
  <Grid item xs={6}>
    <Dropdown
      items={[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]}
      placeholder="Select something"
      value={value}
      onChange={value => {
        setValue(value);
        console.log(value);
      }}
    />
  </Grid>
  <Grid item xs={6}>
    <Dropdown items={[]} placeholder="Select something" onChange={value => {}} disabled />
  </Grid>
</Grid>;
```
