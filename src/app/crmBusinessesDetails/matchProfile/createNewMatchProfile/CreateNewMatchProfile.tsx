import React from 'react';

import { Page } from 'ui/templates';
import { Grid, IconButton, Typography } from 'ui/atoms';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './CreateNewMatchProfile.styles';
import { Profile } from './profile/Profile';
import { Location } from './location/Location';
import { Extras } from './extras/Extras';

export const CreateNewMatchProfile = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.personal_information_match_profile.title' })}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <Profile />
        <Location />
        <Extras />
      </Page>
    </>
  );
};
