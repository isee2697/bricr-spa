import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Grid, Button, Box, Card, CardHeader, CardContent, Radio, FormControlLabel, Typography } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { CrmDetailItem, DataFieldType, MergeDataStepProps } from '../MergeCrmRelation.types';

import { useStyles } from './SelectDataStep.styles';

const fields: DataFieldType[] = [
  'firstName',
  'insertion',
  'lastName',
  'initials',
  'gender',
  'street',
  'houseNumber',
  'addition',
  'zipcode',
  'city',
  'phoneNumber',
  'email',
  'partner',
];

export const SelectDataStep = ({ onPrev, onNext, onUpdate, objects, results }: MergeDataStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [selected, setSelected] = useState<{ [key in DataFieldType]?: number }>(results.selectedFields || {});
  const [newCrm, setNewCrm] = useState<CrmDetailItem>(results.crm);

  const getField = (crm: CrmDetailItem, field: DataFieldType) => {
    if (field === 'initials') {
      return crm.partner.initials;
    } else if (field === 'partner') {
      return `${crm.partner.firstName} ${crm.partner.lastName}`;
    } else if (
      field === 'street' ||
      field === 'houseNumber' ||
      field === 'addition' ||
      field === 'zipcode' ||
      field === 'city'
    ) {
      return crm.address?.[field] || '-';
    } else if (
      field === 'email' ||
      field === 'phoneNumber' ||
      field === 'firstName' ||
      field === 'insertion' ||
      field === 'lastName'
    ) {
      return crm[field];
    } else if (field === 'gender') {
      return formatMessage({ id: `dictionaries.gender.${crm.gender}` });
    }
  };

  const setField = (field: DataFieldType, value?: number) => {
    const updateCrm = typeof value !== 'number' ? objects.crm : objects.matches[value];

    if (
      field === 'street' ||
      field === 'houseNumber' ||
      field === 'addition' ||
      field === 'zipcode' ||
      field === 'city'
    ) {
      setNewCrm({ ...newCrm, [field]: updateCrm.address?.[field] });
    } else if (field === 'initials') {
      setNewCrm({ ...newCrm, partner: { ...newCrm.partner, initials: updateCrm.partner.initials } });
    } else {
      setNewCrm({ ...newCrm, [field]: updateCrm[field] });
    }

    setSelected({ ...selected, [field]: value });
  };

  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <Button variant="outlined" color="primary" size="large" onClick={onPrev}>
            {formatMessage({ id: 'crm.move_relation.goto.step_1' })}
          </Button>
        </Grid>
        <Grid item>
          <SubmitButton
            size="large"
            color="primary"
            variant="contained"
            onClick={() => {
              onUpdate({
                crm: newCrm,
                matches: objects.matches,
                selectedFields: selected,
              });
              onNext();
            }}
          >
            {formatMessage({ id: 'crm.move_relation.goto.step_3' })}
          </SubmitButton>
        </Grid>
      </Grid>

      <Box mt={5.5} width="100%">
        <Grid container spacing={4} className={classes.cardsWrapper}>
          <Grid item xs={3}>
            <Box mt={9.5} width="25%" marginX={1}>
              {fields.map(field => (
                <Typography color="textSecondary" variant="h5" className={classes.label}>
                  {formatMessage({ id: `crm.merge_relation.field.${field}` })}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.sourceCard}>
              <CardHeader title={formatMessage({ id: 'crm.merge_relation.source_relation.title' })} />
              <CardContent>
                {fields.map(field => (
                  <Box>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={selected[field] === undefined}
                          onChange={() => setField(field)}
                          color="primary"
                        />
                      }
                      label={<Typography variant="h5">{getField(objects.crm, field) || '-'}</Typography>}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
          {objects.matches.map((item, index) => (
            <Grid item xs={3} className={classes.gridItem}>
              <Card className={classes.selectedCard}>
                <CardHeader
                  title={`${formatMessage({ id: 'crm.merge_relation.selected_relation.title' })} ${index + 1}`}
                />
                <CardContent>
                  {fields.map(field => (
                    <Box>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={selected[field] === index}
                            onChange={() => setField(field, index)}
                            color="primary"
                          />
                        }
                        label={<Typography variant="h5">{getField(item, field) || '-'}</Typography>}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
