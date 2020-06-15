Upload Image field:

```jsx harmony
import { UploadImageField } from './UploadImageField';
import { Form } from 'react-final-form';
import { Grid, Button } from 'ui/atoms';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  initialValues={{image: 'https://source.unsplash.com/featured/?building', image2: undefined, image3: null}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <UploadImageField name="image" entity="Space" entityId="test"/>
        <UploadImageField name="image2" entity="Space" entityId="test"/>
        <UploadImageField name="image3" entity="Space" entityId="test"/>
      </Grid>
    </form>
    )
}} />
```

Uplaod field dense
```jsx harmony
import { UploadImageField } from './UploadImageField';
import { Form } from 'react-final-form';
import { Grid, Button } from 'ui/atoms'; 
import {UploadImageFieldTypes} from "./UploadImageField.types";

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  initialValues={{image: 'https://source.unsplash.com/featured/?building', image2: undefined, image3: null}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <UploadImageField name="image" type={UploadImageFieldTypes.DENSE} initialFileName={'fileName'}/>
      </Grid>
    </form>
    )
}} />
```