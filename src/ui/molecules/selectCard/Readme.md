Example of SelectCard component

```jsx harmony
import { SelectCard } from './SelectCard';
import { Grid, Avatar, Box } from 'ui/atoms';
import { NewConstructionIcon } from 'ui/atoms/icons/newConstruction/NewConstructionIcon';
import { ComplexBuildingIcon } from 'ui/atoms/icons/complexBuilding/ComplexBuildingIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
 
  <Grid container justify="center">
    <SelectCard fullWidth  withButton onClick={() => {alert('Jhellow')}} >
      <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
        <Box color={theme.palette.red.main}>
          <BuildingIcon color="inherit" />
        </Box>
      </Avatar>
      Property
    </SelectCard>
    <SelectCard fullWidth  withButton onClick={() => {alert('Jhellow')}} >
      <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
        <Box color={theme.palette.green.main}>
          <NewConstructionIcon color="inherit" />
        </Box>
      </Avatar>
      New construction
    </SelectCard>
    <SelectCard fullWidth  withButton onClick={() => {alert('Jhellow')}} >
      <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
        <Box color={theme.palette.purple.main}>
          <ComplexBuildingIcon color="inherit" />
        </Box>
      </Avatar>
      Property
    </SelectCard>
  </Grid>;
```

Example of Select Card selected and small version
```jsx harmony
import { SelectCard } from './SelectCard';
import { Grid, Avatar, Box } from 'ui/atoms';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
 
  <Grid container justify="center">
    <SelectCard fullWidth selected withButton onClick={() => {}} >
      <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
        <Box color={theme.palette.red.main}>
          <BuildingIcon color="inherit" />
        </Box>
      </Avatar>
      Property
    </SelectCard>
    <SelectCard  centered selected={true} onClick={() => {}} >House</SelectCard>
    <SelectCard  centered onClick={() => {}} >Apartment</SelectCard>
    <SelectCard  centered onClick={() => {}} >BOG</SelectCard>
    <SelectCard  centered onClick={() => {}} >AOG</SelectCard>
    <SelectCard  centered onClick={() => {}} >Parking lot</SelectCard>
    <SelectCard  centered onClick={() => {}} >Building plot</SelectCard>
    <SelectCard  centered onClick={() => {}} >Other</SelectCard>
  </Grid>;
```