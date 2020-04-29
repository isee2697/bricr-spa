import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import { IconButton, Avatar, Menu, Box, Typography, Link } from 'ui/atoms';
import { ShortcutsIcon } from 'ui/atoms/icons/shortcuts/ShortcutsIcon';
import { FilesIcon } from 'ui/atoms/icons/files/FilesIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';
import { DocIcon } from 'ui/atoms/icons/doc/DocIcon';
import { FolderIcon } from 'ui/atoms/icons/folder/FolderIcon';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';

import { useStyles } from './ShortcutsMenu.styles';

export const ShortcutsMenu = () => {
  const theme = useTheme();
  const menuRef = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const setOverlay = useOverlayDispatch();
  const classes = useStyles();

  useEffect(() => {
    setOverlay(isOpened);
  }, [isOpened, setOverlay]);

  return (
    <IconButton
      className={isOpened ? classes.active : undefined}
      variant="rounded"
      size="small"
      onClick={() => setOpened(v => !v)}
      innerRef={menuRef}
      aria-controls="shortcuts-menu"
      aria-label="shortcuts"
      aria-haspopup="true"
    >
      <ShortcutsIcon />
      <Menu
        id="shortcuts-menu"
        open={isOpened}
        onClose={() => setOpened(false)}
        anchorEl={menuRef.current}
        placement="left-start"
        arrow={true}
        offsetRight={2}
        offsetTop={-2}
        role="menu"
      >
        <Box display="flex" mb={2}>
          <Typography variant="h3">Your shortcuts</Typography>
        </Box>
        <Link component={RouterLink} to="/" color="inherit">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
              <Box color={theme.palette.red.main}>
                <FilesIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">Print Brochure</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
              <Box color={theme.palette.purple.main}>
                <LinkIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">NVM offer</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
              <Box color={theme.palette.green.main}>
                <DocIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">WWFT Check</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box display="flex" alignItems="center">
            <Avatar variant="rounded" bgcolor={theme.palette.yellow.light}>
              <Box color={theme.palette.yellow.main}>
                <FolderIcon color="inherit" />
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
      </Menu>
    </IconButton>
  );
};
