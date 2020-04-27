Avatar icon:

```jsx harmony
import { Avatar, Box, Grid } from "ui/atoms";
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { useTheme } from '@material-ui/core';

const theme = useTheme();

<>
  <Grid container spacing={3}>
    <Grid item>
      <Avatar variant="rounded" bgcolor={theme.palette.orange.light}>
        <Box color={theme.palette.orange.main}>
          <UserIcon color="inherit"/>
        </Box>
      </Avatar>
    </Grid>
    <Grid item>
      <Avatar variant="circle" bgcolor={theme.palette.orange.light}>
        <Box color={theme.palette.orange.main}>
          <UserIcon color="inherit"/>
        </Box>
      </Avatar>
    </Grid>
  </Grid>
</>
```

Avatar Initials:

```jsx harmony
import { Avatar, Box, Grid } from "ui/atoms";
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { useTheme } from '@material-ui/core';

const theme = useTheme();
<>
  <Grid container spacing={3}>
    <Grid item>
      <Avatar variant="rounded" bgcolor={theme.palette.orange.light}>
        <Box color={theme.palette.orange.main}>
          C
        </Box>
      </Avatar>
    </Grid>
    <Grid item>
      <Avatar variant="circle" bgcolor={theme.palette.orange.light}>
        <Box color={theme.palette.orange.main}>
          C
        </Box>
      </Avatar>
    </Grid>
  </Grid>
</>
```


Avatar image:

```jsx harmony
import { Avatar, Box, Grid } from "ui/atoms";
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const classes = useStyles();

<>
  <Grid container spacing={3}>
    <Grid item>
      <Avatar
        className={classes.avatar}
        src="https://material-ui.com/static/images/avatar/1.jpg"
        alt="avatar"
        variant="rounded"
      />
    </Grid>
    <Grid item>
      <Avatar
        className={classes.avatar}
        src="https://material-ui.com/static/images/avatar/1.jpg"
        alt="avatar"
        variant="circle"
      />
    </Grid>
  </Grid>
</>
```