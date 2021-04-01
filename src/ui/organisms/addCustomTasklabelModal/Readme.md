Example of AddCustomTaskModal

```jsx harmony
import { useState } from 'react';
import { Button } from 'ui/atoms';
import { LabelProperty } from 'api/types';
import { AddCustomTaskModalContainer } from './AddCustomTaskModalContainer';

const [isOpened, setIsOpened] = useState(false);

<>
  <Button onClick={() => setIsOpened(true)}>Open Modal</Button>
  <AddCustomTaskModalContainer
    isOpened={isOpened}
    onClose={() => setIsOpened(false)}
    property={LabelProperty.SpecialTags}
    title={'custom_task_modal.title'}
    labelId={'custom_task_modal.label'}
  />
</>
```