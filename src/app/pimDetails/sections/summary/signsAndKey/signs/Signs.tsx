import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';

export const Signs = () => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.title' })} />
      <CardContent>
        <InfoSection emoji="🤔">
          <Typography variant="h5">
            {formatMessage({
              id: 'pim_details.summary.signs_and_keys.signs.empty_title',
            })}
          </Typography>
          <Typography variant="h5">
            {formatMessage({
              id: 'pim_details.summary.signs_and_keys.signs.empty_description',
            })}
          </Typography>
        </InfoSection>
      </CardContent>
    </Card>
  );
};
