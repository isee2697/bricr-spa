import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { CheckboxGroupField } from 'form/fields';
import { ServiceTypes } from '../dictionaries';

export const Services = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.garden.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
    >
      {isEditing => (
        <>
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.garden.garden_situation',
            })}
            subtitle={formatMessage({ id: 'common.choose_one_option_or_more_below' })}
            noBorder
          />
          <CheckboxGroupField
            name="garden.situation"
            options={ServiceTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.match_service.${type.value}` }),
            }))}
            xs={2}
            disabled={!isEditing}
          />
        </>
      )}
    </FormSection>
  );
};
