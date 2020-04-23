Basic Chip:

```jsx harmony
import { Chip } from "ui/atoms";

<Chip color="secondary" label="secondary"/>

```

Chip sizes:

```jsx harmony
import { Chip } from "ui/atoms";

<>
  <Chip  color="secondary" size="small" label="small"/>
  {' '}
  <Chip  color="secondary" size="medium" label="medium" />
  {' '}
  <Chip color="secondary" size="large" label="large" />
</>
```

Chip disabled:

```jsx harmony
import { Chip } from "ui/atoms";

<Chip  color="secondary" disabled label="disabled"/>

```

Colors:

```jsx harmony
import { Chip } from "ui/atoms";

<>
  <Chip color="primary" label="Primary" label ="primary"/>
  {' '}
  <Chip color="secondary" label="secondary" />
  {' '}
  <Chip color="default" label="default"/>
  {' '}
</>
```
