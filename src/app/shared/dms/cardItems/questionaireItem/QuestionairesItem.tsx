import React from 'react';

import { useLocale } from 'hooks';
import { CrmStatus } from 'api/types';
import { Box, Chip, Grid, PersonChip, Typography } from 'ui/atoms';
import { QuestionairesItemStepper } from '../questionaireItemStepper/QuestionairesItemStepper';
import { ListOptionsMenu } from 'ui/molecules';

import { useStyles } from './QuestionairesItem.styles';
import { QuestionairesItemProps } from './QuestionairesItem.types';

export const QuestionairesItem = ({ item: { owners, steps, type, version, status } }: QuestionairesItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles({ inactive: status === CrmStatus.ActionRequired });

  return (
    <Box p={2} className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          {owners.map((owner, index) => (
            <Box mb={1}>
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
          <QuestionairesItemStepper steps={steps} />
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'dms.questionaire.type_of_questionaire' })}
              </Typography>
              <Box mt={2} />
              <Chip variant="outlined" size="small" label={formatMessage({ id: `dms.questionaire.label.${type}` })} />
              {version && (
                <Box mt={2}>
                  <Typography variant="h5" color="textSecondary">
                    {formatMessage({ id: 'dms.questionaire.version' })} {version}
                  </Typography>
                  <Typography variant="h5" color="textSecondary">
                    {formatMessage({ id: 'dms.questionaire.created_by_bricr' })}
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid item xs={4}>
              <ListOptionsMenu />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
