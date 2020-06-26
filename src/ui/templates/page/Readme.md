Example of Page component
```jsx harmony
import { Page } from './Page';
import { Form } from 'react-final-form';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, invalid, pristine}) => {
    return (
        <Page onSave={handleSubmit} name='test' placeholder='placeholder' title='title'>test</Page>
    )}}
/>
```