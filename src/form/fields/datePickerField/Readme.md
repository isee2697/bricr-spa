DatePicker field:

```jsx harmony
import { DatePickerField } from './DatePickerField';
import { Form } from 'react-final-form';
import { Grid } from 'ui/atoms';

let val = new Date();

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <DatePickerField label="Date picker" name="field" value={val} onChange={(e) => {val = e}} />
      </Grid>
      <Grid item xs={4}>
        <DatePickerField 
          label="Date picker" 
          name="field" 
          // value={'fake date'} 
          helperText="My date error"
          error={true}
        />
      </Grid>
      <Grid item xs={4}>
        <DatePickerField disabled label="Date picker" name="field" value={null} placeholder="Enter date" onChange={(e) => {val = e}} />
      </Grid>
    </Grid>
</form>)
}} />


```