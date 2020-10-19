import { useTheme } from '@material-ui/core/styles';
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { IconButton, Avatar, Menu, Box, Typography, Link } from 'ui/atoms';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { TasksIcon } from 'ui/atoms/icons/tasks/TasksIcon';
import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { NoteIcon } from 'ui/atoms/icons/note/NoteIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';

export const AddMenu = () => {
  const theme = useTheme();
  const menuRef = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const setOverlay = useOverlayDispatch();
  const { open } = useModalDispatch();
  const { formatMessage } = useLocale();

  useEffect(() => {
    setOverlay(isOpened);
  }, [isOpened, setOverlay]);

  return (
    <IconButton
      size="small"
      aria-label="add"
      aria-controls="add-menu"
      aria-haspopup="true"
      color="primary"
      onClick={() => setOpened(v => !v)}
      innerRef={menuRef}
    >
      <AddIcon color="inherit" />
      <Menu
        id="add-menu"
        open={isOpened}
        onClose={() => setOpened(false)}
        anchorEl={menuRef.current}
        placement="bottom-end"
        arrow
        offsetTop={3}
        role="menu"
      >
        <Box display="flex" mb={2}>
          <Typography variant="h3">Create new</Typography>
        </Box>

        <Box
          onClick={() => open('create-new-task')}
          display="flex"
          style={{ cursor: 'pointer' }}
          alignItems="center"
          mb={2}
        >
          <Avatar variant="rounded" bgcolor={theme.palette.blue.light}>
            <Box color={theme.palette.blue.main}>
              <TasksIcon color="inherit" />
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">{formatMessage({ id: 'common.task' })}</Typography>
          </Box>
        </Box>
        {/*</Link>*/}
        <Link component={RouterLink} to={AppRoute.newAppointment} color="inherit">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
              <Box color={theme.palette.green.main}>
                <CalendarIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'common.calendar' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.yellow.light}>
              <Box color={theme.palette.yellow.main}>
                <MailIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'common.mail' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to="/" color="inherit">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
              <Box color={theme.palette.purple.main}>
                <NoteIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'common.note' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          onClick={() => open('add-new-pim')}
          style={{ cursor: 'pointer' }}
        >
          <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
            <Box color={theme.palette.red.main}>
              <BuildingIcon color="inherit" />
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">{formatMessage({ id: 'common.property' })}</Typography>
          </Box>
        </Box>
        <Link component={RouterLink} to="/" color="inherit">
          <Box display="flex" alignItems="center">
            <Avatar variant="rounded" bgcolor={theme.palette.orange.light}>
              <Box color={theme.palette.orange.main}>
                <UserIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'common.contact' })}</Typography>
            </Box>
          </Box>
        </Link>
      </Menu>
    </IconButton>
  );
};
