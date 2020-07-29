Example of ColorPickerField component
```jsx harmony
import { ColorPickerField } from './ColorPickerField';
import { Form } from 'react-final-form';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit}) => {
    return (
    <form onSubmit={handleSubmit}>
       <ColorPickerField name="test" />
    </form>
    )
}} />
```