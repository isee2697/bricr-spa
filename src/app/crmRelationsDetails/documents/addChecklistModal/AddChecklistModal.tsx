import React from 'react';
import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Avatar, Box, DialogContent, DialogActions, Grid } from 'ui/atoms';
import { requireValidator } from 'form/validators';
import { Modal, SelectCard, SubmitButton } from 'ui/molecules';
import { ChecklistInterestType, ChecklistType } from '../checklist/Checklist.types';

import { ChecklistTypes } from './dictionaries';
import { useStyles } from './AddChecklistModal.styles';

export const AddChecklistModal = () => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('add-document-checklist');
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const onSubmit = async () => {
    return undefined;
  };

  const handleClose = () => {
    close('add-document-checklist');
  };

  const getTypes = (category: ChecklistType): { label: string; value: string }[] => {
    if (category === ChecklistType.Interest) {
      return Object.keys(ChecklistInterestType).map(key => ({
        label: `dictionaries.checklist_interest.${key}`,
        value: key,
      }));
    }

    return [];
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpen}
      onClose={handleClose}
      title={formatMessage({ id: 'crm.details.documents.checklist.add_checklist.title' })}
    >
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="category" validate={requireValidator}>
              {({ input }) => (
                <>
                  <DialogContent>
                    <Grid container spacing={2}>
                      {ChecklistTypes.filter(c => !input.value || input.value === c.type).map(c => (
                        <Grid xs={12} item key={c.type}>
                          <SelectCard
                            className={classes.selectCard}
                            fullWidth
                            withButton
                            onClick={() => {
                              if (input.value === c.type) {
                                input.onChange('');
                              } else {
                                input.onChange(c.type);
                              }
                            }}
                            disabled={c.disabled}
                            selected={input.value === c.type}
                          >
                            <Avatar variant="rounded" bgcolor={c.color.light}>
                              <Box color={c.color.main}>{c.icon}</Box>
                            </Avatar>
                            {formatMessage({ id: `property_categories.${c.translation}` })}
                          </SelectCard>
                        </Grid>
                      ))}
                    </Grid>
                    {input.value && (
                      <Field name="propertyType" validate={requireValidator}>
                        {({ input: propertyType }) => (
                          <Box mt={2}>
                            <Grid container justify="center" spacing={1}>
                              {getTypes(input.value as ChecklistType).map(p => (
                                <Grid item xs={6} md={3} key={p.value}>
                                  <SelectCard
                                    selected={propertyType.value === p.value}
                                    centered
                                    onClick={() => propertyType.onChange(p.value)}
                                  >
                                    {formatMessage({ id: p.label })}
                                  </SelectCard>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        )}
                      </Field>
                    )}
                  </DialogContent>
                  {input.value && (
                    <DialogActions>
                      <SubmitButton
                        disabled={!values.propertyType}
                        size="large"
                        color="primary"
                        variant="contained"
                        onClick={handleClose}
                      >
                        {formatMessage({ id: 'common.next' })}
                      </SubmitButton>
                    </DialogActions>
                  )}
                </>
              )}
            </Field>
          </form>
        )}
      </Form>
    </Modal>
  );
};
