import React, { useState } from 'react';
import { CardWithList } from 'ui/templates';
import { PhoneNumber } from 'api/types';
import { AddUserServiceModalContainer } from '../../modals/AddUserServiceModalContainer';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { PromiseFunction } from 'app/shared/types';
import { Grid, Box } from 'ui/atoms';
import { PhoneNumberTypes } from 'app/settings/sections/users/dictionaries';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';

export const PhoneNumbers = ({
  data,
  onSave,
}: {
  data: PhoneNumber[];
  onSave: PromiseFunction<PhoneNumber & { name: string }>;
}) => {
  const { formatMessage } = useLocale();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CardWithList
        title={formatMessage({ id: 'settings.users.phone_title' })}
        emptyStateTextFirst={formatMessage({ id: 'settings.users.phone_empty' })}
        emptyStateTextSecond={formatMessage({ id: 'settings.users.add_empty' })}
        emoji="☎️"
        renderItem={(item, isEditing) => (
          <Grid key={item.id} container spacing={3}>
            <Grid item xs={6}>
              <GenericField
                placeholder="settings.users.phone_placeholder"
                label="settings.users.phone_label"
                type="email"
                name="phoneNumber"
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={6}>
              <Box mt={5} />
              <CheckboxField label="settings.users.is_public_label" name="isPublic" disabled={!isEditing} />
            </Grid>
            <Grid item xs={12}>
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'settings.users.choose_phone_type' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
              <RadioGroupField xs={3} disabled={!isEditing} name="phoneNumberType" options={PhoneNumberTypes} />
            </Grid>
          </Grid>
        )}
        items={data}
        onSave={onSave}
        onAdd={() => setOpen(true)}
      />
      <AddUserServiceModalContainer type="phone" isOpened={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};
