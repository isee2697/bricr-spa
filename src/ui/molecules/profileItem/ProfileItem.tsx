import React from 'react';
import classNames from 'classnames';

import { Avatar, Box, Chip, Grid, Typography } from 'ui/atoms';
import { MailIcon, MenuIcon, PhoneIcon, WarningIcon } from 'ui/atoms/icons';

import { ProfileItemProps } from './ProfileItem.types';
import { useStyles } from './ProfileItem.styles';

export const ProfileItem = ({
  avatar,
  name,
  button,
  phone,
  email,
  teamNames,
  rights,
  notes,
  functionDescription,
  onClick,
  inActive,
  hideMenuButton = false,
  classes: passedClasses,
}: ProfileItemProps) => {
  const classes = useStyles();

  return (
    <Grid className={classNames(classes.root, !!inActive && classes.inActive)} container spacing={3}>
      <Grid onClick={() => onClick && onClick()} className={classes.avatarContainer} item>
        <Avatar className={classNames(classes.avatar, passedClasses?.avatar)} src={avatar} />
        {functionDescription && (
          <Chip
            className={classes.function}
            label={functionDescription}
            size="small"
            variant="outlined"
            color="primary"
          />
        )}
      </Grid>
      <Grid onClick={() => onClick && onClick()} item className={classes.contain}>
        <Grid container>
          <Grid item>
            <Typography className={classes.title} variant="h3">
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.infoContainer} container alignItems="center">
          {phone && (
            <Box display="flex" alignItems="center" mr={4}>
              <PhoneIcon />
              <Box ml={0.5} />
              <Typography variant="h5" color="textSecondary">
                {phone}
              </Typography>
            </Box>
          )}
          {email && (
            <Box display="flex" alignItems="center">
              <MailIcon />
              <Box ml={0.5} />
              <Typography variant="h5" color="textSecondary">
                {email}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid container className={classes.infoContainer}>
          {teamNames?.map(name => (
            <Chip key={name} label={name} size="small" variant="outlined" color="primary" />
          ))}
        </Grid>
        <Grid container className={classes.infoContainer}>
          {rights?.slice(0, 4).map(name => (
            <Chip key={name} className={classes.chip} label={name} size="small" />
          ))}
          {rights && rights?.length > 4 && <>...</>}
        </Grid>
        {notes && (
          <Grid alignItems="center" container className={classes.notesContainer}>
            <WarningIcon />
            <Typography variant="h5">{notes}</Typography>
          </Grid>
        )}
      </Grid>
      {!hideMenuButton && (
        <Grid xs={1} lg="auto" className={classes.right} item>
          {button ?? <MenuIcon />}
        </Grid>
      )}
    </Grid>
  );
};
