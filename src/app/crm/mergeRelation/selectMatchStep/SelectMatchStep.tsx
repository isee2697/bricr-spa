import React, { useState } from 'react';
import clsx from 'clsx';

import { useLocale } from 'hooks';
import { Grid, Button, Box, Card, CardHeader, CardContent, FormControlLabel, Typography, Checkbox } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { CrmDetailItem, MatchProfileType, MergeDataStepProps } from '../MergeCrmRelation.types';
import { MatchProfile } from 'app/crmRelationsDetails/personalInformation/matchProfile/MatchProfile.types';

import { useStyles } from './SelectMatchStep.styles';
import { MatchFieldType } from './SelectMatchStep.types';

const fields: MatchFieldType[] = ['matchProfiles', 'manager'];

export const SelectMatchStep = ({ onPrev, onNext, onUpdate, results }: MergeDataStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [selectedManager, setSelectedManager] = useState<number | undefined>(results.selectedManager);
  const [newCrm, setNewCrm] = useState<CrmDetailItem>(results.crm);
  const [matchProfiles, setMatchProfiles] = useState<MatchProfileType[]>(results.matchProfiles || []);

  const maxProfilesLength = Math.max(
    results.crm.matchProfiles?.length || 1,
    ...results.matches.map(item => item.matchProfiles?.length || 1),
  );

  const getField = (crm: CrmDetailItem, field: MatchFieldType, index?: number) => {
    if (field === 'manager') {
      return (
        <Box>
          <FormControlLabel
            control={
              <Checkbox checked={selectedManager === index} onChange={() => setField(field, index)} color="primary" />
            }
            label={<Typography variant="h5">{`${crm.manager.firstName} ${crm.manager.lastName}` || '-'}</Typography>}
          />
        </Box>
      );
    } else if (field === 'matchProfiles') {
      return (
        <Box>
          {crm.matchProfiles?.length ? (
            crm.matchProfiles.map(profile => (
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!matchProfiles.find(item => item.crmId === index && item.id === profile.id)}
                      onChange={() => toggleProfile(index, profile)}
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="h5">
                      {`${formatMessage({ id: 'crm.merge_relation.profile' })} ${profile.dateCreated.toFormat(
                        'dd-MM-yyyy',
                      )}` || '-'}
                    </Typography>
                  }
                />
              </Box>
            ))
          ) : (
            <Box>
              <FormControlLabel control={<Checkbox checked={false} color="primary" />} label="-" />
            </Box>
          )}
          <Box mt={6 * ((maxProfilesLength || 1) - (crm.matchProfiles?.length || 1))} />
        </Box>
      );
    }
  };

  const setField = (field: MatchFieldType, index: number | undefined = undefined) => {
    const updateCrm = typeof index !== 'number' ? results.crm : results.matches[index];
    setNewCrm({ ...newCrm, [field]: updateCrm[field] });

    if (field === 'manager') {
      setSelectedManager(index);
    }
  };

  const toggleProfile = (crmId: number | undefined, profile: MatchProfile) => {
    const index = matchProfiles.findIndex(item => item.crmId === crmId && item.id === profile.id);

    if (index === -1) {
      matchProfiles.push({ crmId, id: profile.id });
    } else {
      matchProfiles.splice(index, 1);
    }

    setMatchProfiles([...matchProfiles]);
  };

  const toggleDeletes = (index: number) => {
    results.matches[index].isDelete = !results.matches[index].isDelete;
    setNewCrm({ ...newCrm });
  };

  return (
    <>
      <Grid container justify="space-between">
        <Grid>
          <Button variant="outlined" color="primary" size="large" onClick={onPrev}>
            {formatMessage({ id: 'crm.move_relation.goto.step_2' })}
          </Button>
        </Grid>
        <Grid>
          <SubmitButton
            size="large"
            color="primary"
            variant="contained"
            onClick={() => {
              onUpdate({
                crm: newCrm,
                matches: results.matches,
                selectedManager,
                matchProfiles,
              });
              onNext();
            }}
          >
            {formatMessage({ id: 'common.apply' })}
          </SubmitButton>
        </Grid>
      </Grid>

      <Box mt={5.5} width="100%">
        <Grid container spacing={4} className={classes.cardsWrapper}>
          <Grid item xs={3}>
            <Box mt={9.5} width="25%" marginX={1}>
              <Typography color="textSecondary" variant="h5" className={classes.label}>
                {formatMessage({ id: `crm.merge_relation.field.matchProfiles` })}
              </Typography>
              <Box mt={6 * ((maxProfilesLength || 1) - 1)} />
              <Typography color="textSecondary" variant="h5" className={classes.label}>
                {formatMessage({ id: `crm.merge_relation.field.accountManager` })}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.sourceCard}>
              <CardHeader title={formatMessage({ id: 'crm.merge_relation.source_relation.title' })} />
              <CardContent>{fields.map(field => getField(results.crm, field) || '-')}</CardContent>
            </Card>
          </Grid>
          {results.matches.map((item, index) => (
            <Grid item xs={3} className={classes.gridItem}>
              <Card className={classes.selectedCard}>
                <CardHeader
                  title={`${formatMessage({ id: 'crm.merge_relation.selected_relation.title' })} ${index + 1}`}
                />
                <CardContent>{fields.map(field => getField(item, field, index) || '-')}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} className={classes.cardsWrapper}>
          <Grid item xs={3} className={classes.borderBottom}></Grid>
          <Grid item xs={3} className={classes.borderBottom}></Grid>
          {results.matches.map(() => (
            <Grid item xs={3} className={clsx(classes.borderBottom, classes.gridItem)}></Grid>
          ))}
        </Grid>

        <Grid container spacing={4} className={classes.cardsWrapper}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          {results.matches.map((item, index) => (
            <Grid item xs={3} className={classes.gridItem}>
              <Box mt={7} mx={2} width="100%">
                <FormControlLabel
                  control={<Checkbox checked={item.isDelete} onChange={() => toggleDeletes(index)} />}
                  label={
                    <Typography variant="h5">
                      {formatMessage({ id: 'crm.merge_relation.delete_relation_after_merge' })}
                    </Typography>
                  }
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
