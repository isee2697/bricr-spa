import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch, Link as RouterLink, useLocation, useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

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

export const DmsDetailsSidebarMenu = ({ onHide, isVisible, type, configureItems }: DmsDetailsSideBarMenuProps) => {
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
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
                <SideMenuItem
                  icon={<DocIcon />}
                  title={formatMessage({ id: 'dms.templates.general' })}
                  selected={itemSelected('general')}
                  className={classes.sideMenuItem}
                  onClick={() => push(`${url}/general`)}
                />
                <>
                  <SideMenuItem
                    icon={<TriggerIcon />}
                    title={formatMessage({ id: 'dms.templates.configure_settings' }, { type })}
                    selected={itemSelected('configureSettings')}
                    className={classes.sideMenuItem}
                    onClick={() => push(`${url}/configureSettings`)}
                    rightIcon={pathname.endsWith('/configureSettings') ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  />
                  {!!pathname.endsWith('/configureSettings') && <Box ml={2}>{configureItems}</Box>}
                </>
                <SideMenuItem
                  icon={<LockIcon />}
                  title={formatMessage({ id: 'dms.templates.security' })}
                  selected={itemSelected('security')}
                  className={classes.sideMenuItem}
                  onClick={() => push(`${url}/security`)}
                />
                <>
                  <SideMenuItem
                    icon={<FilesIcon />}
                    title={formatMessage({ id: 'dms.templates.compose' })}
                    selected={itemSelected('compose')}
                    className={classes.sideMenuItem}
                    onClick={() => push(`${url}/compose`)}
                    rightIcon={pathname.endsWith('/compose') ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  />
                </>
              </SideMenu>
            </Scrollable>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
