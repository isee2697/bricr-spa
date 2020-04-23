import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Tabs, IconButton, Avatar, Badge } from 'ui/atoms';
import { TopBar, LinkTab } from 'ui/organisms';
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
import { AppRoute } from 'routing/AppRoute.enum';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { DashboardProps } from './Dashboard.types';
import { useStyles } from './Dashboard.styles';

const menuLinks = [AppRoute.home, AppRoute.pim, AppRoute.crm, AppRoute.sales];

export const Dashboard = ({ children }: DashboardProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();
  const { isAuthorized } = useAuthState();
  const activeLinkIndex = menuLinks.indexOf(pathname as AppRoute);

  return (
    <>
      <TopBar>
        <nav className={classes.menu}>
          <Tabs
            value={activeLinkIndex !== -1 ? activeLinkIndex : 0}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <LinkTab
              className={classes.menuItem}
              icon={<HomeIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.home'] })}
              to="/"
            />
            <LinkTab
              className={classes.menuItem}
              icon={<BuildingIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.pim'] })}
              to="/pim"
            />
            <LinkTab
              className={classes.menuItem}
              icon={<CrmIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.crm'] })}
              to="/crm"
            />
            <LinkTab
              className={classes.menuItem}
              icon={<GraphIcon color="inherit" />}
              label={formatMessage({ id: AppMessages['header.links.sales'] })}
              to="/sales"
            />
          </Tabs>
        </nav>
        <nav className={classes.actions}>
          <Avatar className={classes.avatar} variant="rounded">
            <PinIcon />
          </Avatar>
          <Badge badgeContent={4} color="secondary">
            <Avatar className={classes.avatar} variant="rounded">
              <BellIcon />
            </Avatar>
          </Badge>
          <Link to={isAuthorized ? AppRoute.logout : AppRoute.login}>
            <Avatar
              className={classes.avatar}
              src="https://material-ui.com/static/images/avatar/1.jpg"
              alt="avatar"
              variant="circle"
            />
          </Link>
          <IconButton size="small" aria-label="add" color="primary">
            <AddIcon color="inherit" />
          </IconButton>
        </nav>
      </TopBar>
      <section className={classes.container}>
        <aside className={classes.content}>{children}</aside>
        <aside className={classes.sidebar}>
          <IconButton size="small" aria-label="add">
            <ShortcutsIcon color="inherit" />
          </IconButton>
          <IconButton size="small" aria-label="add">
            <Badge badgeContent={2} color="secondary">
              <MailIcon color="inherit" />
            </Badge>
          </IconButton>
          <IconButton size="small" aria-label="add">
            <CalendarIcon color="inherit" />
          </IconButton>
          <IconButton size="small" aria-label="add">
            <TasksIcon color="inherit" />
          </IconButton>
          <IconButton size="small" aria-label="add">
            <Badge badgeContent={4} color="secondary">
              <GraphArrowIcon color="inherit" />
            </Badge>
          </IconButton>
          <IconButton size="small" aria-label="add">
            <CommentIcon color="inherit" />
          </IconButton>
          <div className={classes.sidebarDivider} />
          <IconButton size="small" aria-label="add">
            <HelpIcon color="inherit" />
          </IconButton>
          <IconButton size="small" aria-label="add">
            <SettingsIcon color="inherit" />
          </IconButton>
        </aside>
      </section>
    </>
  );
};
