Upload Image field:

```jsx harmony
import { UploadImageField } from './UploadImageField';
import { Form } from 'react-final-form';
import { Grid, Button } from 'ui/atoms';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <UploadImageField name="image" />
        <UploadImageField name="errorImage" error={true} />
        <UploadImageField name="uploadedImage" value="https://www.publicdomainpictures.net/pictures/70000/velka/london-motor-museum-uk-13872284008pj.jpg"/>
      </Grid>
    </form>
    )
}} />
```
