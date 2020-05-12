Generic field:

```jsx harmony
import { QuantityField } from './QuantityField';
import { Form } from 'react-final-form';
import { Grid, Button } from 'ui/atoms';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <QuantityField
            label="quantity.label"
            name="field1"
            min={0}
            max={10}
          />
        </Grid>
        <Grid item xs={4}>
          <QuantityField
            label="quantity.label"
            name="field2"
            min={0}
            max={10}
            validate={[() => ({id: 'common.error'})]}
          />
        </Grid>
         <Grid item xs={4}>
          <QuantityField
            label="quantity.label"
            name="field3"
            min={0}
            max={10}
            disabled
          />
        </Grid>
      </Grid>
      <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
    </form>
    )
}} />
```
