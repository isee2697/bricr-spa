import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { Card, CardContent, CardHeader, Typography, IconButton, Box, Menu, MenuItem, Checkbox } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { AddIcon, DeleteIcon, HomeIcon, MenuIcon } from 'ui/atoms/icons';
import { ConnectKeyModalContainer } from '../connectKeyModal/ConnectKeyModalContainer';
import { PIM_SUMMARY_KEY } from 'api/mocks/signs-keys';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './Keys.styles';

export const Keys = () => {
  const { push } = useHistory();
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const [showKey, setShowKey] = useState(false);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const handleConnectKey = () => {
    setShowKey(true);
    close('connect-key');
  };

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <Card>
        <CardHeader
          title={formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.title' })}
          action={
            showKey ? (
              <IconButton size="small" variant="rounded" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            ) : (
              <IconButton color="primary" size="small" variant="circle" onClick={() => open('connect-key')}>
                <AddIcon />
              </IconButton>
            )
          }
        />
        <CardContent>
          {!showKey && (
            <InfoSection className={classes.emptySection} emojiClassName={classes.emptySectionEmoji} emoji="🤔">
              <Typography variant="h5">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.keys.empty_title',
                })}
              </Typography>
              <Typography variant="h5">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.keys.empty_description',
                })}
              </Typography>
            </InfoSection>
          )}
          {showKey && (
            <>
              <Box>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.key_number' })}
                </Typography>
                <Typography variant="h4">{PIM_SUMMARY_KEY.number}</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.to' })}
                </Typography>
                <Typography variant="h4">{PIM_SUMMARY_KEY.to}</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="h5" color="textSecondary">
                  {formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.description' })}
                </Typography>
                <Typography variant="h4">{PIM_SUMMARY_KEY.description}</Typography>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
      <Menu
        id="pim-summary-key-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <MenuItem
          className={classes.menuItem}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onMenuClose();
          }}
        >
          <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <HomeIcon classes={{ root: classes.menuIcon }} />
              <Box ml={2}>
                <Typography variant="subtitle1">
                  {formatMessage({
                    id: 'pim_details.summary.signs_and_keys.keys.lent',
                  })}
                </Typography>
              </Box>
            </Box>
            <Checkbox checked color="primary" />
          </Box>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            open('connect-key');
            onMenuClose();
          }}
        >
          <Box display="flex" alignItems="center">
            <HomeIcon classes={{ root: classes.menuIcon }} />
            <Box ml={2}>
              <Typography variant="subtitle1">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.keys.edit',
                })}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            push(AppRoute.dms);
            onMenuClose();
          }}
        >
          <Box display="flex" alignItems="center">
            <HomeIcon classes={{ root: classes.menuIcon }} />
            <Box ml={2}>
              <Typography variant="subtitle1">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.keys.create_statement',
                })}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            push(AppRoute.keyboard);
            onMenuClose();
          }}
        >
          <Box display="flex" alignItems="center">
            <HomeIcon classes={{ root: classes.menuIcon }} />
            <Box ml={2}>
              <Typography variant="subtitle1">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.keys.go_to_key_board',
                })}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onMenuClose();
          }}
        >
          <Box display="flex" alignItems="center">
            <DeleteIcon color="error" />
            <Box ml={2}>
              <Typography variant="subtitle1" color="error">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.keys.disconnect_key',
                })}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
      <ConnectKeyModalContainer onSubmit={handleConnectKey} />
    </>
  );
};
