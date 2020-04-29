import React from 'react';
import { useLocation } from 'react-router-dom';

import { Tabs, IconButton, Badge, Sidebar } from 'ui/atoms';
import { TopBar, LinkTab } from 'ui/molecules';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { CrmIcon } from 'ui/atoms/icons/crm/CrmIcon';
import { GraphIcon } from 'ui/atoms/icons/graph/GraphIcon';
import { PinIcon } from 'ui/atoms/icons/pin/PinIcon';
import { BellIcon } from 'ui/atoms/icons/bell/BellIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { CalendarIcon } from 'ui/atoms/icons/calendar/CalendarIcon';
import { TasksIcon } from 'ui/atoms/icons/tasks/TasksIcon';
import { GraphArrowIcon } from 'ui/atoms/icons/graphArrow/GraphArrowIcon';
import { CommentIcon } from 'ui/atoms/icons/comment/CommentIcon';
import { HelpIcon } from 'ui/atoms/icons/help/HelpIcon';
import { SettingsIcon } from 'ui/atoms/icons/settings/SettingsIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { DashboardProps } from './Dashboard.types';
import { useStyles } from './Dashboard.styles';
import { ShortcutsMenu } from './shortcutsMenu/ShortcutsMenu';
import { ProfileMenu } from './profileMenu/ProfileMenu';
import { AddMenu } from './addMenu/AddMenu';
import { Search } from './search/Search';
import { Overlay } from './overlay/Overlay';

const menuLinks = [AppRoute.home, AppRoute.pim, AppRoute.crm, AppRoute.sales];

export const Dashboard = ({ children }: DashboardProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { formatMessage } = useLocale();
  const activeLinkIndex = menuLinks.indexOf(pathname as AppRoute);

  return (
    <>
      <TopBar>
        <Search />
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
          <ProfileMenu />
          <AddMenu />
        </nav>
      </TopBar>
      <Overlay />
      <section className={classes.container}>
        <aside className={classes.content}>{children}</aside>
        <Sidebar>
          <ShortcutsMenu />
          <IconButton variant="rounded" size="small" aria-label="mail">
            <Badge badgeContent={2} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="calendar">
            <CalendarIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="tasks">
            <TasksIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="stats">
            <Badge badgeContent={4} color="secondary">
              <GraphArrowIcon />
            </Badge>
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="comments">
            <CommentIcon />
          </IconButton>
          <Sidebar.Divider />
          <IconButton variant="rounded" size="small" aria-label="help">
            <HelpIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </Sidebar>
      </section>
    </>
  );
};
