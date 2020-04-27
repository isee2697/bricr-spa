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

Other color variants:

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


Rounded variant:

```jsx harmony
import { IconButton } from "ui/atoms";
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';

<>
  <IconButton color="primary" variant="rounded" aria-label="house" size="small">
    <CalendarIcon color="inherit" />
  </IconButton>

  {' '}

  <IconButton variant="rounded" aria-label="house" size="small">
    <CalendarIcon color="inherit" />
  </IconButton>

  {' '}

  <IconButton variant="rounded" aria-label="house" color="secondary" size="small">
    <CalendarIcon color="inherit" />
  </IconButton>
</>
```
