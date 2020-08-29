### Colors:

```jsx harmony
import { Box, Grid } from "ui/atoms";
import { useTheme } from "@material-ui/core/styles";
const theme = useTheme();

<>
  <Grid container spacing={3}>
    <Grid item xs={6} lg={2}>
      <Box
        pb={6}
        pt={6}
        bgcolor={theme.palette.primary.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Primary <br />
        {theme.palette.primary.main}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        pb={6}
        pt={6}
        style={{ background: theme.palette.gradientPrimary.main }}
        color={theme.palette.white.main}
        display="flex"
        alignItems="center"
        height="100%"
        justifyContent="center"
      >
        Gradient Primary
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        pb={6}
        pt={6}
        bgcolor={theme.palette.secondary.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Secondary <br />
        {theme.palette.secondary.main}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        pb={6}
        pt={6}
        bgcolor={theme.palette.black.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Black <br />
        {theme.palette.black.main}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        pb={6}
        pt={6}
        bgcolor={theme.palette.gray.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Gray <br />
        {theme.palette.gray.main}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        pb={6}
        pt={6}
        bgcolor={theme.palette.gray.light}
        color={theme.palette.black.main}
        textAlign="center"
      >
        Gray light <br />
        {theme.palette.gray.light}
      </Box>
    </Grid>
  </Grid>
  <Grid container spacing={3}>
    <Grid item xs={6} lg={2}>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.red.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Red <br />
        {theme.palette.red.main}
      </Box>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.red.light}
        color={theme.palette.black.main}
        textAlign="center"
      >
        Red light <br />
        {theme.palette.red.light}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.orange.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Orange <br />
        {theme.palette.orange.main}
      </Box>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.orange.light}
        color={theme.palette.black.main}
        textAlign="center"
      >
        Orange light <br />
        {theme.palette.orange.light}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.yellow.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Yellow <br />
        {theme.palette.yellow.main}
      </Box>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.yellow.light}
        color={theme.palette.black.main}
        textAlign="center"
      >
        Yellow light <br />
        {theme.palette.yellow.light}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.green.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Green <br />
        {theme.palette.green.main}
      </Box>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.green.light}
        color={theme.palette.black.main}
        textAlign="center"
      >
        Green light <br />
        {theme.palette.green.light}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.blue.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Blue <br />
        {theme.palette.blue.main}
      </Box>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.blue.light}
        color={theme.palette.black.main}
        textAlign="center"
      >
        Blue light <br />
        {theme.palette.blue.light}
      </Box>
    </Grid>
    <Grid item xs={6} lg={2}>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.purple.main}
        color={theme.palette.white.main}
        textAlign="center"
      >
        Purple <br />
        {theme.palette.purple.main}
      </Box>
      <Box
        mb={2}
        pb={6}
        pt={6}
        bgcolor={theme.palette.purple.light}
        color={theme.palette.black.main}
        textAlign="center"
      >
        Purple light <br />
        {theme.palette.purple.light}
      </Box>
    </Grid>
  </Grid>
</>;
```

### Shadows:

```jsx harmony
import { Grid, Box } from "ui/atoms";

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
</Grid>;
```

### Typography:

```jsx harmony
import { Typography, Box } from "ui/atoms";
import { useTheme } from "@material-ui/core/styles";
const theme = useTheme();

<>
  <Typography variant="h1">
    <Box fontWeight={theme.typography.fontWeightBolder} mb={1}>
      h1. Heading - bolder
    </Box>
    <Box fontWeight={theme.typography.fontWeightBold} mb={1}>
      h1. Heading - bold
    </Box>
    <Box fontWeight={theme.typography.fontWeightMedium} mb={1}>
      h1. Heading - medium
    </Box>
    h1. Heading - regular
  </Typography>
  <br />
  <br />
  <Typography variant="h2">
    <Box fontWeight={theme.typography.fontWeightBolder} mb={1}>
      h2. Heading - bolder
    </Box>
    <Box fontWeight={theme.typography.fontWeightBold} mb={1}>
      h2. Heading - bold
    </Box>
    <Box fontWeight={theme.typography.fontWeightMedium} mb={1}>
      h2. Heading - medium
    </Box>
    h2. Heading - regular
  </Typography>
  <br />
  <br />
  <Typography variant="h3">
    <Box fontWeight={theme.typography.fontWeightBolder} mb={1}>
      h3. Heading - bolder
    </Box>
    <Box fontWeight={theme.typography.fontWeightBold} mb={1}>
      h3. Heading - bold
    </Box>
    <Box fontWeight={theme.typography.fontWeightMedium} mb={1}>
      h3. Heading - medium
    </Box>
    h3. Heading - regular
  </Typography>
  <br />
  <br />
  <Typography variant="h4">
    <Box fontWeight={theme.typography.fontWeightBolder} mb={1}>
      h4. Heading - bolder
    </Box>
    <Box fontWeight={theme.typography.fontWeightBold} mb={1}>
      h4. Heading - bold
    </Box>
    <Box fontWeight={theme.typography.fontWeightMedium} mb={1}>
      h4. Heading - medium
    </Box>
    h4. Heading - regular
  </Typography>
  <br />
  <br />
  <Typography variant="h5">
    <Box fontWeight={theme.typography.fontWeightBolder} mb={1}>
      h5. Heading - bolder
    </Box>
    <Box fontWeight={theme.typography.fontWeightBold} mb={1}>
      h5. Heading - bold
    </Box>
    <Box fontWeight={theme.typography.fontWeightMedium} mb={1}>
      h5. Heading - medium
    </Box>
    h5. Heading - regular
  </Typography>
  <br />
  <br />
  <Typography variant="h6">
    <Box fontWeight={theme.typography.fontWeightBolder} mb={1}>
      h6. Heading - bolder
    </Box>
    <Box fontWeight={theme.typography.fontWeightBold} mb={1}>
      h6. Heading - bold
    </Box>
    <Box fontWeight={theme.typography.fontWeightMedium} mb={1}>
      h6. Heading - medium
    </Box>
    h6. Heading - regular
  </Typography>
  <br />
  <br />
  <Typography variant="subtitle1">
    <Box fontWeight={theme.typography.fontWeightBold} mb={1}>
      Paragraph:
      <br />
    </Box>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, corporis
    cumque dignissimos eligendi eveniet exercitationem fugiat hic illum, impedit
    libero magni necessitatibus, numquam perspiciatis quia repellendus sit ut voluptatem.
    Alias aperiam architecto asperiores, consectetur dolor esse harum ipsa ipsum
    laborum necessitatibus nesciunt officia pariatur perspiciatis repellendus tenetur
    ut, veniam.
  </Typography>
</>;
```

