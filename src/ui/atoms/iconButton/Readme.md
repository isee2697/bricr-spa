Primary  IconButton:

```jsx harmony
import { IconButton } from "ui/atoms";
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';

<>
  <IconButton aria-label="add" color="primary">
    <AddIcon color="inherit" />
  </IconButton>
  
  {' '}

  <IconButton aria-label="add" color="primary" size="small">
    <AddIcon color="inherit" />
  </IconButton>
</>
```

Other  variants:

```jsx harmony
import { IconButton } from "ui/atoms";
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';

<>
  <IconButton aria-label="house" size="small">
    <CalendarIcon color="inherit" />
  </IconButton>

  {' '}

  <IconButton aria-label="house" color="secondary" size="small">
    <CalendarIcon color="inherit" />
  </IconButton>
</>
```

