Generic field:
```jsx harmony
import { CheckboxGroupField } from './CheckboxGroupField';
import { Form } from 'react-final-form';
import { Grid, Box, TileCheckbox, Button } from 'ui/atoms';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { SeeIcon } from 'ui/atoms/icons/see/SeeIcon';
import { PinIcon } from 'ui/atoms/icons/pin/PinIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';

import arrayMutators from 'final-form-arrays';

const checkboxes = [
  {
    label: 'dictionaries.kitchen_construction.DenseKitchen',
    icon: <HomeIcon color="inherit" />,
    value: 'DenseKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.EatInKitchen',
    icon: <SeeIcon color="inherit" />,
    value: 'EatInKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.HalfOpenKitchen',
    icon: <PinIcon color="inherit" />,
    value: 'HalfOpenKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.OpenKitchen',
    icon: <LinkIcon color="inherit" />,
    value: 'OpenKitchen',
  },
];

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  mutators={{...arrayMutators}}
  render={({handleSubmit, values}) => {
    return (
      <form onSubmit={handleSubmit}>
        <CheckboxGroupField validate={[() => ({id: 'common.error'})]} name="checkbox-group" options={checkboxes} />
        <CheckboxGroupField validate={[() => ({id: 'common.error'})]} name="checkbox-group-big" useBigTiles options={checkboxes} />
        <Box mt={2}>
          <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </Box>
      </form>
    )}}
/>
```