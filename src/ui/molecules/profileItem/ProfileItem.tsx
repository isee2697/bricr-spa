import React from 'react';

import { Avatar, Chip, Grid, Typography } from 'ui/atoms';
import { MailIcon, MenuIcon, WarningIcon } from 'ui/atoms/icons';

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
}: ProfileItemProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid onClick={() => onClick && onClick()} className={classes.avatarContainer} item>
        <Avatar className={classes.avatar} src={avatar} />
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
            <>
              <WarningIcon /> <Typography className={classes.info}>{phone}</Typography>
            </>
          )}
          {email && (
            <>
              <MailIcon /> <Typography className={classes.info}>{email}</Typography>
            </>
          )}
        </Grid>
        <Grid container className={classes.infoContainer}>
          {teamNames?.map(name => (
            <Chip key={name} label={name} size="small" variant="outlined" color="primary" />
          ))}
        </Grid>
        <Grid container className={classes.infoContainer}>
          {rights?.map(name => (
            <Chip key={name} className={classes.chip} label={name} size="small" />
          ))}
        </Grid>
        {notes && (
          <Grid alignItems="center" container className={classes.notesContainer}>
            <WarningIcon />
            <Typography variant="h5">{notes}</Typography>
          </Grid>
        )}
      </Grid>
      <Grid xs={1} lg="auto" className={classes.right} item>
        {button ?? <MenuIcon />}
      </Grid>
    </Grid>
  );
};
