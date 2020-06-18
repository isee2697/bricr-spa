Cancel button:

```jsx harmony
import { Button } from 'ui/atoms';
import { CancelButton } from 'ui/molecules';

const [isLoading, setLoading] = React.useState(false);

const fakeLoading = () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 2000);
};

<CancelButton variant="outlined" size="large" onClick={fakeLoading}>
  Cancel
</CancelButton>;
```
