import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { ReplyAllOutlined, ReplyOutlined } from '@material-ui/icons';

import {
  Alert,
  Badge,
  Box,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Tooltip,
  Typography,
  UserAvatar,
} from 'ui/atoms';
import { useLocale } from 'hooks';
import { BuildingIcon, CrmIcon, GraphIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './Destinations.styles';
import { DestinationsProps } from './Destinations.types';

interface LinkItemProps {
  count: number;
  tooltip: ReactNode;
  onLink: VoidFunction;
  icon: ReactNode;
}

const LinkItem = ({ count, tooltip, icon, onLink }: LinkItemProps) => {
  const classes = useStyles();

  return count ? (
    <Tooltip arrow title={<>{tooltip}</>}>
      <Badge
        max={9}
        badgeContent={count}
        invisible={count < 2}
        className={classes.badge}
        classes={{ badge: classes.badgeCount }}
      >
        <IconButton variant="rounded" size="small" aria-label="settings" onClick={onLink} selected>
          {icon}
        </IconButton>
      </Badge>
    </Tooltip>
  ) : (
    <IconButton variant="rounded" size="small" aria-label="settings" onClick={onLink}>
      {icon}
    </IconButton>
  );
};

export const Destinations = ({
  email,
  linkedPims,
  linkedRelations,
  linkedSalesOrders,
  actions,
  onLinkPims,
  onLinkRelations,
  onLinkSalesOrders,
}: DestinationsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [indicatorState, setIndicatorState] = useState<undefined | 'success' | 'error' | 'info'>(undefined);

  const { id, from, to, image } = email;
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <Box mt={2.5} mb={5} display="flex" alignItems="center" justifyContent="space-between" width="100%">
        <Box display="flex" alignItems="center">
          <UserAvatar avatar={image} name={`${from[0].name}`} />
          <Box ml={1} display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h5" className={classes.fontWeightBold}>
              {from[0].name}&nbsp;
              <Typography variant="h5" component="span">
                {`<${from[0].email}>`}
              </Typography>
            </Typography>
            <Typography variant="h6">
              {formatMessage({ id: 'common.to' })}&nbsp;
              <Typography variant="h6" component="span" className={classes.fontWeightBold}>
                {to[0].email}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton variant="rounded" size="small">
            <ReplyAllOutlined />
          </IconButton>
          <Box ml={1}>
            <IconButton variant="rounded" size="small">
              <ReplyOutlined />
            </IconButton>
          </Box>
          <Box ml={4.5}>
            <LinkItem
              count={linkedPims.length}
              tooltip={linkedPims.map(pim => (
                <Typography variant="h5">
                  {pim.street}, {pim.city}
                </Typography>
              ))}
              onLink={onLinkPims}
              icon={<BuildingIcon />}
            />
          </Box>
          <Box ml={1}>
            <LinkItem
              count={linkedRelations.length}
              tooltip={linkedRelations.map(crmItem => (
                <Typography variant="h5">
                  {crmItem.firstName} {crmItem.lastName}
                </Typography>
              ))}
              onLink={onLinkRelations}
              icon={<CrmIcon />}
            />
          </Box>
          <Box ml={1}>
            <LinkItem
              count={linkedSalesOrders.length}
              tooltip={linkedSalesOrders.map(salesLead => (
                <Typography variant="h5">{salesLead.name}</Typography>
              ))}
              onLink={onLinkSalesOrders}
              icon={<GraphIcon />}
            />
          </Box>
          <Box ml={1}>
            <IconButton variant="rounded" size="small" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        {actions.map(action => (
          <MenuItem
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Box ml={2} display="flex" width="100%" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">
                {formatMessage({
                  id: `email.action.${action.value}`,
                })}
              </Typography>
              {action.isChecked && <Checkbox color="primary" checked />}
            </Box>
          </MenuItem>
        ))}
      </Menu>
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={!!indicatorState}
        autoHideDuration={6000}
        onClose={() => setIndicatorState(undefined)}
      >
        <Alert variant="filled" severity={indicatorState}>
          {formatMessage({ id: 'common.autosaving' })}
        </Alert>
      </Snackbar>
    </>
  );
};
