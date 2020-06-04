Custom TileButton:

```jsx harmony
import { Box, RadioGroup, Grid } from "ui/atoms";
import { TileButton } from "ui/molecules";

<Box display="flex">
  <Box width={96} mr={2}>
    <TileButton onClick={() => {}}/>
  </Box>
  <Box width={64}>
    <TileButton onClick={() => {}} title="lorem ipsum"/>
  </Box>
</Box>
```