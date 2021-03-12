Example of AddTemplateDialog

```jsx harmony
import { Button } from 'ui/atoms';
import { useModalDispatch, useModalState } from 'hooks';

import { AddTemplateDialog } from './AddTemplateDialog';

const onSubmit = async () => {
  return undefined;
};

const { open } = useModalDispatch();

<>
  <Button color="primary" variant="outlined" onClick={() => open('dms-add-template')}>Open modal</Button>
  <AddTemplateDialog onSubmit={onSubmit} />
</>
```

```jsx harmony
import { Button } from 'ui/atoms';
import { useModalDispatch } from 'hooks';

import { AddTemplateDialog } from './AddTemplateDialog';

const { open } = useModalDispatch();

const onSubmit = async () => {
  return undefined;
};

<>
  <Button color="primary" variant="outlined" onClick={() => open('dms-add-template', { name: 'Template' })}>Open modal</Button>
  <AddTemplateDialog onSubmit={onSubmit} />
</>
```