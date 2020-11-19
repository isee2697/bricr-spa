import React from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenericField, RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';

import { AddSalesItemModalProps } from './AddSalesItemModal.types';
import { TypeOfOrders } from './dictionaries';

export const AddSalesItemModal = ({ isOpened, onClose, onSubmit, options }: AddSalesItemModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: `sales.add_new.${options?.salesItemType}.title` })}
      addText={formatMessage({ id: `sales.add_new.${options?.salesItemType}.add_new_button` })}
    >
      <FormSubSectionHeader
        title={formatMessage({ id: 'sales.add_new.type_of_order' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField name="orderType" options={TypeOfOrders} />
      <Box mt={3}>
        <GenericField name="extraDescription" label={formatMessage({ id: 'common.extra_description' })} />
      </Box>
    </FormModal>
  );
};
