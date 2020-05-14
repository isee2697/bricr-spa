import React from 'react';
import { Form, Field } from 'react-final-form';

import { Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Button, Grid, TileRadio } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { GenericField } from 'form/fields';
import { SquareIcon } from 'ui/atoms/icons/square/SquareIcon';
import { requireValidator } from 'form/validators';

import { AddNewFloorModalProps } from './AddNewFloorModal.types';

const TYPES = [
  {
    type: 'Floor',
    translation: 'floor',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: 'Attic',
    translation: 'attic',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: 'Basement',
    translation: 'basement',
    icon: <SquareIcon color="inherit" />,
  },
];

export const AddNewFloorModal = ({ onSubmit, isOpened, onClose }: AddNewFloorModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.inside.add_floor.title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: AppMessages['add_pim.error.unknown'] })}</Alert>
              </DialogContent>
            )}

            <DialogContent>
              <Field name="type" validate={requireValidator}>
                {({ input }) => (
                  <Grid container spacing={3}>
                    {TYPES.map(c => (
                      <Grid item xs={4} key={c.type}>
                        <TileRadio
                          onClick={() => {
                            if (input.value === c.type) {
                              input.onChange('');
                            } else {
                              input.onChange(c.type);
                            }
                          }}
                          isSelected={input.value === c.type}
                          title={formatMessage({ id: `pim_details.inside.floor_type.${c.translation}` })}
                        >
                          {c.icon}
                        </TileRadio>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Field>
              <Grid item xs={12}>
                <GenericField
                  name="description"
                  label="pim_details.inside.add_floor.description"
                  placeholder="pim_details.inside.add_floor.description_placeholder"
                  size="medium"
                />
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button color="default" variant="outlined" onClick={onClose}>
                {formatMessage({ id: AppMessages['common.cancel'] })}
              </Button>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: AppMessages['pim_details.add_new_floor'] })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
