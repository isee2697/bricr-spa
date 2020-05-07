Basic button:

```jsx harmony
import { Button, Box } from "ui/atoms";
import { ArrowDownIcon } from "ui/atoms/icons/arrowDown/ArrowDownIcon";
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();

<>
  <div>
    <Button variant="contained" color="primary">
       Primary
    </Button>
    
    {' '}
    
    <Button variant="contained" color="primary" disabled>
       Primary disabled
    </Button>
  
     {' '}
  
    <Button variant="contained" color="secondary">
       Secondary
    </Button>
  
    {' '}
  
    <Button variant="contained">
       Default
    </Button>
  
    {' '}
  
    <Button variant="contained" color="secondary" disabled>
       Disabled
    </Button>
    
    {' '}
    
    <Box color={theme.palette.gray.main} display="inline-block">
      <Button variant="contained" color="ghost">
         Ghost
      </Button>
    </Box>
  </div>
</>
```

Outlined button:

```jsx harmony
import { Button, Box } from "ui/atoms";
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();

<div>
  <Button variant="outlined" color="primary">
    Primary
  </Button>

  {' '}

  <Button variant="outlined" color="secondary">
    Secondary
  </Button>

  {' '}

  <Button variant="outlined">
    Default
  </Button>
  
  {' '}

  <Button variant="outlined" color="secondary" disabled>
    Disabled
  </Button>
  
  {' '}
  
  <Box color={theme.palette.gray.main} display="inline-block">
    <Button variant="outlined" color="ghost">
       Ghost
    </Button>
  </Box>
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

Loading button:

```jsx harmony
import { Button, Box, CircularProgress } from "ui/atoms";

const [isLoading, setLoading] = React.useState(false);

const fakeLoading = () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 2000);
};

<Box width={100}>
  <Button variant="contained" color="primary" onClick={fakeLoading} fullWidth={true}>
    {isLoading ? <CircularProgress color="inherit"/> : 'Search'}
  </Button>
</Box>
```