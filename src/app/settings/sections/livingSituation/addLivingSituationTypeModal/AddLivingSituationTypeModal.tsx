import React from 'react';

import { FormModal } from 'ui/organisms';
import { useLocale } from 'hooks';
import { GenericField, RadioGroupField } from 'form/fields';
import { LivingSituationType } from '../baseChecklist/BaseChecklist.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';

import { AddLivingSituationTypeModalProps, LivingSituationTypeSubmitBody } from './AddLivingSituationTypeModal.types';

export const AddLivingSituationTypeModal = ({ isOpened, onClose, onSubmit }: AddLivingSituationTypeModalProps) => {
  const { formatMessage } = useLocale();

  const handleSubmit = async (values: LivingSituationTypeSubmitBody) => {
    onSubmit(values);

    return undefined;
  };

  const typeOptions: RadioDataType[] = Object.keys(LivingSituationType).map(key => ({
    label: formatMessage({ id: `dictionaries.type_of_living_situation.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={formatMessage({ id: 'settings.living_situation.add_living_situation_type.title' })}
      addText={formatMessage({ id: 'settings.living_situation.add_living_situation_type.add_living_situation' })}
    >
      <GenericField
        name="name"
        label={formatMessage({ id: 'settings.living_situation.add_living_situation_type.name_of_checklist' })}
        placeholder={formatMessage({
          id: 'settings.living_situation.add_living_situation_type.name_of_checklist.placeholder',
        })}
      />
      <Box mt={4} />
      <FormSubSectionHeader
        title={'settings.living_situation.add_living_situation_type.type_of_living_situation'}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <RadioGroupField name="type" options={typeOptions} />
    </FormModal>
  );
};
