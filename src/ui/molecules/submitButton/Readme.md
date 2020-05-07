Submit button:

```jsx harmony
import { Button } from "ui/atoms";
import { SubmitButton } from "ui/molecules";

const [isLoading, setLoading] = React.useState(false);

const fakeLoading = () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 2000);
};

<SubmitButton spinnerColor="inherit" isLoading={isLoading} variant="contained" color="primary" onClick={fakeLoading}>
  Submit
</SubmitButton>
```