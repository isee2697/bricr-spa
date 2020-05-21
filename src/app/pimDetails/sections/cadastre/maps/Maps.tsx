import React from 'react';

import { useLocale } from 'hooks';
import { Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';

export const Maps = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.cadastre.map.title' })} isEditable={false} onAdd={() => {}}>
      {isEditMode => (
        <InfoSection emoji="🤔">
          <Typography variant="h3">{formatMessage({ id: 'pim_details.cadastre.map.empty_title' })}</Typography>
          <Typography variant="h3">{formatMessage({ id: 'pim_details.cadastre.map.empty_subtitle' })}</Typography>
        </InfoSection>
      )}
    </FormSection>
  );
};
