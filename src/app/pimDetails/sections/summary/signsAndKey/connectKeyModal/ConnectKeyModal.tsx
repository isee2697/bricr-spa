import React from 'react';

import { FormModal } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Box } from 'ui/atoms';
import { AdvancedSearchField, CheckboxField, GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';

import { ConnectKeyModalProps } from './ConnectKeyModal.types';
import { useStyles } from './ConnectKeyModal.styles';

export const ConnectKeyModal = ({ isOpened, onSubmit, onClose, people }: ConnectKeyModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const handleSubmit = async () => {
    onSubmit();

    return undefined;
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.connect_key.title' })}
      addText={formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.connect_key.title' })}
    >
      <Box>
        <GenericField
          name="key"
          label={formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.connect_key.select_key' })}
          placeholder={formatMessage({
            id: 'pim_details.summary.signs_and_keys.keys.connect_key.search_key_from_keyboard',
          })}
        />
      </Box>
      <Box>
        <GenericField
          name="description"
          label={formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.connect_key.description' })}
          placeholder={formatMessage({
            id: 'pim_details.summary.signs_and_keys.keys.connect_key.description.placeholder',
          })}
        />
      </Box>
      <Box>
        <AdvancedSearchField
          validate={[requireValidator]}
          items={people.map(person => ({
            label: `${person.firstName} ${person.lastName}`,
            value: person.id,
          }))}
          placeholder={formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.connect_key.search_person' })}
          name="to"
          label="pim_details.summary.signs_and_keys.keys.connect_key.to"
          align="left"
          classes={{
            input: classes.searchPerson,
            searchField: classes.searchPersonField,
            searchFieldInput: classes.searchPersonFieldInput,
            itemLabelWrapper: classes.searchPersonFieldPlaceholder,
          }}
        />
      </Box>
      <CheckboxField
        name="lent"
        label={formatMessage({ id: 'pim_details.summary.signs_and_keys.keys.connect_key.lent' })}
      />
    </FormModal>
  );
};
