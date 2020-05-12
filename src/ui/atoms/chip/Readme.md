Basic Chip:

```jsx harmony
import { Chip } from "ui/atoms";

<Chip variant="outlined" color="primary" label="primary"/>

```

Chip sizes:

```jsx harmony
import { Chip } from "ui/atoms";

<>
  <Chip variant="outlined" color="primary" size="small" label="small"/>
  {' '}
  <Chip variant="outlined" color="primary" size="medium" label="medium" />
</>
```

Chip disabled:

```jsx harmony
import { Chip } from "ui/atoms";

<Chip  variant="outlined" color="primary" disabled label="disabled"/>

```

Colors:

```jsx harmony
import { Chip, Box } from "ui/atoms";
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();

<>
  <Chip variant="outlined" color="primary" label="primary"/>
  <br/>
  <br/>
  <Chip variant="outlined" fontcolor={theme.palette.green.main} bgcolor={theme.palette.green.light} color="secondary" label="secondary green"/>  
  <br/>
  <br/>
  <Chip variant="outlined" fontcolor={theme.palette.red.main} bgcolor={theme.palette.red.light} color="secondary" label="secondary red"/>  
  <br/>
  <br/>
</>
```
