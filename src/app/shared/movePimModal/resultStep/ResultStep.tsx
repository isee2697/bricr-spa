import React from 'react';
import { Field } from 'react-final-form';

import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, Button } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { SelectStepProps } from '../MovePimModal.types';
import { Checkbox } from 'ui/atoms/checkbox/Checkbox';
import { ResultTable } from '../resultTable/ResultTable';

const data = [
  {
    selected: <Checkbox color="primary" name="isenburgstraat-36_1" />,
    title: 'Isenburgstraat 36',
    date: '11-04-2020',
    location: 'Breda',
    price: '€145.000,00',
  },
  {
    selected: <Checkbox color="primary" name="isenburgstraat-36_2" />,
    title: 'Isenburgstraat 36',
    date: '11-04-2020',
    location: 'Breda',
    price: '€145.000,00',
  },
];

export const ResultStep = ({ onPrev, onNext, objects }: SelectStepProps) => {
  const { formatMessage } = useLocale();

  return (
    <Field name="object">
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container>
              <ResultTable data={data} />
            </Grid>
          </DialogContent>

          <DialogActions>
            <Grid container justify="space-between">
              <Grid>
                <Button color="ghost" size="small" onClick={onPrev}>
                  {formatMessage({ id: 'add_pim.controls.previous_step' })}
                </Button>
              </Grid>
              <Grid>
                <SubmitButton size="large" color="primary" variant="contained" onClick={onNext}>
                  {formatMessage({ id: 'common.next' })}
                </SubmitButton>
              </Grid>
            </Grid>
          </DialogActions>
        </>
      )}
    </Field>
  );
};
