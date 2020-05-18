import React from 'react';
import { Form, Field } from 'react-final-form';

import { Modal, SubmitButton, SelectCard } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Button, Grid, Switch } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';

import { useStyles } from './AddNewSpaceModal.styles';
import { AddNewSpaceModalProps } from './AddNewSpaceModal.types';

const TYPES = [
  {
    type: 'Kitchen',
    translation: 'kitchen',
    disabled: false,
  },
  {
    type: 'LivingRoom',
    translation: 'living_room',
    disabled: true,
  },
  {
    type: 'Bathroom',
    translation: 'bathroom',
    disabled: true,
  },
  {
    type: 'Bedroom',
    translation: 'bedroom',
    disabled: true,
  },
  {
    type: 'HomeOffice',
    translation: 'home_office',
    disabled: true,
  },
  {
    type: 'Other',
    translation: 'other',
    disabled: true,
  },
];

export const AddNewSpaceModal = ({ onSubmit, isOpened, onClose }: AddNewSpaceModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.inside.add_space.title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: AppMessages['add_pim.error.unknown'] })}</Alert>
              </DialogContent>
            )}

            <DialogContent className={classes.content}>
              <Grid item xs={12} className={classes.description}>
                <GenericField
                  name="name"
                  label="pim_details.inside.add_space.name"
                  placeholder="pim_details.inside.add_space.name_placeholder"
                  size="medium"
                />
              </Grid>
              <Field name="type" validate={requireValidator}>
                {({ input }) => (
                  <Grid container spacing={1}>
                    {TYPES.map(c => (
                      <Grid item xs={6} key={c.type}>
                        <SelectCard
                          fullWidth
                          withButton={input.value === c.type}
                          onClick={() => {
                            if (input.value === c.type) {
                              input.onChange('');
                            } else {
                              input.onChange(c.type);
                            }
                          }}
                          disabled={c.disabled}
                          selected={input.value === c.type}
                          adornment={
                            input.value === c.type
                              ? () => (
                                  <>
                                    {formatMessage({ id: AppMessages['pim_details.inside.add_space.extra_room'] })}{' '}
                                    <Field name="extraRoom">
                                      {({ input: switchField }) => (
                                        <Switch
                                          onClick={() => switchField.onChange(!switchField.value)}
                                          checked={!!switchField.value}
                                        />
                                      )}
                                    </Field>
                                  </>
                                )
                              : undefined
                          }
                        >
                          {formatMessage({ id: `pim_details.inside.space_type.${c.translation}` })}
                        </SelectCard>
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
                {formatMessage({ id: AppMessages['pim_details.inside.add_space.label'] })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
