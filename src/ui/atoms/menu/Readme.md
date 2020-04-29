Menu:

```jsx harmony
import { Button, Avatar, Box, Typography, Grid, Link, FormControl, MenuItem, Select, InputLabel, Menu } from "ui/atoms";
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { FilesIcon } from 'ui/atoms/icons/files/FilesIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';
import { DocIcon } from 'ui/atoms/icons/doc/DocIcon';
import { FolderIcon } from 'ui/atoms/icons/folder/FolderIcon';
import { useTheme } from '@material-ui/core';

const theme = useTheme();

const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(anchorEl ? null : event.currentTarget);
};

const onClose = () => {
  setAnchorEl(null)
};

const open = Boolean(anchorEl);
const id = open ? 'menu' : undefined;
const [placement, setPlacement] = React.useState('right-start');

const handleChange = (event) => {
  setPlacement(event.target.value);
};

let offsetRight;
let offsetLeft;
let offsetTop;
let offsetBottom;

if (placement === 'left' || placement === 'left-start' || placement === 'left-end') {
  offsetRight = 2;
  offsetLeft = 2;
} else if (placement === 'right' || placement === 'right-start' || placement === 'right-end') {
  offsetLeft = 2;
  offsetRight = 2;
} else if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
  offsetTop = 2;
  offsetBottom = 2;
} else if (placement === 'top' || placement === 'top-start' || placement === 'top-end') {
  offsetBottom = 2;
  offsetTop = 2;
}

<Box bgcolor={theme.palette.gray.light} p={2}>
  <Box display="block" mb={2}>
	<FormControl>
      <InputLabel id="placement">Placement</InputLabel>
      <Select
        labelId="placement"
        value={placement}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="bottom-end">bottom-end</MenuItem>
        <MenuItem value="bottom-start">bottom-start</MenuItem>
        <MenuItem value="bottom">bottom</MenuItem>
        <MenuItem value="left-end">left-end</MenuItem>
        <MenuItem value="left-start">left-start</MenuItem>
        <MenuItem value="left">left</MenuItem>
        <MenuItem value="right-end">right-end</MenuItem>
        <MenuItem value="right-start">right-start</MenuItem>
        <MenuItem value="right">right</MenuItem>
        <MenuItem value="top-end">top-end</MenuItem>
        <MenuItem value="top-start">top-start</MenuItem>
        <MenuItem value="top">top</MenuItem>
      </Select>
    </FormControl>
  </Box>
  <Button aria-describedby={id} variant="contained" color="secondary" aria-haspopup="true" onClick={handleClick}>
    Open Menu
  </Button>
  <Menu
    id={id}
    open={open}
    onClose={onClose}
    anchorEl={anchorEl}
    placement={placement}
    arrow={true}
    offsetTop={offsetTop}
    offsetRight={offsetRight}
    offsetLeft={offsetLeft}
    offsetBottom={offsetBottom}
  >
    <>
      <Link href="#" onClick={(e) => e.preventDefault()} color="inherit">
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
            <Box color={theme.palette.red.main}>
              <FilesIcon color="inherit"/>
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">
              Print Brochure
            </Typography>
          </Box>
        </Box>
      </Link>
      <Link href="#" onClick={(e) => e.preventDefault()} color="inherit">
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
            <Box color={theme.palette.purple.main}>
              <LinkIcon color="inherit"/>
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">
              NVM offer
            </Typography>
          </Box>
        </Box>
      </Link>
      <Link href="#" onClick={(e) => e.preventDefault()} color="inherit">
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
            <Box color={theme.palette.green.main}>
              <DocIcon color="inherit"/>
            </Box>
          </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">
                WWFT Check
              </Typography>
            </Box>
        </Box>
      </Link>
      <Link href="#" onClick={(e) => e.preventDefault()} color="inherit">
        <Box display="flex" alignItems="center">
          <Avatar variant="rounded" bgcolor={theme.palette.yellow.light}>
            <Box color={theme.palette.yellow.main}>
              <FolderIcon color="inherit"/>
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">
              Outstanding invoices for <br />
              different types of clients
            </Typography>
          </Box>
        </Box>
      </Link>
    </>
  </Menu>
</Box>
```
