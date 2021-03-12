import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch, Link as RouterLink, useLocation, useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core';
import { useParams } from 'react-router';

import { useLocale } from 'hooks';
import { Box, Grid, Link, Scrollable, SidebarHideButton, SideMenuItem, Slide, Typography } from 'ui/atoms';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DocIcon,
  FilesIcon,
  KeyboardBackspaceIcon,
  LockIcon,
  TriggerIcon,
} from 'ui/atoms/icons';
import { SideMenu } from 'ui/molecules';

import { useStyles } from './SideBarMenu.styles';
import { DmsDetailsSideBarMenuProps } from './SideBarMenu.types';

export const DmsDetailsSidebarMenu = ({ onHide, isVisible, configureItems }: DmsDetailsSideBarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const { type } = useParams();
  const urlPath = url.split('/');
  urlPath.pop();
  const parentUrl = urlPath.join('/');
  const [width, setWidth] = useState<number | string>('auto');
  const ref = useRef<HTMLDivElement>(null);
  const { spacing } = useTheme();
  const { push } = useHistory();

  const classes = useStyles({
    width,
  });

  const handleWindowResize = () => {
    setWidth('auto');
  };

  window.addEventListener('resize', handleWindowResize);

  const menu = [
    {
      key: 'general',
      icon: <DocIcon color="inherit" />,
      title: formatMessage({ id: 'dms.templates.general' }),
    },
    {
      key: 'configureSettings',
      icon: <TriggerIcon color="inherit" />,
      title: formatMessage({ id: `dms.templates.configure_${type.toLowerCase()}` }),
      configureItems,
    },
    {
      key: 'security',
      icon: <LockIcon color="inherit" />,
      title: formatMessage({ id: 'dms.templates.security' }),
    },
    {
      key: 'compose',
      icon: <FilesIcon color="inherit" />,
      title: formatMessage({ id: 'dms.templates.compose' }),
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (width !== ref?.current?.clientWidth) {
        setWidth(ref?.current?.clientWidth ?? 'auto');
      }
    }, 10);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearTimeout(timeout);
    };
  }, [ref, width, setWidth]);

  const itemSelected = (key: string) => pathname.startsWith(`${url}/${key}`);

  return (
    <Slide unmountOnExit mountOnEnter in={isVisible} direction="right">
      <Grid item xs={12} md={3} lg={2}>
        <div className={classes.root}>
          <div className={classes.hideButton} onClick={onHide}>
            <SidebarHideButton />
          </div>
          <div className={classes.menuWrapper}>
            <Box width="100%" minHeight={48} mb={2}>
              <Link component={RouterLink} to={parentUrl}>
                <Box display="flex" alignItems="center" justifyContent="center" my={2} width="100%">
                  <KeyboardBackspaceIcon />
                  <Box ml={2}>
                    <Typography variant="h4">{formatMessage({ id: `dms.menu.back_to_list` })}</Typography>
                  </Box>
                </Box>
              </Link>
            </Box>

            <Scrollable width="100%" height={`calc(100vh - ${spacing(33)}px`}>
              <SideMenu disablePadding>
                {menu.map(menuItem => (
                  <>
                    <SideMenuItem
                      icon={menuItem.icon}
                      title={menuItem.title}
                      selected={itemSelected(menuItem.key)}
                      className={classes.sideMenuItem}
                      onClick={() => push(`${url}/${menuItem.key}`)}
                      rightIcon={
                        menuItem.configureItems &&
                        (pathname.endsWith(menuItem.key) ? <ArrowUpIcon /> : <ArrowDownIcon />)
                      }
                    />
                    {menuItem.configureItems && pathname.endsWith(menuItem.key) && (
                      <Box ml={2}>{menuItem.configureItems}</Box>
                    )}
                  </>
                ))}
              </SideMenu>
            </Scrollable>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
