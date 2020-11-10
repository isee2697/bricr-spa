import React from 'react';
import { DateTime } from 'luxon';

import { Box, Button, Grid, IconButton, NavBreadcrumb, NavBreadcrumbs, Typography } from 'ui/atoms';
import { MenuIcon, PinIcon, ShareIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { EmailReply } from '../Email.types';

import { useStyles } from './Details.styles';
import { EmailDetailsProps } from './Details.types';
import { Subject } from './subject/Subject';
import { Description } from './description/Description';
import { Attachements } from './attachements/Attachements';
import { Replies } from './replies/Replies';
import { Destinations } from './destinations/Destinations';

export const EmailDetails = ({ email }: EmailDetailsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { pinned, date } = email;

  const replies: EmailReply[] = [
    {
      id: '0001',
      from: {
        firstName: 'John',
        lastName: 'Doe',
        image: 'http://placeimg.com/80/80/people',
      },
      date: DateTime.local(),
      description: 'Billing discussion reply',
    },
  ];

  return (
    <Grid item xs={12}>
      <Grid container className={classes.content}>
        <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
          <NavBreadcrumb title={formatMessage({ id: 'email.new_email' })} />
          <NavBreadcrumbs />
          <Box display="flex" alignItems="center">
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <PinIcon color={pinned ? 'error' : 'inherit'} className={classes.pinIcon} />
            </IconButton>
            <Box ml={6} />
            <Typography variant="h5" className={classes.fontWeightMedium}>
              {date.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
            </Typography>
            <Box ml={4} />
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <ShareIcon />
            </IconButton>
            <Box ml={3.5} />
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
        <Page withoutHeader>
          <Destinations />
          <Subject email={email} />
          <Description email={email} />
          <Attachements />
          {replies.length > 0 && (
            <>
              <Box width="100%" mt={5} mb={5} className={classes.splitter} />
              <Replies email={email} replies={replies} />
            </>
          )}
          <Box mt={8.75} width="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Button color="primary" variant="outlined">
              {formatMessage({ id: 'common.cancel' })}
            </Button>
            <Button color="primary" variant="outlined">
              {formatMessage({ id: 'email.save_as_concept' })}
            </Button>
            <Button color="primary" variant="contained">
              {formatMessage({ id: 'common.send' })}
            </Button>
          </Box>
        </Page>
      </Grid>
    </Grid>
  );
};
