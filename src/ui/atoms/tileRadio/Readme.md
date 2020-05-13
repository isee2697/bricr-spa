Custom radio:

```jsx harmony
import { TileRadio, Box, RadioGroup } from "ui/atoms";
import { SquareIcon } from 'ui/atoms/icons/square/SquareIcon';

const [isSelected, setSelect] = React.useState(false);

<Box display="flex">
  <Box mr={2}>
    <TileRadio onClick={() => setSelect(v => !v)} isSelected={isSelected} title="Square">
      <SquareIcon color="inherit"/>
    </TileRadio>
  </Box>
  <Box mr={2}>
    <TileRadio onClick={() => {}} isSelected={false} isDisabled={true} title="Square">
      <SquareIcon color="inherit"/>
    </TileRadio>
  </Box>
</Box>
```