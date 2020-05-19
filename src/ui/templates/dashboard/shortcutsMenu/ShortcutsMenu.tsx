import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import { IconButton, Avatar, Menu, Box, Typography, Link, CardHeader } from 'ui/atoms';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { ShortcutsIcon } from 'ui/atoms/icons/shortcuts/ShortcutsIcon';
import { FilesIcon } from 'ui/atoms/icons/files/FilesIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';
import { DocIcon } from 'ui/atoms/icons/doc/DocIcon';
import { FolderIcon } from 'ui/atoms/icons/folder/FolderIcon';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './ShortcutsMenu.styles';

export const ShortcutsMenu = () => {
  const theme = useTheme();
  const menuRef = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const setOverlay = useOverlayDispatch();
  const classes = useStyles();
  const { formatMessage } = useLocale();

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
        <CardHeader
          className={classes.header}
          title={formatMessage({ id: 'shortcuts_menu.title' })}
          action={
            <IconButton aria-label="add" variant="roundedContained" size="small">
              <ManageIcon color="inherit" />
            </IconButton>
          }
        />
        <Link component={RouterLink} to="/" color="inherit">
          <Box className={classes.box} display="flex" alignItems="center" mb={2}>
            <Avatar size="large" variant="rounded" bgcolor={theme.palette.red.light}>
              <Box color={theme.palette.red.main}>
                <FilesIcon fontSize="large" color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.print_brochure' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box className={classes.box} display="flex" alignItems="center" mb={2}>
            <Avatar size="large" variant="rounded" bgcolor={theme.palette.purple.light}>
              <Box color={theme.palette.purple.main}>
                <LinkIcon fontSize="large" color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.nvm_offer' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box className={classes.box} display="flex" alignItems="center" mb={2}>
            <Avatar size="large" variant="rounded" bgcolor={theme.palette.green.light}>
              <Box color={theme.palette.green.main}>
                <DocIcon fontSize="large" color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.wwft_check' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box className={classes.box} display="flex" alignItems="center">
            <Avatar size="large" variant="rounded" bgcolor={theme.palette.yellow.light}>
              <Box color={theme.palette.yellow.main}>
                <FolderIcon fontSize="large" color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.invoices' })}</Typography>
            </Box>
          </Box>
        </Link>
      </Menu>
    </IconButton>
  );
};
