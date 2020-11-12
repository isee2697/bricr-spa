import React from 'react';
import arrayMutators from 'final-form-arrays';
import { Field, FieldInputProps } from 'react-final-form';

import { useLocale } from 'hooks';
import { FormModal, SearchList } from 'ui/organisms';
import { Box, TileCheckbox } from 'ui/atoms';
import { UserIcon } from 'ui/atoms/icons';

import { LinkPimObjectModalProps, PimListItem } from './LinkPimObjectModal.types';

export const LinkPimObjectModal = ({ isOpened, onClose, onSubmit }: LinkPimObjectModalProps) => {
  const { formatMessage } = useLocale();

  const pimList: PimListItem[] = [
    {
      id: '0001',
      city: 'Breda',
      houseNumber: '36',
      postalCode: '2525',
      street: 'Isenburgstraat 36',
    },
    {
      id: '0002',
      city: 'Breda',
      houseNumber: '36',
      postalCode: '2525',
      street: 'Weerschijnvlinder 45',
    },
    {
      id: '0003',
      city: 'Terheijden',
      houseNumber: '36',
      postalCode: '2525',
      street: 'Tomasberg 25',
    },
  ];

  const handleSubmit = async () => {
    onSubmit();

    return undefined;
  };

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

  const filterItem = (item: PimListItem, currentValue: string) =>
    (item?.street?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ||
      item?.city.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase())) ??
    true;

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      mutators={{ ...arrayMutators }}
      title={formatMessage({ id: 'email.link_pim_object.title' })}
      addText={formatMessage({ id: 'email.link_pim_object.link_property' })}
    >
      <Field name="linkedPimObjects">
        {({ input }) => (
          <SearchList<PimListItem>
            items={pimList}
            selectedItemsIds={[]}
            resultListLabel={formatMessage({ id: 'email.link_pim_object.pim_objects_in_portfolio' })}
            item={({ item, highlightString }) => (
              <Box mb={2}>
                <TileCheckbox
                  onClick={() => handleSelect(input, item.id)}
                  isSelected={input.value.includes(item.id)}
                  title={highlightString(formatTitle(item))}
                  orientation="horizontal"
                >
                  <UserIcon />
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
