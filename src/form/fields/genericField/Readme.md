Generic field:

```jsx harmony
import { GenericField } from './GenericField';
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
          <GenericField
            placeholder="Placeholder"
            name="my field"
            label={<>Label</>}
            inactive={true}
            InputProps={{
                endAdornment: (<MailIcon />)
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <GenericField 
            placeholder="Placeholder"
            name="my field"
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
            placeholder="Placeholder"
            name="my field"
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
