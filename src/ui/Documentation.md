### Colors:
```jsx harmony
import { Box, Grid } from 'ui/atoms';
import { palette } from "theme/palette";

<>
	<Grid container spacing={3}>
		<Grid item xs={6} lg={2}>
      <Box pb={7} pt={7} bgcolor={palette.primary.main} color={palette.white.main} textAlign="center">
        Primary
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box pb={7} pt={7} style={{background: palette.gradientPrimary.main}} color={palette.white.main} textAlign="center">
        Gradient Primary
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box pb={7} pt={7} bgcolor={palette.secondary.main} color={palette.white.main} textAlign="center">
        Secondary
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box pb={7} pt={7} bgcolor={palette.black.main} color={palette.white.main} textAlign="center">
        Black
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box pb={7} pt={7} bgcolor={palette.gray.main} color={palette.white.main} textAlign="center">
        Gray
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box pb={7} pt={7} bgcolor={palette.gray.light} color={palette.black.main} textAlign="center">
        Gray light
      </Box>
    </Grid>
	</Grid>
	<Grid container spacing={3}>
    <Grid item xs={6} lg={2}>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.red.main} color={palette.white.main} textAlign="center">
        Red
      </Box>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.red.light} color={palette.black.main} textAlign="center">
        Red light
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.orange.main} color={palette.white.main} textAlign="center">
        Orange
      </Box>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.orange.light} color={palette.black.main} textAlign="center">
        Orange light
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.yellow.main} color={palette.white.main} textAlign="center">
        Yellow
      </Box>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.yellow.light} color={palette.black.main} textAlign="center">
        Yellow light
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.green.main} color={palette.white.main} textAlign="center">
        Green
      </Box>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.green.light} color={palette.black.main} textAlign="center">
        Green light
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.blue.main} color={palette.white.main} textAlign="center">
        Blue
      </Box>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.blue.light} color={palette.black.main} textAlign="center">
        Blue light
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.purple.main} color={palette.white.main} textAlign="center">
        Purple
      </Box>
      <Box mb={2} pb={7} pt={7} bgcolor={palette.purple.light} color={palette.black.main} textAlign="center">
        Purple light
      </Box>
    </Grid>
  </Grid>
</>
```

### Shadows:
```jsx harmony
import { Grid, Box } from 'ui/atoms';

<Grid container spacing={3}>
  <Grid item xs={6} lg={3}>
    <Box boxShadow={1} pt={12} pb={12} textAlign="center">
      box-shadow #1
    </Box>
  </Grid>
  <Grid item xs={6} lg={3}>
    <Box boxShadow={2} pt={12} pb={12} textAlign="center">
      box-shadow #2
    </Box>
  </Grid>
  <Grid item xs={6} lg={3}>
    <Box boxShadow={3} pt={12} pb={12} textAlign="center">
      box-shadow #3
    </Box>
  </Grid>
</Grid>
```

### Typography:

```jsx harmony
import { Typography, Box } from 'ui/atoms';
import { fontWeight } from 'theme/typography';

<>
  <Typography variant="h1">
    <Box fontWeight={fontWeight.bold} mb={1}>
      h1. Heading - bold
    </Box>
    <Box fontWeight={fontWeight.semibold} mb={1}>
      h1. Heading - semibold
    </Box>
    <Box fontWeight={fontWeight.medium} mb={1}>
      h1. Heading - medium
    </Box>
    h1. Heading - regular
  </Typography>
  <br/>
  <br/>
  <Typography variant="h2">
    <Box fontWeight={fontWeight.bold} mb={1}>
      h2. Heading - bold
    </Box>
    <Box fontWeight={fontWeight.semibold} mb={1}>
      h2. Heading - semibold
    </Box>
    <Box fontWeight={fontWeight.medium} mb={1}>
      h2. Heading - medium
    </Box>
    h2. Heading - regular
  </Typography>
  <br/>
  <br/>
  <Typography variant="h3">
    <Box fontWeight={fontWeight.bold} mb={1}>
      h3. Heading - bold
    </Box>
    <Box fontWeight={fontWeight.semibold} mb={1}>
      h3. Heading - semibold
    </Box>
    <Box fontWeight={fontWeight.medium} mb={1}>
      h3. Heading - medium
    </Box>
    h3. Heading - regular
  </Typography>
  <br/>
  <br/>
  <Typography variant="h4">
    <Box fontWeight={fontWeight.bold} mb={1}>
      h4. Heading - bold
    </Box>
    <Box fontWeight={fontWeight.semibold} mb={1}>
      h4. Heading - semibold
    </Box>
    <Box fontWeight={fontWeight.medium} mb={1}>
      h4. Heading - medium
    </Box>
    h4. Heading - regular
  </Typography>
  <br/>
  <br/>
  <Typography variant="h5">
    <Box fontWeight={fontWeight.bold} mb={1}>
      h5. Heading - bold
    </Box>
    <Box fontWeight={fontWeight.semibold} mb={1}>
      h5. Heading - semibold
    </Box>
    <Box fontWeight={fontWeight.medium} mb={1}>
      h5. Heading - medium
    </Box>
    h5. Heading - regular
  </Typography>
  <br/>
  <br/>
  <Typography variant="h6">
    <Box fontWeight={fontWeight.bold} mb={1}>
      h6. Heading - bold
    </Box>
    <Box fontWeight={fontWeight.semibold} mb={1}>
      h6. Heading - semibold
    </Box>
    <Box fontWeight={fontWeight.medium} mb={1}>
      h6. Heading - medium
    </Box>
    h6. Heading - regular
  </Typography>
  <br/>
  <br/>
  <Typography variant="subtitle1">
    <Box fontWeight={fontWeight.semibold} mb={1}>
      Paragraph:<br />
    </Box>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, corporis cumque dignissimos eligendi 
    eveniet exercitationem fugiat hic illum, impedit libero magni necessitatibus, numquam perspiciatis quia repellendus
    sit ut voluptatem. Alias aperiam architecto asperiores, consectetur dolor esse harum ipsa ipsum laborum 
    necessitatibus nesciunt officia pariatur perspiciatis repellendus tenetur ut, veniam.
  </Typography>
</>
```
### Icons:


