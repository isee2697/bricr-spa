import { useTheme } from '@material-ui/core/styles';
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  IconButton,
  Avatar,
  Menu,
  Box,
  Typography,
  Link,
  CardHeader,
  DialogContent,
  Grid,
  Dialog,
  DialogTitle,
  Zoom,
  Snackbar,
  Alert,
  Checkbox,
} from 'ui/atoms';
import { ShortcutsIcon } from 'ui/atoms/icons/shortcuts/ShortcutsIcon';
import { FilesIcon } from 'ui/atoms/icons/files/FilesIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';
import { DocIcon } from 'ui/atoms/icons/doc/DocIcon';
import { FolderIcon } from 'ui/atoms/icons/folder/FolderIcon';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { useLocale } from 'hooks/useLocale/useLocale';
import { SettingsIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './ShortcutsMenu.styles';
import { ShortcutsItem } from './ShortcutsMenu.types';

export const ShortcutsMenu = () => {
  const theme = useTheme();
  const menuRef = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const setOverlay = useOverlayDispatch();
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [error, setError] = useState<undefined | 'warning'>(undefined);
  const [shortcuts, setShortcuts] = useState<ShortcutsItem[]>([ShortcutsItem.PrintBrochure]);

  useEffect(() => {
    setOverlay(isOpened);
  }, [isOpened, setOverlay]);

  useEffect(() => {
    if (shortcuts.length > 5) {
      setError('warning');
    }
  }, [shortcuts.length]);

  return (
    <>
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
              <IconButton
                aria-label="add"
                variant="roundedContained"
                size="small"
                onClick={() => {
                  setOpened(false);
                  setIsModalOpened(true);
                }}
              >
                <SettingsIcon color="inherit" />
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
          <Link component={RouterLink} to={`${AppRoute.pim}/nvm`} color="inherit">
            <Box className={classes.box} display="flex" alignItems="center" mb={2}>
              <Avatar size="large" variant="rounded" bgcolor={theme.palette.red.light}>
                <Box color={theme.palette.red.main}>
                  <FilesIcon fontSize="large" color="inherit" />
                </Box>
              </Avatar>
              <Box ml={2}>
                <Typography variant="subtitle1">
                  {formatMessage({ id: 'shortcuts_menu.daily_nvm_mutations' })}
                </Typography>
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
                <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.generate_contract' })}</Typography>
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
                <Typography variant="subtitle1">
                  {formatMessage({ id: 'shortcuts_menu.dashboard_allocate' })}
                </Typography>
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
                <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.wwft_check' })}</Typography>
              </Box>
            </Box>
          </Link>
        </Menu>
      </IconButton>
      <Dialog
        open={isModalOpened}
        onClose={() => {
          setOpened(true);
          setIsModalOpened(false);
        }}
        TransitionComponent={Zoom}
        fullWidth
      >
        <DialogTitle>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Typography variant="h2">
                {formatMessage({ id: 'shortcuts_menu.select_favorite_shortcuts' }, { count: 5, max: 8 })}
              </Typography>
              <Box ml={1} />
              <Typography variant="h6" color="textSecondary">
                {formatMessage({ id: 'shortcuts_menu.select_maximum_five' })}
              </Typography>
            </Box>
            <IconButton
              size="small"
              variant="roundedContained"
              selected
              onClick={() => {
                setOpened(true);
                setIsModalOpened(false);
              }}
            >
              <SettingsIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.red.light}>
                    <Box color={theme.palette.red.main}>
                      <FilesIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({ id: 'shortcuts_menu.print_brochure' })}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.PrintBrochure)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.PrintBrochure)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.PrintBrochure))
                      : setShortcuts([...shortcuts, ShortcutsItem.PrintBrochure])
                  }
                />
              </Box>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.red.light}>
                    <Box color={theme.palette.red.main}>
                      <FilesIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({ id: 'shortcuts_menu.daily_nvm_mutations' })}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.DailyNvmMutations)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.DailyNvmMutations)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.DailyNvmMutations))
                      : setShortcuts([...shortcuts, ShortcutsItem.DailyNvmMutations])
                  }
                />
              </Box>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.purple.light}>
                    <Box color={theme.palette.purple.main}>
                      <LinkIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({ id: 'shortcuts_menu.generate_contract' })}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.GenerateContract)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.GenerateContract)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.GenerateContract))
                      : setShortcuts([...shortcuts, ShortcutsItem.GenerateContract])
                  }
                />
              </Box>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.green.light}>
                    <Box color={theme.palette.green.main}>
                      <DocIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({ id: 'shortcuts_menu.dashboard_allocate' })}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.DashboardAllocate)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.DashboardAllocate)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.DashboardAllocate))
                      : setShortcuts([...shortcuts, ShortcutsItem.DashboardAllocate])
                  }
                />
              </Box>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.yellow.light}>
                    <Box color={theme.palette.yellow.main}>
                      <FolderIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.wwft_check' })}</Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.WwftCheck)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.WwftCheck)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.WwftCheck))
                      : setShortcuts([...shortcuts, ShortcutsItem.WwftCheck])
                  }
                />
              </Box>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.yellow.light}>
                    <Box color={theme.palette.yellow.main}>
                      <FolderIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.allocate' })}</Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.Allocate)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.Allocate)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.Allocate))
                      : setShortcuts([...shortcuts, ShortcutsItem.Allocate])
                  }
                />
              </Box>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.yellow.light}>
                    <Box color={theme.palette.yellow.main}>
                      <FolderIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.match' })}</Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.Match)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.Match)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.Match))
                      : setShortcuts([...shortcuts, ShortcutsItem.Match])
                  }
                />
              </Box>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.yellow.light}>
                    <Box color={theme.palette.yellow.main}>
                      <FolderIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">{formatMessage({ id: 'shortcuts_menu.dashboard_kpi' })}</Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.DashboardKpi)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.DashboardKpi)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.DashboardKpi))
                      : setShortcuts([...shortcuts, ShortcutsItem.DashboardKpi])
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Box display="flex" alignItems="center">
                  <Avatar size="large" variant="rounded" bgcolor={theme.palette.yellow.light}>
                    <Box color={theme.palette.yellow.main}>
                      <FolderIcon fontSize="large" color="inherit" />
                    </Box>
                  </Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({ id: 'shortcuts_menu.send_newsletter' })}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox
                  color="primary"
                  checked={shortcuts.includes(ShortcutsItem.SendNewsletter)}
                  onClick={() =>
                    shortcuts.includes(ShortcutsItem.SendNewsletter)
                      ? setShortcuts(shortcuts.filter(shortcut => shortcut !== ShortcutsItem.SendNewsletter))
                      : setShortcuts([...shortcuts, ShortcutsItem.SendNewsletter])
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(undefined)}
      >
        <Alert variant="filled" severity={error}>
          {formatMessage({ id: 'shortcuts_menu.max_shortcuts' })}
        </Alert>
      </Snackbar>
    </>
  );
};
