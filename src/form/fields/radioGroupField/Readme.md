Generic field:
```jsx harmony
import { RadioGroupField } from './RadioGroupField';
import { Form } from 'react-final-form';
import { Grid, Box, TileCheckbox, Button } from 'ui/atoms';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { SeeIcon } from 'ui/atoms/icons/see/SeeIcon';
import { PinIcon } from 'ui/atoms/icons/pin/PinIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { ComplexBuildingIcon } from 'ui/atoms/icons/complexBuilding/ComplexBuildingIcon';

const checkboxes = [
  {
    title: 'Recovery',
    icon: <SeeIcon color="inherit"/>,
    value: 'recovery'
  },
  {
    title: 'Fireplace',
    icon: <MailIcon color="inherit"/>,
    value: 'fire'
  },
  {
    title: 'Underfloor',
    icon: <PinIcon color="inherit"/>,
    value: 'underfloor'
  },
  {
    title: 'Hot air',
    icon: <HomeIcon color="inherit"/>,
    value: 'hot'
  },
  {
    title: 'Wall',
    icon: <LinkIcon color="inherit"/>,
    value: 'wall'
  },
];

<Form 
  onSubmit={() => {}}
  validate={() => {}}
  render={({handleSubmit, values}) => {
    return (
      <form onSubmit={handleSubmit}>
        <RadioGroupField width={4} validate={[() => ({id: 'common.error'})]} name="radio-group" options={checkboxes} />
        <Box mt={2}>
          <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </Box>
      </form>
    )}}
/>
```