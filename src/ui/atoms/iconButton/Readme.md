Icon Button:

```jsx harmony
import { IconButton } from "./IconButton";
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import {palette} from "theme/palette";

<>
  <IconButton aria-label="add" color="primary" background="gradient">
    <AddIcon color={palette.white.main} />
  </IconButton>
  <br />
  <br />
  <IconButton aria-label="add" color="primary" background="gradient" size="small">
    <AddIcon color={palette.white.main} />
  </IconButton>
</>
```
