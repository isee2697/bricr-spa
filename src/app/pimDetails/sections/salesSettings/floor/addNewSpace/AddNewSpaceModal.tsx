import React from 'react';
import { Form, Field } from 'react-final-form';

import { SpaceType } from 'api/types';
import { Modal, SubmitButton, SelectCard, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Grid, Switch } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';

import { useStyles } from './AddNewSpaceModal.styles';
import { AddNewSpaceModalProps } from './AddNewSpaceModal.types';

export const AddNewSpaceModal = ({ onSubmit, isOpened, onClose }: AddNewSpaceModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={() => onClose(undefined)}
      title={formatMessage({ id: 'pim_details.inside.add_space.title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}

            <DialogContent className={classes.content}>
              <Field name="type" validate={requireValidator}>
                {({ input }) => (
                  <Grid container spacing={1}>
                    {Object.values(SpaceType).map(space => (
                      <Grid item xs={6} key={space}>
                        <SelectCard
                          fullWidth
                          withButton={input.value === space}
                          onClick={() => {
                            input.onChange(input.value === space ? '' : space);
                          }}
                          selected={input.value === space}
                          adornment={
                            input.value === space
                              ? () => (
                                  <>
                                    {formatMessage({ id: 'pim_details.inside.add_space.extra_room' })}{' '}
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
                          {formatMessage({ id: `dictionaries.space_type.${space}` })}
                        </SelectCard>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Field>
              <Grid item xs={12} className={classes.description}>
                <GenericField
                  name="name"
                  label="pim_details.inside.add_space.name"
                  placeholder="pim_details.inside.add_space.name_placeholder"
                  size="medium"
                />
              </Grid>
            </DialogContent>
            <DialogActions>
              <CancelButton variant="outlined" size="large" onClick={() => onClose(undefined)}>
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
                {formatMessage({ id: 'pim_details.inside.add_space.label' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
