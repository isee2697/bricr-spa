import React from 'react';
import { Field, FieldInputProps } from 'react-final-form';

import { useLocale } from 'hooks';
import { FormModal, SearchList } from 'ui/organisms';
import { Box, TileCheckbox } from 'ui/atoms';
import { BogIcon } from 'ui/atoms/icons';

import { SelectSignatureModalProps, SignatureItem } from './SelectSignatureModal.types';

export const SelectSignatureModal = ({ isOpened, onClose, onSubmit, signatures }: SelectSignatureModalProps) => {
  const { formatMessage } = useLocale();

  const filterItem = (item: SignatureItem, currentValue: string) =>
    item.name.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase());

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([value]);
    }
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'email.select_signature' })}
      addIcon={<></>}
      addText={formatMessage({ id: 'email.set_signature' })}
    >
      <Field name="crm">
        {({ input }) => (
          <SearchList<SignatureItem>
            items={signatures}
            selectedItemsIds={[]}
            item={({ item, highlightString }) => (
              <Box mb={2}>
                <TileCheckbox
                  onClick={() => handleSelect(input, item.id)}
                  isSelected={input.value.includes(item.id)}
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
    </FormModal>
  );
};
