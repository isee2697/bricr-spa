import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

import { Tabs, IconButton, Avatar, Badge, Sidebar, Menu, Box, Typography, Link as MaterialLink } from 'ui/atoms';
import { TopBar, LinkTab } from 'ui/molecules';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { CrmIcon } from 'ui/atoms/icons/crm/CrmIcon';
import { GraphIcon } from 'ui/atoms/icons/graph/GraphIcon';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { PinIcon } from 'ui/atoms/icons/pin/PinIcon';
import { BellIcon } from 'ui/atoms/icons/bell/BellIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { ShortcutsIcon } from 'ui/atoms/icons/shortcuts/ShortcutsIcon';
import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { TasksIcon } from 'ui/atoms/icons/tasks/TasksIcon';
import { GraphArrowIcon } from 'ui/atoms/icons/graphArrow/GraphArrowIcon';
import { CommentIcon } from 'ui/atoms/icons/comment/CommentIcon';
import { HelpIcon } from 'ui/atoms/icons/help/HelpIcon';
import { SettingsIcon } from 'ui/atoms/icons/settings/SettingsIcon';
import { FilesIcon } from 'ui/atoms/icons/files/FilesIcon';
import { LinkIcon } from 'ui/atoms/icons/link/LinkIcon';
import { DocIcon } from 'ui/atoms/icons/doc/DocIcon';
import { FolderIcon } from 'ui/atoms/icons/folder/FolderIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { Search } from 'ui/molecules';

import { DashboardProps } from './Dashboard.types';
import { useStyles } from './Dashboard.styles';

const menuLinks = [AppRoute.home, AppRoute.pim, AppRoute.crm, AppRoute.sales];

export const Dashboard = ({ children }: DashboardProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();
  const { isAuthorized, user } = useAuthState();
  const activeLinkIndex = menuLinks.indexOf(pathname as AppRoute);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement & null>): void => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'menu' : undefined;

  return (
    <>
      <TopBar>
        <Search
          options={[
            { title: 'Stationstraat 25, Amsterdam', type: 'Property' },
            { title: 'The Software House', type: 'Email', subline: 'Marcin Piela', date: new Date() },
            { title: 'CubicEyes', type: 'Email', subline: 'Christian van Gils', date: new Date() },
            { title: 'Amsterdam bezichtiging inpannen', type: 'Note', date: new Date() },
            { title: 'Amsterdam bezichtiging inpannen 2', type: 'Note', date: new Date() },
            { title: 'Amsterdam bezichtiging inpannen 2', type: 'Note', date: new Date() },
          ]}
        />
        <nav className={classes.menu}>
          <Tabs
            value={activeLinkIndex !== -1 ? activeLinkIndex : 0}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <LinkTab
              icon={<HomeIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.home'] })}
              to="/"
            />
            <LinkTab
              icon={<BuildingIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.pim'] })}
              to="/pim"
            />
            <LinkTab
              icon={<CrmIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.crm'] })}
              to="/crm"
            />
            <LinkTab
              icon={<GraphIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.sales'] })}
              to="/sales"
            />
          </Tabs>
        </nav>
        <nav className={classes.actions}>
          <IconButton size="small" variant="roundedContained">
            <PinIcon />
          </IconButton>
          <Badge badgeContent={4} color="secondary">
            <IconButton size="small" variant="roundedContained">
              <BellIcon />
            </IconButton>
          </Badge>
          <Link to={isAuthorized ? AppRoute.logout : AppRoute.login}>
            <Avatar className={classes.avatar} src={user?.avatar || ''} alt="avatar" variant="circle" />
          </Link>
          <IconButton size="small" aria-label="add" color="primary">
            <AddIcon color="inherit" />
          </IconButton>
        </nav>
      </TopBar>
      <section className={classes.container}>
        <aside className={classes.content}>{children}</aside>
        <Sidebar>
          <IconButton variant="rounded" size="small" aria-label="add" onClick={handleClick}>
            <ShortcutsIcon />
            <Menu
              id={id}
              open={open}
              onClose={onClose}
              anchorEl={anchorEl}
              placement="left-start"
              arrow={true}
              offsetRight={2}
            >
              <>
                <MaterialLink href="" color="inherit">
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
                </MaterialLink>
                <MaterialLink href="" color="inherit">
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
                </MaterialLink>
                <MaterialLink href="" color="inherit">
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
                </MaterialLink>
                <MaterialLink href="" color="inherit">
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
                </MaterialLink>
              </>
            </Menu>
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="add">
            <Badge badgeContent={2} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="add">
            <CalendarIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="add">
            <TasksIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="add">
            <Badge badgeContent={4} color="secondary">
              <GraphArrowIcon />
            </Badge>
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="add">
            <CommentIcon />
          </IconButton>
          <Sidebar.Divider />
          <IconButton variant="rounded" size="small" aria-label="add">
            <HelpIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="add">
            <SettingsIcon />
          </IconButton>
        </Sidebar>
      </section>
    </>
  );
};