### Icons:

```jsx harmony
import {
  AddIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  BellIcon,
  BuildingIcon,
  CalendarIcon,
  CommentIcon,
  CheckIcon,
  CrmIcon,
  DashboardIcon,
  DocIcon,
  FilesIcon,
  FolderIcon,
  GraphIcon,
  GraphArrowIcon,
  HelpIcon,
  HideIcon,
  HomeIcon,
  LinkIcon,
  ListIcon,
  MailIcon,
  ManageIcon,
  NcSaleIcon,
  NoteIcon,
  PinIcon,
  SearchIcon,
  SettingsIcon,
  ShortcutsIcon,
  TasksIcon,
  UserIcon,
  FilterIcon,
  SeeIcon,
  UnseeIcon,
  SiteIcon,
  MenuIcon,
  NewConstructionIcon,
  ComplexBuildingIcon,
  CloseIcon,
  SubtractIcon,
  LockIcon,
  EditIcon,
  SquareIcon,
  CheckMarkIcon,
  AogIcon,
  BogIcon,
  MutationIcon,
  SaleIcon,
  UploadIcon,
  WarningIcon,
  HistoryIcon,
  EuroIcon,
  SwimlaneIcon,
  PriorityLowIcon,
  PriorityHighIcon,
  PriorityMediumIcon,
  UserRectangleIcon,
} from "./atoms/icons";
import { useTheme } from "@material-ui/core/styles";
import { Box } from "ui/atoms";

const theme = useTheme();

const wrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

<>
  <div style={wrapperStyle}>
    <AddIcon color="primary" />
    <ArrowRightIcon color="primary" />
    <ArrowUpIcon color="primary" />
    <ArrowDownIcon color="primary" />
    <BellIcon color="primary" />
    <BuildingIcon color="primary" />
  </div>
  <br />
  <div style={wrapperStyle}>
    <CalendarIcon color="secondary" />
    <CheckIcon color="secondary" />
    <CrmIcon color="secondary" />
    <DashboardIcon color="secondary" />
    <DocIcon color="secondary" />
    <FilesIcon color="secondary" />
  </div>
  <br />
  <div style={{ ...wrapperStyle, color: theme.palette.green.main }}>
    <FolderIcon color="inherit" />
    <GraphIcon color="inherit" />
    <GraphArrowIcon color="inherit" />
    <HelpIcon color="inherit" />
    <HideIcon color="inherit" />
    <HomeIcon color="inherit" />
  </div>
  <br />
  <div style={wrapperStyle}>
    <CommentIcon color="disabled" />
    <LinkIcon color="disabled" />
    <MailIcon color="disabled" />
    <ManageIcon color="disabled" />
    <NoteIcon color="disabled" />
    <PinIcon color="disabled" />
  </div>
  <br />
  <div style={{ ...wrapperStyle, color: "orange" }}>
    <SearchIcon color="inherit" />
    <SettingsIcon color="inherit" />
    <ShortcutsIcon color="inherit" />
    <TasksIcon color="inherit" />
    <UserIcon color="inherit" />
    <FilterIcon color="inherit" />
  </div>
  <br />
  <div style={wrapperStyle}>
    <SeeIcon color="action" />
    <UnseeIcon color="action" />
    <SiteIcon color="action" />
    <MenuIcon color="action" />
    <NewConstructionIcon color="action" />
    <ComplexBuildingIcon color="action" />
  </div>
  <br />
  <div style={{ ...wrapperStyle, color: "purple" }}>
    <CloseIcon color="inherit" />
    <SubtractIcon color="inherit" />
    <LockIcon color="inherit" />
    <BuildingIcon color="inherit" />
    <EditIcon color="inherit" />
    <SquareIcon color="inherit" />
  </div>
  <br />
  <div style={wrapperStyle}>
    <CheckMarkIcon color="primary" />
    <AogIcon color="primary" />
    <BogIcon color="primary" />
    <MutationIcon color="primary" />
    <SaleIcon color="primary" />
    <UploadIcon color="primary" />
  </div>
  <br />
  <div style={wrapperStyle}>
    <WarningIcon color="secondary" />
    <ListIcon color="secondary" />
    <NcSaleIcon color="secondary" />
    <HistoryIcon color="secondary" />
    <EuroIcon color="secondary" />
    <SwimlaneIcon color="secondary" />
  </div>
  <br />
  <div style={{ ...wrapperStyle, color: theme.palette.green.main }}>
    <PriorityLowIcon color="inherit" />
    <PriorityHighIcon color="inherit" />
    <PriorityMediumIcon color="inherit" />
    <UserRectangleIcon />
    <Box width={375} />
  </div>
</>;
```
