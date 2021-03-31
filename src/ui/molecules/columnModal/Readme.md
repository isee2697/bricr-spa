Example of ColumnModal

```jsx harmony
import { useState } from 'react';

import { Box, Button } from 'ui/atoms';
import { ColumnModal } from './ColumnModal';

const testColumns = [
  {
    value: 'name',
    hidden: false,
  },
  {
    value: 'sent',
    hidden: false,
  },
  {
    value: 'bounced',
    hidden: false,
  },
  {
    value: 'opened',
    hidden: false,
  },
  {
    value: 'event',
    hidden: false,
  },
];

const [isOpen, setIsOpen] = useState();
const [movableColumns, setMovableColumns] = useState(testColumns);

<Box>
  <Button size="small" onClick={() => setIsOpen(true)}>Open Column Modal</Button>
  <ColumnModal isOpened={isOpen} columns={testColumns} onClose={() => setIsOpen(false)} onApply={columns => setMovableColumns(columns)} />
</Box>
```