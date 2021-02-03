import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Box, Typography, Button } from 'ui/atoms';
import { CheckIcon } from 'ui/atoms/icons';

import { useStyles } from './Settings.styles';

export const Settings = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box
        mt={4.5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.successPanel}
      >
        <Box display="flex" alignItems="center" justifyContent="center" className={classes.checkIcon}>
          <CheckIcon color="inherit" />
        </Box>
        <Box mt={1}>
          <Typography variant="h3" color="textSecondary" className={classes.fontWeightMedium}>
            {formatMessage(
              { id: 'pim_details.publication.funda.settings.published' },
              {
                date: (
                  <Typography variant="h3" color="textSecondary" className={classes.fontWeightBold}>
                    {DateTime.local().toLocaleString(DateTime.DATE_SHORT)}
                  </Typography>
                ),
              },
            )}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={5}>
          <Button color="primary" variant="contained">
            {formatMessage({ id: 'pim_details.publication.funda.settings.publish_changes' })}
          </Button>
          <Box ml={2} />
          <Button color="primary" variant="outlined">
            {formatMessage({ id: 'pim_details.publication.funda.settings.sign_out' })}
          </Button>
        </Box>
      </Box>
    </>
  );
};
