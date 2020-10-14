import React from 'react';

import { ProjectJourneyItemData } from '../ProjectJourney.types';
import { Avatar, Grid, Typography, Chip, PersonChip, Box } from 'ui/atoms';
import { MenuIcon, HelpIcon, MailIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './ProjectJourneyItem.styles';

export const ProjectJourneyItem = ({
  id,
  name,
  phoneNumber,
  email,
  partner,
  manager,
  role,
  image,
}: ProjectJourneyItemData) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Avatar variant="rounded" src={image} className={classes.image} />
      </Grid>
      <Grid item className={classes.info}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography className={classes.name} variant="h3">
              {name}
            </Typography>
          </Grid>
          <Grid item className={classes.rightItem}>
            <MenuIcon />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.contactInfo}>
          <Grid item>
            <Box display="flex" alignItems="center">
              <HelpIcon />
              <Typography variant="h5">{phoneNumber}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center">
              <MailIcon />
              <Typography variant="h5">{email}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item>
            {partner && (
              <PersonChip
                name={partner.name}
                image={partner.image}
                label={formatMessage({ id: 'project_details.project_journey.partner' })}
              />
            )}
          </Grid>
          <Grid item>
            {manager && (
              <PersonChip
                name={manager.name}
                image={manager.image}
                label={formatMessage({ id: 'project_details.project_journey.manager' })}
              />
            )}
          </Grid>
          <Grid className={classes.rightItem} item>
            <Chip variant="outlined" color="primary" label={role} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
