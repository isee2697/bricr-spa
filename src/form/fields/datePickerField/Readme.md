DatePicker field:

```jsx harmony
import { DatePickerField } from './DatePickerField';
import { Form } from 'react-final-form';
import { Grid } from 'ui/atoms';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <DatePickerField label="pim_details.inside.year_of_construction" name="field" />
      </Grid>
      <Grid item xs={4}>
        <DatePickerField 
          label="pim_details.inside.year_of_construction"
          name="field" 
          helperText="My date error"
          error={true}
        />
      </Grid>
      <Grid item xs={4}>
        <DatePickerField disabled label="pim_details.inside.year_of_construction" name="field" label="pim_details.inside.year_of_construction_placeholder" />
      </Grid>
    </Grid>
</form>)
}} />


```