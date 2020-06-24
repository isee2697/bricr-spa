Example of Icon Picker component

```jsx harmony
import { IconPicker } from "./IconPicker";
import { Form } from 'react-final-form';
import { Grid, Box, IconButton } from "ui/atoms";
import {
  AddIcon,
  BellIcon,
  BuildingIcon,
  DocIcon,
  FilesIcon,
  FolderIcon,
  GraphArrowIcon,
  HomeIcon,
  LinkIcon,
  MailIcon,
  PinIcon,
  TasksIcon,
  FilterIcon,
  EditIcon,
  SquareIcon,
} from 'ui/atoms/icons';

const [selectedIcon, setSelectedIcon] = React.useState(null);

const icons = [
  <AddIcon color="inherit" />,
  <BellIcon color="inherit" />,
  <BuildingIcon color="inherit" />,
  <DocIcon color="inherit" />,
  <FilesIcon color="inherit" />,
  <FolderIcon color="inherit" />,
  <GraphArrowIcon color="inherit" />,
  <HomeIcon color="inherit" />,
  <LinkIcon color="inherit" />,
  <MailIcon color="inherit" />,
  <PinIcon color="inherit" />,
  <AddIcon color="inherit" />,
  <TasksIcon color="inherit" />,
  <FilesIcon color="inherit" />,
  <FolderIcon color="inherit" />,
  <FilterIcon color="inherit" />,
  <EditIcon color="inherit" />,
  <SquareIcon color="inherit" />,
  <HomeIcon color="inherit" />,
  <BuildingIcon color="inherit" />,
  <PinIcon color="inherit" />,
 ];

<Grid container>
  <Grid item xs={4}>
    <Box mb={2}>
      Select icon from the list:
    </Box>
    <Form onSubmit={() => {}}>
      <IconPicker iconList={icons} selectedIcon={(icon) => setSelectedIcon(icon)} />
    </Form>
  </Grid>
  {selectedIcon && (
    <Grid item xs={12}>
      <Box mt={3}>
        Selected icon:<br/>
        <Box mt={1}>
          <IconButton size="small" variant="roundedContained" onClick={()=>{}}>
            {selectedIcon}
          </IconButton>
        </Box>
      </Box>
    </Grid>
  )}
</Grid>
```
