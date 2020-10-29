import React, { ReactNode } from 'react';
import { DateTime } from 'luxon';
import { useFormState } from 'react-final-form';

import { Pim as PimEntity } from 'api/types';
import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, Button, Typography, Box } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { SelectStepProps } from '../MovePimModal.types';
import { Checkbox } from 'ui/atoms/checkbox/Checkbox';
import { ResultTable } from '../resultTable/ResultTable';
import { useStyles } from '../MovePimModal.styles';

export const ResultStep = ({ onPrev, onNext, results }: SelectStepProps) => {
  const classes = useStyles();
  const { values } = useFormState({
    subscription: {
      values: true,
    },
  });
  const { formatMessage } = useLocale();

  const handleFilter = (item: PimEntity) => {
    let hasItem = false;

    if (values) {
      Object.entries(values).forEach(object => {
        const value = object[1] as string[];

        value.forEach(id => {
          if (id === item.id) {
            hasItem = true;
          }
        });
      });
    }

    return hasItem;
  };

  return (
    <>
      <DialogContent>
        <Grid container>
          {results &&
            Object.entries(results).length > 0 &&
            Object.entries(results).map(([key, value]) => {
              return (
                <Box mb={4}>
                  <Typography className={classes.resultTitles} variant="h5">
                    <strong>{value.filter(handleFilter).length}</strong> {key}
                  </Typography>
                  <ResultTable
                    data={value.filter(handleFilter).map(item => ({
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
            <SubmitButton size="large" color="primary" variant="contained" type="submit">
              {formatMessage({ id: 'move_pim.controls.move_objects' })}
            </SubmitButton>
          </Grid>
        </Grid>
      </DialogActions>
    </>
  );
};
