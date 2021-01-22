import React from 'react';
import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { Modal, SelectCard } from 'ui/molecules';
import { requireValidator } from 'form/validators';
import { Avatar, Box, DialogContent, Grid } from 'ui/atoms';
import { AddNewChedklistItemBody } from '../checklistList/ChecklistList.types';

import { useStyles } from './AddChecklistItemModal.styles';
import { DocumentTypes } from './dictionaries';
import { AddChecklistItemModalProps } from './AddChecklistItemModal.types';

export const AddChecklistItemModal = ({ onAddNewChecklistItem }: AddChecklistItemModalProps) => {
  const { isOpen } = useModalState('add-document-checklist-item');
  const { close } = useModalDispatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const onSubmit = async (values: AddNewChedklistItemBody) => {
    onAddNewChecklistItem(values);
    handleClose();

    return undefined;
  };

  const handleClose = () => {
    close('add-document-checklist-item');
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpen}
      onClose={handleClose}
      title={formatMessage({ id: 'crm.details.documents.checklist.add_checklist_item.title' })}
    >
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="category" validate={requireValidator}>
              {({ input }) => (
                <>
                  <DialogContent>
                    <Grid container spacing={2}>
                      {DocumentTypes.map(c => (
                        <Grid xs={12} item key={c.type}>
                          <SelectCard
                            className={classes.selectCard}
                            fullWidth
                            withButton
                            onClick={() => {
                              input.onChange(c.type);
                              handleSubmit();
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
                  </DialogContent>
                </>
              )}
            </Field>
          </form>
        )}
      </Form>
    </Modal>
  );
};
