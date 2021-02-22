import React from 'react';
import { CheckCircleRounded, Cancel } from '@material-ui/icons';

import { useLocale } from 'hooks';
import { Grid, Button, Box, Typography } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { MergeDataStepProps } from '../MergeCrmRelation.types';
import { RelationCard } from '../relationCard/RelationCard';

import { useStyles } from './ResultStep.styles';

export const ResultStep = ({ onPrev, onNext, results }: MergeDataStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box width="100%">
      <RelationCard crm={results.crm} title={formatMessage({ id: 'crm.merge_relation.result_after_confirm' })}>
        <Box mt={2.5} />
        <Typography variant="h2">{formatMessage({ id: 'crm.merge_relation.merged_to_source' })}</Typography>
        <Box mt={3} />
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
          {formatMessage({ id: 'crm.merge_relation.matchProfiles' })}
        </Typography>
        {results.matchProfiles?.map(item => {
          const profile = (typeof item.crmId === 'number'
            ? results.matches[item.crmId]
            : results.crm
          )?.matchProfiles?.find(profile => profile.id === item.id);

          return profile ? (
            <>
              <Box mt={2} />
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'crm.merge_relation.profile' })} {profile.dateCreated.toFormat('dd-MM-yyyy')}{' '}
                {formatMessage({ id: 'common.from' })}{' '}
                {typeof item.crmId !== 'number'
                  ? formatMessage({ id: 'crm.merge_relation.source_relation' })
                  : `${formatMessage({ id: 'crm.merge_relation.selected_relation' })} ${item.crmId + 1}`}
              </Typography>
            </>
          ) : null;
        })}
        <Box mt={3.5} />
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
          {formatMessage({ id: 'crm.merge_relation.accountManager' })}
        </Typography>
        <Box mt={2} />
        <Typography variant="h5" color="textSecondary">
          {results.crm.manager.firstName} {results.crm.manager.lastName} {formatMessage({ id: 'common.from' })}{' '}
          {typeof results.selectedManager !== 'number'
            ? formatMessage({ id: 'crm.merge_relation.source_relation' })
            : `${formatMessage({ id: 'crm.merge_relation.selected_relation' })} ${results.selectedManager + 1}`}
        </Typography>
      </RelationCard>

      {results.matches.map(item => (
        <Box key={item.id} mt={2} width="100%">
          <RelationCard
            crm={item}
            compare={results.crm}
            showPercent={false}
            title={
              item.isDelete ? (
                <Box className={classes.deletedTitle} display="flex" alignItems="center">
                  <Typography color="inherit" variant="h2">
                    {formatMessage({ id: 'crm.merge_relation.will_deleted' })}
                  </Typography>
                  <Box ml={1.5} />
                  <Cancel color="inherit" />
                </Box>
              ) : (
                <Box className={classes.remainedTitle} display="flex" alignItems="center">
                  <Typography color="inherit" variant="h2">
                    {formatMessage({ id: 'crm.merge_relation.will_remained' })}
                  </Typography>
                  <Box ml={1.5} />
                  <CheckCircleRounded color="inherit" />
                </Box>
              )
            }
          />
        </Box>
      ))}

      <Box mt={5} />
      <Grid container justify="space-between">
        <Grid item>
          <Button variant="outlined" color="primary" size="large" onClick={onPrev}>
            {formatMessage({ id: 'crm.move_relation.goto.back' })}
          </Button>
        </Grid>
        <Grid item>
          <SubmitButton size="large" color="primary" variant="contained" onClick={onNext}>
            {formatMessage({ id: 'crm.move_relation.goto.confirm' })}
          </SubmitButton>
        </Grid>
      </Grid>
    </Box>
  );
};
