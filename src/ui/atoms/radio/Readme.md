Primary Radio:

```jsx harmony
import { Radio, FormGroup, FormControlLabel, Box } from "ui/atoms";

const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
  checkedC: true,
});

const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
};

<>
  <Box ml={2} mb={2}>
    <FormControlLabel
      control={
        <Radio
          color="primary"
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
        />
      }
      label="Primary"
    />
  </Box>
  <Box ml={2} mb={2}>
    <FormControlLabel
      control={
        <Radio
          color="secondary"
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
        />
      }
      label="Secondary"
    />
  </Box>
  <Box ml={2} mb={2}>
    <FormControlLabel
      control={
        <Radio
          color="default"
          checked={state.checkedC}
          onChange={handleChange}
          name="checkedC"
        />
      }
      label="Default"
    />
  </Box>
  <Box ml={2} mb={2}>
    <FormControlLabel
      control={<Radio color="secondary" disabled checked />}
      label="Blocked"
    />
  </Box>
</>;
```
