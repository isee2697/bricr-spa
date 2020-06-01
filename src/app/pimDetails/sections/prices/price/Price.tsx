import React from 'react';

import { Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';

export const Price = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.prices.add_new_price' })} isEditable={false}>
      {() => (
        <InfoSection emoji="🤑">
          <Typography variant="h3">{formatMessage({ id: 'pim_details.prices.empty_line_1' })}</Typography>
          <Typography variant="h3">{formatMessage({ id: 'pim_details.prices.empty_line_2' })}</Typography>
        </InfoSection>
      )}
    </FormSection>
  );
};
