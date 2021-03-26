Example of AddSecurityDialog

```jsx harmony
import { Button } from 'ui/atoms';
import { useModalDispatch, useModalState } from 'hooks';

import { AddSecurityDialog } from './AddSecurityDialog';

const onSubmit = async () => {
  return undefined;
};

const { open } = useModalDispatch();

<>
  <Button color="primary" variant="outlined" onClick={() => open('dms-add-security')}>Open modal</Button>
  <AddSecurityDialog onSubmit={onSubmit} />
</>
```

```jsx harmony
import { Button } from 'ui/atoms';
import { useModalDispatch } from 'hooks';

import { AddSecurityDialog } from './AddSecurityDialog';

const { open } = useModalDispatch();

const onSubmit = async () => {
  return undefined;
};

<>
  <Button color="primary" variant="outlined" onClick={() => open('dms-add-security', { key: 'Security' })}>Open modal</Button>
  <AddSecurityDialog onSubmit={onSubmit} />
</>
```