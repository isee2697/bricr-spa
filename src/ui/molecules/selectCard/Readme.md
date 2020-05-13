Example of SelectCard component

```jsx harmony
import { SelectCard } from './SelectCard';
import { Grid, Avatar, Box } from 'ui/atoms';
import { NewConstructionIcon } from 'ui/atoms/icons/newConstruction/NewConstructionIcon';
import { ComplexBuildingIcon } from 'ui/atoms/icons/complexBuilding/ComplexBuildingIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
 
<Grid container justify="center" spacing={2}>
  <Grid item xs={12}>
    <SelectCard fullWidth selected withButton onClick={() => {alert('Jhellow')}} adornment={(selected) => selected && (<>Additional options <button>Test</button></>)}>
      <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
        <Box color={theme.palette.red.main}>
          <BuildingIcon color="inherit" />
        </Box>
      </Avatar>
      Property
    </SelectCard>
  </Grid>
  <Grid item xs={12}>
    <SelectCard fullWidth  withButton onClick={() => {alert('Jhellow')}} >
      <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
        <Box color={theme.palette.green.main}>
          <NewConstructionIcon color="inherit" />
        </Box>
      </Avatar>
      New construction
    </SelectCard>
  </Grid>
  <Grid item xs={12}>
    <SelectCard fullWidth  withButton onClick={() => {alert('Jhellow')}} >
      <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
        <Box color={theme.palette.purple.main}>
          <ComplexBuildingIcon color="inherit" />
        </Box>
      </Avatar>
      Property
    </SelectCard>
  </Grid>
</Grid>
```

Example of Select Card selected and small version
```jsx harmony
import { SelectCard } from './SelectCard';
import { Grid, Avatar, Box } from 'ui/atoms';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
 
<Grid container justify="center" spacing={2}>
  <Grid item xs={12}>
    <SelectCard fullWidth selected withButton onClick={() => {}} >
      <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
        <Box color={theme.palette.red.main}>
          <BuildingIcon color="inherit" />
        </Box>
      </Avatar>
      Property
    </SelectCard>
  </Grid>
  <Grid item xs={4}>
    <SelectCard  centered selected={true} onClick={() => {}} >House</SelectCard>
  </Grid>
  <Grid item xs={4}>
    <SelectCard  centered onClick={() => {}} >Apartment</SelectCard>
  </Grid>
  <Grid item xs={4}>
    <SelectCard  centered onClick={() => {}} >BOG</SelectCard>
  </Grid>
  <Grid item xs={4}>
    <SelectCard  centered onClick={() => {}} >AOG</SelectCard>
  </Grid>
  <Grid item xs={4}>
    <SelectCard  centered onClick={() => {}} >Parking lot</SelectCard>
  </Grid>
  <Grid item xs={4}>
    <SelectCard  centered onClick={() => {}} >Building plot</SelectCard>
  </Grid>
  <Grid item xs={4}>
    <SelectCard  centered onClick={() => {}} >Other</SelectCard>
  </Grid>
</Grid>
```