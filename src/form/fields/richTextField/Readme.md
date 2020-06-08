Example of RichTextField component
```jsx harmony
import { Form } from 'react-final-form';
import { RichTextField } from './RichTextField';

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  initialValues={{richText: [
    {
      children: [{ text: '' }],
    }
  ]}}
  render={({handleSubmit, values}) => {
    console.log(values);
    return (
      <form onSubmit={handleSubmit}>
        <RichTextField name='richText'/>
      </form>
    )}}
/>


```