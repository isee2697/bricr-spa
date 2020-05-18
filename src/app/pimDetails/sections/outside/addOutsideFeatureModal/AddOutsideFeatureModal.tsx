import React from 'react';
import { Form, Field } from 'react-final-form';

import { Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Button, Grid, TileRadio } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { SquareIcon } from 'ui/atoms/icons/square/SquareIcon';
import { requireValidator } from 'form/validators';
import { OutsideFeatureType } from 'api/types';

import { AddOutsideFeatureModalProps } from './AddOutsideFeatureModal.types';

const TYPES = [
  {
    type: OutsideFeatureType.Garden,
    translation: 'dictionaries.outside_type.Garden',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: OutsideFeatureType.Garage,
    translation: 'dictionaries.outside_type.Garage',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: OutsideFeatureType.Storage,
    translation: 'dictionaries.outside_type.Storage',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: OutsideFeatureType.Terrain,
    translation: 'dictionaries.outside_type.Terrain',
    icon: <SquareIcon color="inherit" />,
  },
  {
    type: OutsideFeatureType.ParkingLot,
    translation: 'dictionaries.outside_type.ParkingLot',
    icon: <SquareIcon color="inherit" />,
  },
];

export const AddOutsideFeatureModal = ({ onSubmit, isOpened, onClose }: AddOutsideFeatureModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.outside.add_new.title' })}
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
                          title={formatMessage({ id: c.translation })}
                        >
                          {c.icon}
                        </TileRadio>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Field>
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
                {formatMessage({ id: AppMessages['pim_details.outside.add_new_feature'] })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
