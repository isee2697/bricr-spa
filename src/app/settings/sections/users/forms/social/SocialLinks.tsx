import React, { useState } from 'react';
import { CardWithList } from 'ui/templates';
import { SocialMediaLink } from 'api/types';
import { AddUserServiceModalContainer } from '../../modals/AddUserServiceModalContainer';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { PromiseFunction } from 'app/shared/types';
import { Grid, Box } from 'ui/atoms';
import { SocialTypes } from 'app/settings/sections/users/dictionaries';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';

export const SocialLinks = ({
  data,
  onSave,
}: {
  data: SocialMediaLink[];
  onSave: PromiseFunction<SocialMediaLink & { name: string }>;
}) => {
  const { formatMessage } = useLocale();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CardWithList
        title={formatMessage({ id: 'settings.users.socialmedia_title' })}
        emptyStateTextFirst={formatMessage({ id: 'settings.users.socialmedia_empty' })}
        emptyStateTextSecond={formatMessage({ id: 'settings.users.add_empty' })}
        emoji="🧿"
        renderItem={(item, isEditing) => (
          <Grid key={item.id} container spacing={3}>
            <Grid item xs={6}>
              <GenericField
                placeholder="settings.users.socialmedia_placeholder"
                label="settings.users.socialmedia_label"
                name="socialMediaLink"
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
                title={formatMessage({ id: 'settings.users.choose_socialmedia_type' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
              <RadioGroupField xs={3} disabled={!isEditing} name="socialMediaLinkType" options={SocialTypes} />
            </Grid>
          </Grid>
        )}
        items={data}
        onSave={onSave}
        onAdd={() => setOpen(true)}
      />
      <AddUserServiceModalContainer type="socialMedia" isOpened={isOpen} onClose={() => setOpen(false)} />
    </>
  );
};
