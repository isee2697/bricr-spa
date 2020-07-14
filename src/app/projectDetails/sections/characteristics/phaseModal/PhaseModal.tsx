import React from 'react';
import { Field, Form } from 'react-final-form';

import { Box, DialogActions, DialogContent, TileCheckbox } from 'ui/atoms';
import { SearchList } from 'ui/organisms';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { BogIcon, LinkIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './PhaseModal.styles';
import { Phase, PhaseModalProps } from './PhaseModal.types';

export const PhaseModal = ({ isOpened, onClose, onSubmit, phaseList, onAdd, selectedPhase }: PhaseModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const filterItem = (item: Phase, currentValue: string) =>
    item?.name?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ?? true;

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'project_details.characteristics.phase_modal.title' })}
    >
      <Form onSubmit={onSubmit} initialValues={{ phase: selectedPhase ?? '' }}>
        {({ handleSubmit, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <Field name="phase">
                {({ input }) => (
                  <SearchList<Phase>
                    items={phaseList}
                    selectedItemsIds={selectedPhase ? [selectedPhase] : []}
                    item={({ item, highlightString }) => (
                      <Box mb={2}>
                        <TileCheckbox
                          onClick={() => input.onChange(item.id)}
                          isSelected={input.value === item.id}
                          title={highlightString(item.name)}
                          orientation="horizontal"
                        >
                          <BogIcon />
                        </TileCheckbox>
                      </Box>
                    )}
                    filterItem={filterItem}
                  />
                )}
              </Field>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <Box display="flex">
                <Box mr={0.625}>
                  <CancelButton variant="outlined" size="large" onClick={onAdd}>
                    {formatMessage({ id: 'project_details.characteristics.phase_modal.create' })}
                  </CancelButton>
                </Box>
                <SubmitButton
                  type="submit"
                  startIcon={<LinkIcon color="inherit" />}
                  size="large"
                  color="primary"
                  variant="contained"
                  isLoading={submitting}
                  disabled={!valid}
                >
                  {formatMessage({ id: 'project_details.characteristics.phase_modal.confirm' })}
                </SubmitButton>
              </Box>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
