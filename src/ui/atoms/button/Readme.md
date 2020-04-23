Basic button:

```jsx harmony
import { Button } from "ui/atoms";

<Button variant="contained" color="secondary">
  Button Secondary
</Button>
```

Button sizes:

```jsx harmony
import { Button } from "./Button";

<>
    <Button variant="contained" color="secondary" size="small">
      Small
    </Button>
    <br />
    <br />
    <Button variant="contained" color="secondary" size="medium">
      Medium
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

Button disabled:

```jsx harmony
import { Button } from "./Button";

<Button variant="contained" color="secondary" disabled>
  Button Secondary
</Button>
```

Colors:

```jsx harmony
import { Button } from "./Button";

<>
    <Button variant="contained" color="primary">
      primary
    </Button>
    <br />
    <br />
    <Button variant="contained" color="secondary">
      secondary
    </Button>
    <br />
    <br />
    <Button variant="contained" color="default">
      default
    </Button>
    <br />
    <br />
</>
```
