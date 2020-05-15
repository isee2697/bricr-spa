Select field:

```jsx harmony
import { SelectField } from './SelectField';
import { Form } from 'react-final-form';
import { Grid, MenuItem } from 'ui/atoms';

const options = ['option 1', 'option 2'].map(key => (
  <MenuItem key={key} value={key}>
    {key}
  </MenuItem>
));

<Form
  onSubmit={() => {}}
  validate={() => {}}
  render={({ handleSubmit, invalid }) => (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <SelectField placeholder="login.username_placeholder" name="field1" label={<>Label</>}>
            {options}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <SelectField
            placeholder="login.username_placeholder"
            name="field2"
            label={<>Label</>}
            error={true}
          >
            {options}
          </SelectField>
        </Grid>
        <Grid item xs={4}>
          <SelectField placeholder="login.username_placeholder" name="field3" label={<>Label</>} disabled />
        </Grid>
      </Grid>
    </form>
  )}
/>;
```
