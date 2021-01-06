import { useTheme } from '@material-ui/core/styles';
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { IconButton, Avatar, Menu, Box, Typography, Link } from 'ui/atoms';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { TasksIcon } from 'ui/atoms/icons/tasks/TasksIcon';
import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { GraphIcon } from 'ui/atoms/icons';

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
      data-testid="add-menu-open"
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
          <Typography variant="h3">{formatMessage({ id: 'common.create_new' })}</Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          mb={2}
          onClick={() => open('add-new-pim')}
          style={{ cursor: 'pointer' }}
          data-testid="add-menu-property"
        >
          <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
            <Box color={theme.palette.red.main}>
              <BuildingIcon color="inherit" />
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">{formatMessage({ id: 'header.links.pim' })}</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          onClick={() => open('add-relation')}
          style={{ cursor: 'pointer' }}
          data-testid="add-menu-relation"
        >
          <Avatar variant="rounded" bgcolor={theme.palette.orange.light}>
            <Box color={theme.palette.orange.main}>
              <UserIcon color="inherit" />
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">{formatMessage({ id: 'header.links.crm' })}</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          onClick={() => open('add-sales-item')}
          style={{ cursor: 'pointer' }}
          data-testid="add-menu-sales"
        >
          <Avatar variant="rounded" bgcolor={theme.palette.orange.light}>
            <Box color={theme.palette.purple.main}>
              <GraphIcon color="inherit" />
            </Box>
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1">{formatMessage({ id: 'header.links.sales' })}</Typography>
          </Box>
        </Box>
        <Link component={RouterLink} to={AppRoute.email} color="inherit" data-testid="add-menu-email">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.yellow.light}>
              <Box color={theme.palette.yellow.main}>
                <MailIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'header.links.email' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Link component={RouterLink} to={AppRoute.calendar} color="inherit" data-testid="add-menu-appointment">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
              <Box color={theme.palette.green.main}>
                <CalendarIcon color="inherit" />
              </Box>
            </Avatar>
            <Box ml={2}>
              <Typography variant="subtitle1">{formatMessage({ id: 'header.links.appointment' })}</Typography>
            </Box>
          </Box>
        </Link>
        <Box
          onClick={() => open('create-new-task')}
          display="flex"
          style={{ cursor: 'pointer' }}
          alignItems="center"
          mb={2}
          data-testid="add-menu-task"
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
      </Menu>
    </IconButton>
  );
};
