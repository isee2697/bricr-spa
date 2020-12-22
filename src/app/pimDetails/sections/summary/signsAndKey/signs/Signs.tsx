import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { Card, CardContent, CardHeader, Typography, Box, IconButton, Menu, MenuItem, Grid } from 'ui/atoms';
import { MenuIcon, AddIcon, HomeIcon, DeleteIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddSignModalContainer } from '../addSignModal/AddSignModalContainer';
import { FormSubSection } from 'ui/organisms';
import { Counter } from 'ui/molecules/counter/Counter';

import { useStyles } from './Signs.styles';
import { SignsProps } from './Signs.types';

export const Signs = ({ onSubmit, signs }: SignsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { open } = useModalDispatch();

  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const [itemMenuEl, setItemMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const onItemMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setItemMenuEl(menuEl ? null : event.currentTarget);
  };

  const onItemMenuClose = () => {
    setItemMenuEl(null);
  };

  return (
    <>
      <Card>
        <CardHeader
          title={
            <Box display="flex" alignItems="center">
              <Typography variant="h2">
                {formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.title' })}
              </Typography>
              <Counter count={signs.length} hasMarginLeft />
            </Box>
          }
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
          {signs.length === 0 && (
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
          )}
          {signs.map(sign => (
            <FormSubSection title={sign.key} initiallyOpened={false} counter={1} onOptionsClick={onItemMenuClick}>
              <Grid container></Grid>
            </FormSubSection>
          ))}
        </CardContent>
      </Card>
      <Menu
        id="pim-summary-sign-item-menu"
        open={Boolean(itemMenuEl)}
        onClose={onItemMenuClose}
        anchorEl={itemMenuEl}
        placement="bottom-end"
      >
        <MenuItem
          className={classes.menuItem}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onMenuClose();
          }}
        >
          <Box display="flex" alignItems="center">
            <HomeIcon classes={{ root: classes.menuIcon }} />
            <Box ml={2}>
              <Typography variant="subtitle1">
                {formatMessage({
                  id: 'pim_details.summary.signs_and_keys.signs.edit',
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
                  id: 'pim_details.summary.signs_and_keys.signs.delete_sign',
                })}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
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
                  id: 'pim_details.summary.signs_and_keys.signs.go_to_key_board',
                })}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
      <AddSignModalContainer onSubmit={onSubmit} />
    </>
  );
};
