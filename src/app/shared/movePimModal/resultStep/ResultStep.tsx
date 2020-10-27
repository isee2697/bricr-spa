import React from 'react';
import { Field } from 'react-final-form';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, Button, Typography, Box } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { SelectStepProps } from '../MovePimModal.types';
import { Checkbox } from 'ui/atoms/checkbox/Checkbox';
import { ResultTable } from '../resultTable/ResultTable';
import { useStyles } from '../MovePimModal.styles';

export const ResultStep = ({ onPrev, onNext, results }: SelectStepProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Field name="object">
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container>
              {results &&
                Object.entries(results).length > 0 &&
                Object.entries(results).map(object => {
                  return (
                    <Box mb={4}>
                      <Typography className={classes.resultTitles} variant="h5">
                        <strong>{object[1].length}</strong> {object[0]}
                      </Typography>
                      <ResultTable
                        data={object[1].map(item => ({
                          selected: <Checkbox color="primary" name="isenburgstraat-36_2" />,
                          title: item.street + ' ' + item.houseNumber,
                          date: DateTime.fromISO(item.dateCreated).toLocaleString(),
                          location: item.city,
                          price: item.salePrice ? String(item.salePrice) : '€145.000,00',
                        }))}
                      />
                    </Box>
                  );
                })}
            </Grid>
          </DialogContent>

          <DialogActions>
            <Grid container justify="space-between">
              <Grid>
                <Button variant="outlined" color="primary" size="small" onClick={onPrev}>
                  {formatMessage({ id: 'move_pim.controls.goto.select_teams' })}
                </Button>
              </Grid>
              <Grid>
                <SubmitButton size="large" color="primary" variant="contained" onClick={onNext}>
                  {formatMessage({ id: 'move_pim.controls.move_objects' })}
                </SubmitButton>
              </Grid>
            </Grid>
          </DialogActions>
        </>
      )}
    </Field>
  );
};
