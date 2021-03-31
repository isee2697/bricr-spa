Example of AutoCalculateForm

```jsx harmony
import { Form } from 'react-final-form';
import { Box } from 'ui/atoms';
import { AutoCalculateForm } from './AutoCalculateForm';

<Form onSubmit={() => {}}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <AutoCalculateForm name="tax" label="example.tax.label" disabled={false}>
        {isCalculated => (
          <Box>Children</Box>
        )}
      </AutoCalculateForm>
    </form>
  )}
</Form>
```