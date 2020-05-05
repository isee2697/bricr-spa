Basic button:

```jsx harmony
import { Button, Box } from "ui/atoms";
import { ArrowDownIcon } from "ui/atoms/icons/arrowDown/ArrowDownIcon";
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();

<>
<Button variant="contained" color="primary">
    Button Primary
  </Button>

   {' '}

  <Button variant="contained" color="secondary">
    Button Secondary
  </Button>

  {' '}

  <Button variant="contained">
    Button default
  </Button>

  {' '}

  <Button variant="contained" color="secondary" disabled>
    Button disabled
  </Button>
  
  {' '}
  
  <Box color={theme.palette.gray.main} display="inline-block">
    <Button variant="contained" color="ghost" endIcon={<ArrowDownIcon color="primary"/>}>
      Button ghost
    </Button>
  </Box>
</>
```

Outlined button:

```jsx harmony
import { Button } from "ui/atoms";

<div>
<Button variant="outlined" color="primary">
    Button Primary
  </Button>

  {' '}

  <Button variant="outlined" color="secondary">
    Button Secondary
  </Button>

  {' '}

  <Button variant="outlined">
    Button default
  </Button>
  
  {' '}

  <Button variant="outlined" color="secondary" disabled>
    Button disabled
  </Button>
</div>
```

With icons:

```jsx harmony
import { Button } from "ui/atoms";
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';

<>
  <Button color="primary" startIcon={<HomeIcon color="inherit"/>}>
    Button Primary
  </Button>

   {' '}

  <Button variant="contained" color="secondary" endIcon={<HomeIcon color="inherit"/>}>
    Button Secondary
  </Button>
</>
```

Button sizes:

```jsx harmony
import { Button } from "./Button";

<>
    <Button variant="contained" color="primary" size="small">
      Small
    </Button>
    <br />
    <br />
    <Button variant="contained" color="secondary" size="large">
      Large
    </Button>
    <br />
    <br />
</>
```

Button full width:

```jsx harmony
import { Button } from "./Button";

<Button variant="contained" color="secondary" fullWidth={true}>
  Full width
</Button>
```