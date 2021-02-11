import React from 'react';

import { Card, CardContent, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { InfoSection } from 'ui/molecules';

export const SalesSettings = () => {
  const { formatMessage } = useLocale();

  return (
    <Page withoutHeader>
      <Card>
        <CardContent>
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({ id: 'project.details.allocate_criteria.empty_title' })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({ id: 'project.details.allocate_criteria.empty_description' })}
            </Typography>
          </InfoSection>
        </CardContent>
      </Card>
    </Page>
  );
};
