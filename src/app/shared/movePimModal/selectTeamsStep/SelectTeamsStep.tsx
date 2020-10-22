import React, { useState } from 'react';
import { Field } from 'react-final-form';

import { UserIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, Button, Box } from 'ui/atoms';
import { SimpleSearch, SubmitButton } from 'ui/molecules';
import { SelectStepProps } from '../MovePimModal.types';
import { CheckboxGroupField } from 'form/fields';

const persons = [
  {
    label: 'Victor Martin Brochner',
    value: '1',
    icon: <UserIcon />,
  },
  {
    label: 'Victor Martin Brochner',
    value: '2',
    icon: <UserIcon />,
  },
];

export const SelectTeamsStep = ({ onPrev, onNext, objects }: SelectStepProps) => {
  const [team, setTeam] = useState<string>('');
  const { formatMessage } = useLocale();

  return (
    <Field name="object">
      {({ input }) => (
        <>
          <DialogContent>
            <Grid container spacing={2} justify="center">
              <Grid xs={8}>
                <Box mb={3}>
                  <SimpleSearch onChange={v => setTeam(v.currentTarget.value)} value={team} />
                </Box>
                <CheckboxGroupField options={persons} name="linked_managers" orientation="horizontal" xs={12} />
              </Grid>
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
