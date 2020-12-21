import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { Card, CardContent, CardHeader, Typography, Box, IconButton, Menu, MenuItem } from 'ui/atoms';
import { MenuIcon, AddIcon, HomeIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddSignModalContainer } from '../addSignModal/AddSignModalContainer';

import { useStyles } from './Signs.styles';

export const Signs = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { open } = useModalDispatch();

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
      <Card>
        <CardHeader
          title={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.title' })}
          action={
            <Box display="flex" alignItems="center">
              <IconButton
                color="primary"
                size="small"
                variant="circle"
                onClick={() => {
                  open('add-signs');
                }}
              >
                <AddIcon />
              </IconButton>
              <Box ml={1} />
              <IconButton size="small" variant="rounded" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            </Box>
          }
        />
        <CardContent>
          <InfoSection className={classes.emptySection} emojiClassName={classes.emptySectionEmoji} emoji="🤔">
            <Typography variant="h5">
              {formatMessage({
                id: 'pim_details.summary.signs_and_keys.signs.empty_title',
              })}
            </Typography>
            <Typography variant="h5">
              {formatMessage({
                id: 'pim_details.summary.signs_and_keys.signs.empty_description',
              })}
            </Typography>
          </InfoSection>
        </CardContent>
      </Card>
      <Menu
        id="pim-summary-sign-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <MenuItem
          className={classes.menuItem}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            push(AppRoute.signboard);
            onMenuClose();
          }}
        >
          <Box display="flex" alignItems="center">
            <HomeIcon classes={{ root: classes.menuIcon }} />
            <Box ml={2}>
              <Typography variant="subtitle1">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.keys.go_to_sign_board',
                })}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
      <AddSignModalContainer onSubmit={() => {}} />
    </>
  );
};
