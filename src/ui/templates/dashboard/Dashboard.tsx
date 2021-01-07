import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { IconButton, Badge, Sidebar } from 'ui/atoms';
import { TopBar } from 'ui/molecules';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { TasksIcon } from 'ui/atoms/icons/tasks/TasksIcon';
import { GraphArrowIcon } from 'ui/atoms/icons/graphArrow/GraphArrowIcon';
import { FolderIcon } from 'ui/atoms/icons/folder/FolderIcon';
import { SettingsIcon } from 'ui/atoms/icons/settings/SettingsIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLayout } from 'context/layout';

import { DashboardProps } from './Dashboard.types';
import { useStyles } from './Dashboard.styles';
import { ShortcutsMenu } from './shortcutsMenu/ShortcutsMenu';
import { ProfileMenu } from './profileMenu/ProfileMenu';
import { NotificationMenu } from './notificationMenu/NotificationMenu';
import { AddMenu } from './addMenu/AddMenu';
import { Overlay } from './overlay/Overlay';
import { TopMenu } from './topMenu/TopMenu';
import { SearchContainer } from './search/SearchContainer';

export const Dashboard = ({ children }: DashboardProps) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const { isSidebarVisible, isHeaderVisible } = useLayout();

  const isOnTasksPage = pathname.startsWith(AppRoute.tasks);
  const isOnSettingsPage = pathname.startsWith(AppRoute.settings);
  const handleSettingsClick = () => {
    if (isOnSettingsPage) {
      push(AppRoute.home);
    } else {
      push(AppRoute.settings);
    }
  };

  const isOnDMSPage = pathname.startsWith(AppRoute.dms);
  const isOnEmailPage = pathname.startsWith(AppRoute.email);
  const isOnInsightsPage = pathname.startsWith(AppRoute.insights);
  const handleDMSClick = () => {
    if (isOnDMSPage) {
      push(AppRoute.home);
    } else {
      push(AppRoute.dms);
    }
  };

  const handleInsightsClick = () => {
    if (isOnInsightsPage) {
      push(AppRoute.home);
    } else {
      push(AppRoute.insights);
    }
  };

  const handleNavigate = (path: string) => () => {
    push(path);
  };

  return (
    <>
      {isHeaderVisible && (
        <TopBar>
          <SearchContainer />
          <nav className={classes.menu}>
            <TopMenu />
          </nav>
          <nav className={classes.actions}>
            <NotificationMenu />
            <ProfileMenu />
            <AddMenu />
          </nav>
        </TopBar>
      )}
      <Overlay />
      <section className={classes.container}>
        <aside className={classes.content}>{children}</aside>
        {isSidebarVisible && (
          <Sidebar>
            <ShortcutsMenu />
            <IconButton
              variant="rounded"
              size="small"
              aria-label="mail"
              onClick={handleNavigate(AppRoute.email)}
              selected={isOnEmailPage}
            >
              <Badge badgeContent={2} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleNavigate(AppRoute.calendar)}
              variant="rounded"
              size="small"
              aria-label="calendar"
            >
              <CalendarIcon />
            </IconButton>
            <IconButton
              variant="rounded"
              size="small"
              aria-label="tasks"
              onClick={handleNavigate(AppRoute.tasks)}
              selected={isOnTasksPage}
            >
              <TasksIcon />
            </IconButton>
            <IconButton
              variant="rounded"
              size="small"
              aria-label="stats"
              onClick={handleInsightsClick}
              selected={isOnInsightsPage}
            >
              <Badge badgeContent={4} color="secondary">
                <GraphArrowIcon />
              </Badge>
            </IconButton>
            <IconButton variant="rounded" size="small" aria-label="dms" onClick={handleDMSClick} selected={isOnDMSPage}>
              <FolderIcon />
            </IconButton>
            <Sidebar.Divider />
            <IconButton
              variant="rounded"
              size="small"
              aria-label="settings"
              onClick={handleSettingsClick}
              selected={isOnSettingsPage}
              key={pathname}
            >
              <SettingsIcon />
            </IconButton>
          </Sidebar>
        )}
      </section>
    </>
  );
};
