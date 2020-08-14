CheckboxButtonField field:

```jsx harmony
import { CheckboxButtonField } from './CheckboxButtonField';
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
          <CheckboxButtonField
            name="my field"
            option={{
              label: 'My Label',
              icon: <EuroIcon />
            }}
            label={<>Label</>}
          />
      </Grid>
    </form>
    )
}} />
```
