import React from 'react';
import { Field, useFormState } from 'react-final-form';

import { useLocale } from 'hooks';
import { DialogContent, Grid, DialogActions, Box, Button } from 'ui/atoms';
import { SubmitButton } from 'ui/molecules';
import { ObjectType, SelectStepProps } from '../MovePimModal.types';
import { requireValidator } from 'form/validators';

import { ObjectToggle } from './objectToggle/ObjectToggle';

enum OptionType {
  properties = 'Properties',
  projects = 'Projects',
  bog = 'BOG objects',
  relet = 'Relet projects',
  aog = 'AOG objects',
}
const checkboxes = [
  {
    name: 'properties',
    target: 'properties',
    type: OptionType.properties,
  },
  {
    name: 'nc',
    target: 'nc',
    type: OptionType.projects,
  },
  {
    name: 'bog',
    target: 'bog',
    type: OptionType.bog,
  },
  {
    name: 'relet',
    target: 'relet',
    type: OptionType.relet,
  },
  {
    name: 'aog',
    target: 'aog',
    type: OptionType.aog,
  },
];

export const SelectObjectStep = ({ onNext, objects, onUpdate, onClose }: SelectStepProps) => {
  const { formatMessage } = useLocale();
  const { values } = useFormState({
    subscription: {
      values: true,
    },
  });

  return (
    <Field name="object" validate={requireValidator}>
      {({ input }) => (
        <>
          <DialogContent>
            <Box mx={4}>
              <Grid container spacing={2}>
                {checkboxes.map((item, index) => (
                  <ObjectToggle key={index} index={index} objects={objects ? objects[item.target] : []} item={item} />
                ))}
              </Grid>
            </Box>
          </DialogContent>

          <DialogActions>
            <Grid container justify="space-between">
              <Grid>
                <Button variant="outlined" color="primary" onClick={onClose}>
                  {formatMessage({ id: 'common.cancel' })}
                </Button>
              </Grid>
              <Grid>
                <SubmitButton
                  disabled={!values}
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    onUpdate(objects as ObjectType);
                    onNext();
                  }}
                >
                  {formatMessage({ id: 'move_pim.controls.goto.select_teams' })}
                </SubmitButton>
              </Grid>
            </Grid>
          </DialogActions>
        </>
      )}
    </Field>
  );
};
