Example of ActionModal component

```jsx harmony
import { useState } from 'react';
import { Button } from 'ui/atoms';
import { ActionModalForm } from './ActionModalForm';

const [isOpened, setOpened] = useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>
    Open modal
  </Button>
  <ActionModalForm
    title="Additional actions"
    isOpened={isOpened}
    submitText="Update selected items"
    actions={[
      { key: '0', title: 'Change city', content: <div>City content</div> },
      {
        key: '1',
        title: 'Update status',
        content: <div>Update content</div>,
      },
      {
        key: '2',
        title: 'Update price',
        content: <div>Update content</div>,
      },
      { key: '3', title: 'Option 1', content: <div>Option 1</div> },
      { key: '4', title: 'Option 2', content: <div>Option 2</div> },
      { key: '5', title: 'Option 3', content: <div>Option 3</div> },
    ]}
    onClose={() => setOpened(false)}
    onSubmit={() => alert('submit clicked')}
    initialValues={[]}
  />
</>;
```