```jsx harmony
import { AddIcon } from './atoms/icons/add/AddIcon';
import { ArrowRightIcon } from './atoms/icons/arrowRight/ArrowRightIcon';
import { ArrowUpIcon } from './atoms/icons/arrowUp/ArrowUpIcon';
import { ArrowDownIcon } from './atoms/icons/arrowDown/ArrowDownIcon';
import { BellIcon } from './atoms/icons/bell/BellIcon';
import { BuildingIcon } from './atoms/icons/building/BuildingIcon';
import { CalendarIcon } from './atoms/icons/calendar/CalendarIcon';
import { CommentIcon } from './atoms/icons/comment/CommentIcon';
import { CheckIcon } from './atoms/icons/check/CheckIcon';
import { CrmIcon } from './atoms/icons/crm/CrmIcon';
import { DashboardIcon } from './atoms/icons/dashboard/DashboardIcon';
import { DocIcon } from './atoms/icons/doc/DocIcon';
import { FilesIcon } from './atoms/icons/files/FilesIcon';
import { FolderIcon } from './atoms/icons/folder/FolderIcon';
import { GraphIcon } from './atoms/icons/graph/GraphIcon';
import { GraphArrowIcon } from './atoms/icons/graphArrow/GraphArrowIcon';
import { HelpIcon } from './atoms/icons/help/HelpIcon';
import { HideIcon } from './atoms/icons/hide/HideIcon';
import { HomeIcon } from './atoms/icons/home/HomeIcon';
import { LinkIcon } from './atoms/icons/link/LinkIcon';
import { MailIcon } from './atoms/icons/mail/MailIcon';
import { ManageIcon } from './atoms/icons/manage/ManageIcon';
import { NoteIcon } from './atoms/icons/note/NoteIcon';
import { PinIcon } from './atoms/icons/pin/PinIcon';
import { SearchIcon } from './atoms/icons/search/SearchIcon';
import { SettingsIcon } from './atoms/icons/settings/SettingsIcon';
import { ShortcutsIcon } from './atoms/icons/shortcuts/ShortcutsIcon';
import { TasksIcon } from './atoms/icons/tasks/TasksIcon';
import { UserIcon } from './atoms/icons/user/UserIcon';
import {palette} from "theme/palette";

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

<>
  <div style={wrapperStyle}>
    <AddIcon color="primary"/>
    <ArrowRightIcon color="primary"/>
    <ArrowUpIcon color="primary"/>
    <ArrowDownIcon color="primary"/>
    <BellIcon color="primary"/>
    <BuildingIcon color="primary"/>
  </div>
  <br />
  <div style={wrapperStyle}>
    <CalendarIcon color="secondary"/>
    <CheckIcon color="secondary"/>
    <CrmIcon color="secondary"/>
    <DashboardIcon color="secondary"/>
    <DocIcon color="secondary"/>
    <FilesIcon color="secondary"/>
  </div>
  <br />
  <div style={{...wrapperStyle, color:palette.green.main }}>
    <FolderIcon color="inherit"/>
    <GraphIcon color="inherit"/>
    <GraphArrowIcon color="inherit"/>
    <HelpIcon color="inherit"/>
    <HideIcon color="inherit"/>
    <HomeIcon color="inherit"/>
  </div>
  <br />
  <div style={wrapperStyle}>
    <CommentIcon color="default"/>
    <LinkIcon color="default"/>
    <MailIcon color="default"/>
    <ManageIcon color="default"/>
    <NoteIcon color="default"/>
    <PinIcon color="default"/>
  </div>
  <br />
  <div style={{...wrapperStyle, color: 'orange' }}>
    <SearchIcon color="inherit"/>
    <SettingsIcon color="inherit"/>
    <ShortcutsIcon color="inherit"/>
    <TasksIcon color="inherit"/>
    <UserIcon color="inherit"/>
    <div style={{width:24}}></div>
  </div>
</>
```