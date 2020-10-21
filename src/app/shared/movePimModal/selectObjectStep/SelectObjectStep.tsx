import React from 'react';
import { Field, useFormState } from 'react-final-form';

import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, FormControlLabel, Typography } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { SelectStepProps } from '../MovePimModal.types';
import { Checkbox } from 'ui/atoms/checkbox/Checkbox.styles';

enum OptionType {
  properties = 'Properties',
  projects = 'Projects',
  bog = 'BOG objects',
  relet = 'Relet projects',
  aog = 'AOG objects',
}
const checkboxes = [
  {
    name: 'select.all.properties',
    amount: 300,
    type: OptionType.properties,
  },
  {
    name: 'select.all.projects',
    amount: 40,
    type: OptionType.projects,
  },
  {
    name: 'select.all.bog.objects',
    amount: 12,
    type: OptionType.bog,
  },
  {
    name: 'select.all.relet.projects',
    amount: 400,
    type: OptionType.relet,
  },
  {
    name: 'select.all.aog.projects',
    amount: 1,
    type: OptionType.aog,
  },
];

export const SelectObjectStep = ({ onNext }: SelectStepProps) => {
  const { formatMessage } = useLocale();
  // const { values } = useFormState({
  //   subscription: {
  //     values: true,
  //   },
  // });

  return (
    <Field name="object">
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container spacing={2}>
              {checkboxes.map((item, index) => (
                <>
                  <Grid xs={6} item key={index}>
                    <FormControlLabel
                      control={<Checkbox color="primary" name={item.name} />}
                      label={
                        <>
                          <Typography variant="h5">{formatMessage({ id: `${item.name}.title` })}</Typography>
                          <Typography variant="h6">{item.amount + ' ' + item.type}</Typography>
                        </>
                      }
                    />
                  </Grid>
                  <Grid xs={6} item key={'selection-' + index}>
                    <FormControlLabel
                      control={<Checkbox color="primary" name={'selection-' + item.name} />}
                      label={
                        <>
                          <Typography variant="h5">{formatMessage({ id: `${item.name}.title.make` })}</Typography>
                        </>
                      }
                    />
                  </Grid>
                </>
              ))}
            </Grid>
          </DialogContent>

          <DialogActions>
            <Grid container justify="space-between">
              <Grid></Grid>
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
