import React from 'react';

import { useLocale } from 'hooks';
import { Box, Chip, Grid, PersonChip, Typography } from 'ui/atoms';
import { ListOptionsMenu } from 'ui/molecules';
import { SurveyItemStepper } from '../surveyItemStepper/SurveyItemStepper';

import { SurveyItemProps, SurveyItemStatus } from './SurveyItem.types';
import { useStyles } from './SurveyItem.styles';

export const SurveyItem = ({ item: { owners, steps, status } }: SurveyItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles({ inactive: status === SurveyItemStatus.ActionRequired });

  return (
    <Box p={2} className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Typography variant="h6" color="textSecondary">
            {formatMessage({ id: 'common.owners' })}
          </Typography>
          {owners.map((owner, index) => (
            <Box mt={1}>
              <PersonChip
                key={index}
                avatarVariant="square"
                name={`${owner.firstName} ${owner.lastName}`}
                image={owner.image?.url || ''}
              />
            </Box>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="textSecondary">
            {formatMessage({ id: 'common.progress' })}
          </Typography>
          <Box mt={1}>
            <SurveyItemStepper steps={steps} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" color="textSecondary">
            {formatMessage({ id: 'dms.survey.type_of_survey' })}
          </Typography>
          <Box mt={1}>
            <Grid container>
              <Grid item xs={8}>
                <Chip variant="outlined" size="small" label={formatMessage({ id: `dms.invoice.label.for_sale` })} />
              </Grid>
              <Grid item xs={4}>
                <ListOptionsMenu />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
