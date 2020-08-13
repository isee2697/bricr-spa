import React from 'react';
import { Field, FieldInputProps, Form } from 'react-final-form';

import { Box, DialogActions, DialogContent, TileCheckbox } from 'ui/atoms';
import { SearchList } from 'ui/organisms';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { BogIcon, LinkIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './LinkedPropertyModal.styles';
import { LinkedPropertyModalProps, PimListItem } from './LinkedPropertyModal.types';

export const LinkedPropertyModal = ({ isOpened, onClose, onSubmit, pimList, onAdd }: LinkedPropertyModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const filterItem = (item: PimListItem, currentValue: string) =>
    (item?.street?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ||
      item?.city.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase())) ??
    true;

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([...input.value, value]);
    }
  };

  const formatTitle = (pim: PimListItem) => {
    return `${pim.street}, ${pim.city}`;
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'project_details.properties.modal.title' })}
    >
      <Form onSubmit={onSubmit} initialValues={{ linkedProperties: [] }}>
        {({ handleSubmit, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <Field name="linkedProperties">
                {({ input }) => (
                  <SearchList<PimListItem>
                    items={pimList}
                    selectedItemsIds={[]}
                    item={({ item, highlightString }) => (
                      <Box mb={2}>
                        <TileCheckbox
                          onClick={() => handleSelect(input, item.id)}
                          isSelected={input.value.includes(item.id)}
                          title={highlightString(formatTitle(item))}
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
                    {formatMessage({ id: 'project_details.properties.modal.create' })}
                  </CancelButton>
                </Box>
                <SubmitButton
                  type="submit"
                  startIcon={<LinkIcon color="inherit" />}
                  size="large"
                  color="primary"
                  variant="contained"
                  isLoading={submitting}
                  disabled={!valid || values.linkedProperties.length === 0}
                >
                  {formatMessage({ id: 'project_details.properties.modal.confirm' })}
                </SubmitButton>
              </Box>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
