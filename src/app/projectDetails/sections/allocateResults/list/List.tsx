import React from 'react';

import { Page } from 'ui/templates';
import { Card, CardContent, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';

export const List = () => {
  const { formatMessage } = useLocale();

  return (
    <Page withoutHeader>
      <Card>
        <CardContent>
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({ id: 'project.details.allocate_results.empty_title' })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({ id: 'project.details.allocate_results.empty_description' })}
            </Typography>
          </InfoSection>
        </CardContent>
      </Card>
    </Page>
  );
};
