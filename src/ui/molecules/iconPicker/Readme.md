Example of Icon Picker component

```jsx harmony
import { useState } from 'react';
import { IconPicker } from "./IconPicker";
import { Form } from 'react-final-form';
import { SubmitButton } from 'ui/molecules';
import { Grid, Box, IconButton } from "ui/atoms";
import {
  AddIcon,
  BellIcon,
  BuildingIcon,
  DocIcon,
  EditIcon,
  FilesIcon,
  FilterIcon,
  GraphArrowIcon,
  HomeIcon,
  LinkIcon,
  MailIcon,
  PinIcon,
  SquareIcon,
  TasksIcon,
} from 'ui/atoms/icons';

const [selectedIcon, setSelectedIcon] = useState(null);

const icons = [
  {
    icon: <AddIcon color="inherit" />,
    name: 'add',
  },
  {
    icon: <BellIcon color="inherit" />,
    name: 'bell',
  },
  {
    icon: <BuildingIcon color="inherit" />,
    name: 'building',
  },
  {
    icon: <DocIcon color="inherit" />,
    name: 'doc',
  },
  {
    icon: <FilesIcon color="inherit" />,
    name: 'files',
  },
  {
    icon: <GraphArrowIcon color="inherit" />,
    name: 'graph-arrow',
  },
  {
    icon: <HomeIcon color="inherit" />,
    name: 'home',
  },
  {
    icon: <LinkIcon color="inherit" />,
    name: 'link',
  },
  {
    icon: <MailIcon color="inherit" />,
    name: 'mail',
  },
  {
    icon: <PinIcon color="inherit" />,
    name: 'pin',
  },
  {
    icon: <TasksIcon color="inherit" />,
    name: 'tasks',
  },
  {
    icon: <FilterIcon color="inherit" />,
    name: 'filter',
  },
  {
    icon: <EditIcon color="inherit" />,
    name: 'edit',
  },
  {
    icon: <SquareIcon color="inherit" />,
    name: 'square',
  },
];

<Grid container>
  <Grid item xs={4}>
    <Box mb={2}>
      Select icon from the list:
    </Box>
    <Form onSubmit={(values) => setSelectedIcon(values.icon)}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <IconPicker name="icon" iconList={icons} />
          <SubmitButton
            type="submit"
            startIcon={<AddIcon color="inherit" />}
            size="large"
            color="primary"
            variant="contained"
          >
            Submit
          </SubmitButton>
        </form>
      )}
    </Form>
  </Grid>
  {selectedIcon && (
    <Grid item xs={12}>
      <Box mt={3}>
        Selected icon:<br/>
        <Box mt={1}>
          <IconButton size="small" variant="roundedContained" onClick={()=>{}}>
            {icons.find(icon => icon.name === selectedIcon).icon}
          </IconButton>
        </Box>
      </Box>
    </Grid>
  )}
</Grid>
```
