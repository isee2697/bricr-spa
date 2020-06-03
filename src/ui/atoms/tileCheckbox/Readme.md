Custom checkbox:

```jsx harmony
import { TileCheckbox, Box, RadioGroup } from "ui/atoms";
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';

const [isSelected, setSelect] = React.useState(false);

<Box display="flex">
  <Box mr={2}>
    <TileCheckbox onClick={() => setSelect(v => !v)} isSelected={isSelected} title="Vertical">
      <HomeIcon color="inherit"/>
    </TileCheckbox>
  </Box>
  <Box mr={2}>
    <TileCheckbox onClick={() => {}} isSelected={false} isDisabled={true} title="Vertical disabled">
      <HomeIcon color="inherit"/>
    </TileCheckbox>
  </Box>
  <Box mr={2}>
    <TileCheckbox onClick={() => setSelect(v => !v)} isSelected={isSelected} title="Horizontal" orientation="horizontal">
      <HomeIcon color="inherit"/>
    </TileCheckbox>
  </Box>
  <Box mr={2}>
    <TileCheckbox onClick={() => {}} isSelected={false} isDisabled={true} title="Horizontal disabled" orientation="horizontal">
      <HomeIcon color="inherit"/>
    </TileCheckbox>
  </Box>
</Box>
```