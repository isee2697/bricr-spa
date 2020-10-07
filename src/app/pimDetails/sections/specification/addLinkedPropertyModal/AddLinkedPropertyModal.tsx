import React from 'react';
import { Form } from 'react-final-form';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Box, DialogActions, DialogContent } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { SearchList } from 'ui/organisms';

import { AddLinkedPropertyModalProps, LinkedPimType } from './AddLinkedPropertyModal.types';
import { useStyles } from './AddLinkedPropertyModal.styles';
import { PropertyTile } from './propertyTile/PropertyTile';

export const AddLinkedPropertyModal = ({
  isOpened,
  onClose,
  onSubmit,
  pimList,
  linkedProperty,
  onPropertySelect,
  selectedPims,
}: AddLinkedPropertyModalProps) => {
  const { formatMessage } = useLocale();

  const classes = useStyles();

  const filterItem = (item: LinkedPimType, currentValue: string) =>
    (item?.street?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ||
      item?.city.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase())) ??
    true;

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.specification.add_linked_property_modal.title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <SearchList<LinkedPimType>
                items={pimList ?? []}
                selectedItemsIds={selectedPims}
                filterItem={filterItem}
                item={({ item, highlightString, isInitiallySelected }) => (
                  <Box mb={2}>
                    <PropertyTile
                      isSelected={isInitiallySelected}
                      onClick={() => onPropertySelect(item?.id ?? '')}
                      title={
                        <>
                          {highlightString(item?.street ?? '')}, {highlightString(item?.city ?? '')}
                        </>
                      }
                    />
                  </Box>
                )}
              />
            </DialogContent>
            <DialogActions className={classes.actions}>
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
                {formatMessage({ id: 'pim_details.specification.custom_property_modal.submit_button' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
