import React, { useState } from 'react';
import { Field } from 'react-final-form';

import { Team, useSettingInfoQuery } from 'api/types';
import { UserIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, Button, Box } from 'ui/atoms';
import { SimpleSearch, SubmitButton } from 'ui/molecules';
import { SelectStepProps } from '../MovePimModal.types';
import { CheckboxGroupField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';

export const SelectTeamsStep = ({ onPrev, onNext, objects }: SelectStepProps) => {
  const { data } = useSettingInfoQuery();
  const [team, setTeam] = useState<string>('');
  const { formatMessage } = useLocale();

  const profiles = (data?.getTeams?.items as Team[]) ?? [];

  const persons = profiles.map((member: Team) => ({
    label: member?.name,
    value: member?.id,
    icon: <UserIcon />,
  })) as CheckboxDataType[];

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
                <CheckboxGroupField options={persons} name="teams" orientation="horizontal" xs={12} match={team} />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Grid container justify="space-between">
              <Grid>
                <Button variant="outlined" color="primary" size="small" onClick={onPrev}>
                  {formatMessage({ id: 'move_pim.controls.goto.select_objects' })}
                </Button>
              </Grid>
              <Grid>
                <SubmitButton size="large" color="primary" variant="contained" onClick={onNext}>
                  {formatMessage({ id: 'move_pim.controls.goto.select_results' })}
                </SubmitButton>
              </Grid>
            </Grid>
          </DialogActions>
        </>
      )}
    </Field>
  );
};
