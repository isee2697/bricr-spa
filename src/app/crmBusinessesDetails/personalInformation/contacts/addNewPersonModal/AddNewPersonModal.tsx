import React from 'react';
import { Field, FieldInputProps } from 'react-final-form';

import { useLocale } from 'hooks';
import { PersonType } from '../people/People.types';
import { BogIcon, SquareIcon } from 'ui/atoms/icons';
import { Box, TileCheckbox } from 'ui/atoms';
import { FormModal, SearchList } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';

import { AddNewPersonModalCrmListItem, AddNewPersonModalProps } from './AddNewPersonModal.types';

export const AddNewPersonModal = ({ isOpened, onSubmit, onClose, crmList }: AddNewPersonModalProps) => {
  const { formatMessage } = useLocale();

  const personTypes = Object.keys(PersonType).map(personType => ({
    label: `dictionaries.contacts.person_type.${personType}`,
    icon: <SquareIcon />,
    value: personType,
  }));

  const filterItem = (item: AddNewPersonModalCrmListItem, currentValue: string) =>
    `${item.firstName ?? ''} ${item.lastName ?? ''}`.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase());

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
      title={formatMessage({
        id: 'crm.details.personal_information_contacts.people.add_new_person.title',
      })}
    >
      <Field name="crm">
        {({ input }) => (
          <SearchList<AddNewPersonModalCrmListItem>
            items={crmList}
            selectedItemsIds={[]}
            item={({ item, highlightString }) => (
              <Box mb={2}>
                <TileCheckbox
                  onClick={() => handleSelect(input, item.id)}
                  isSelected={input.value.includes(item.id)}
                  title={highlightString(`${item.firstName ?? ''} ${item.lastName ?? ''}`)}
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
      <RadioGroupField name="personType" options={personTypes} />
    </FormModal>
  );
};
