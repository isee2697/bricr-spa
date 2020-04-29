ProgressFilling icon:

```jsx harmony
import { ProgressFilling, Box, Grid } from "ui/atoms";
import { Slider } from "@material-ui/core";

const [step, setStep] = React.useState(6);

<>
  <ProgressFilling stage={step}/>
  <Box mt={3} width={200}>
    <p id="slider">Set progress stage:</p>
    <Slider
      defaultValue={step}
      valueLabelDisplay="auto"
      aria-labelledby="slider"
      step={1}
      min={0}
      max={6}
      onChange={(e, value) => setStep(value)}
    />
  </Box>
</>
