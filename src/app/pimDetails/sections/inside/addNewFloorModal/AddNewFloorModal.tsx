import React from 'react';
import { Form, Field } from 'react-final-form';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Grid, TileRadio } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { GenericField } from 'form/fields';
import { SquareIcon } from 'ui/atoms/icons/square/SquareIcon';
import { requireValidator } from 'form/validators';
import { FloorType } from 'api/types';

import { AddNewFloorModalProps } from './AddNewFloorModal.types';

const TYPES = [
  {
    type: FloorType.Basement,
    translation: 'dictionaries.floor_type.Basement',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: FloorType.Floor,
    translation: 'dictionaries.floor_type.Floor',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: FloorType.Attic,
    translation: 'dictionaries.floor_type.Attic',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: FloorType.Loft,
    translation: 'dictionaries.floor_type.Loft',
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
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
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
                          title={formatMessage({ id: c.translation })}
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
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'pim_details.add_new_floor' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
