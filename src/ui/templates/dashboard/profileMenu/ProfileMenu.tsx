import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import { UserAvatar, Avatar, Menu, Box, Typography, Link } from 'ui/atoms';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { LockIcon } from 'ui/atoms/icons/lock/LockIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';

export const ProfileMenu = () => {
  const theme = useTheme();
  const menuRef = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const { user } = useAuthState();
  const setOverlay = useOverlayDispatch();

  useEffect(() => {
    setOverlay(isOpened);
  }, [isOpened, setOverlay]);

  return (
    <>
      <UserAvatar
        onClick={() => setOpened(true)}
        onKeyDown={() => setOpened(true)}
        avatar={user?.avatar || ''}
        name={user?.firstName || ''}
        innerRef={menuRef}
        style={{ cursor: 'pointer' }}
        tabIndex={0}
        aria-controls="profile-menu"
        aria-label="profile"
        aria-haspopup="true"
        id="profile-button"
      />

      <Menu
        id="profile-menu"
        open={isOpened}
        onClose={() => setOpened(false)}
        anchorEl={menuRef.current}
        placement="bottom-end"
        arrow
        offsetTop={3}
        role="menu"
        aria-labelledby="profile-button"
      >
        <Box display="flex" mb={2}>
          <Typography variant="h3">Profile menu</Typography>
        </Box>
        <Link component={RouterLink} to="/" color="inherit" role="menuitem">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
              <Box color={theme.palette.green.main}>
                <UserIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">Profile</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to={AppRoute.logout} color="inherit" role="menuitem">
          <Box display="flex" alignItems="center">
            <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
              <Box color={theme.palette.red.main}>
                <LockIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">Logout</Typography>
            </Box>
          </Box>
        </Link>
      </Menu>
    </>
  );
};