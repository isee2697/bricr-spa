import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { Menu, Box, Typography, Badge, IconButton, Emoji } from 'ui/atoms';
import { BellIcon } from 'ui/atoms/icons/bell/BellIcon';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';

import { useStyles } from './NotificationMenu.styles';

export const NotificationMenu = () => {
  const [isOpened, setOpened] = useState(false);
  const setOverlay = useOverlayDispatch();
  const menuRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    setOverlay(isOpened);
  }, [isOpened, setOverlay]);

  return (
    <>
      <IconButton
        size="small"
        variant="roundedContained"
        onClick={() => setOpened(true)}
        onKeyDown={() => setOpened(true)}
        innerRef={menuRef}
        style={{ cursor: 'pointer' }}
        aria-controls="notifications-menu"
        aria-label="notifications"
        aria-haspopup="true"
        id="notifications-menu-button"
        className={classNames(isOpened ? classes.activeNotificationIcon : '')}
      >
        <Badge badgeContent={0} color="secondary">
          <BellIcon />
        </Badge>
      </IconButton>
      <Menu
        id="notifications-menu"
        open={isOpened}
        onClose={() => setOpened(false)}
        anchorEl={menuRef.current}
        placement="bottom-end"
        arrow
        offsetTop={3}
        role="menu"
        aria-labelledby="notifications-menu-button"
      >
        <Box className={classes.notificationsMenu}>
          <Typography variant="h3">Notifications</Typography>
          <Box className={classes.emptyNotificationsImage}>
            <Emoji className={classes.emptyNotificationsImageEmo} children="🎉" />
          </Box>
          <Box className={classes.emptyNotificationsText}>
            <p>Ta-da!</p>
            <p>You’re up to date</p>
          </Box>
        </Box>
      </Menu>
    </>
  );
};
