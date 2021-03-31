Example of ConflictInfo component
```jsx harmony
import { useState } from 'react';

import { Box, Button } from 'ui/atoms';

import { ConfirmModal } from './ConfirmModal'; 
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';

const [isOpened, setIsOpened] = useState(false);

<Box>
    <Button size="small" onClick={() => setIsOpened(true)}>Open confirm modal</Button>
    <ConfirmModal
        emoji='😬'
        isOpened={isOpened}
        title={'Deleting'}
        onCancel={() => setIsOpened(false)}
        onConfirm={() => setIsOpened(false)}
        messageLineFirst={'Are you sure?'}
        cancelText={'No'}
        confirmText={'Yes'}
        confirmButtonType={ConfirmButtonType.ERROR}
    />
</Box>
```

```jsx harmony
import { useState } from 'react';

import { Box, Button } from 'ui/atoms';

import { ConfirmModal } from './ConfirmModal'; 
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';

const [isOpened, setIsOpened] = useState(false);

<Box>
    <Button size="small" onClick={() => setIsOpened(true)}>Open confirm modal</Button>
    <ConfirmModal
        emoji='😬'
        isOpened={isOpened}
        title={'Deleting'}
        onCancel={() => setIsOpened(false)}
        onConfirm={() => setIsOpened(false)}
        messageLineFirst={'Are you sure?'}
        messageLineSecond={'Please be sure to confirm'}
        cancelText={'No'}
        confirmText={'Yes'}
        confirmButtonType={ConfirmButtonType.INFO}
    />
</Box>
```