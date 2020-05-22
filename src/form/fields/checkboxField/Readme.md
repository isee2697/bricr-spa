Checkbox field:

works like a regular field but shows bigger/in a card
```jsx harmony
import { CheckboxField } from './CheckboxField';
import { Form } from 'react-final-form';
import { Grid } from 'ui/atoms';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CheckboxField
            name="my field"
            label="label"
          />
        </Grid>
        <Grid item xs={4}>
          <CheckboxField 
            name="my field3"
            label="label"
            disabled
          />
        </Grid>
      </Grid>
    </form>
    )
}} />
```
