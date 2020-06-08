Example of SimpleSearch component:

```jsx harmony
import { SimpleSearch, Box } from "ui/molecules";
const [value, setValue] = React.useState('');

<>
  <SimpleSearch onChange={(v)=>setValue(v.currentTarget.value)} value={value}/>
</>
```