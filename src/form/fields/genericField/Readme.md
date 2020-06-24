Generic field:

```jsx harmony
import { GenericField } from './GenericField';
import { Form } from 'react-final-form';
import { Grid } from 'ui/atoms';
import { MailIcon, EuroIcon } from 'ui/atoms/icons';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <GenericField
            placeholder="Type number"
            name="my field"
            label={<>Label</>}
            type="number"
            disabled
            InputProps={{
              endAdornment: (<EuroIcon />)
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <GenericField 
            placeholder="login.username_placeholder"
            name="my field2"
            label={<>Label</>}
            helperText="My error"
            error={true}
            InputProps={{
              endAdornment: (<MailIcon />)
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <GenericField 
            placeholder="disabled"
            name="my field3"
            label={<>Label</>}
            disabled
            InputProps={{
                endAdornment: (<MailIcon />)
            }}
          />
        </Grid>
      </Grid>
    </form>
    )
}} />
```
