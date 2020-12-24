import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Card, CardContent, Button, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';

export const BaseChecklist = () => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <Page
      title={formatMessage({ id: 'settings.living_situation.base_checklist.title' })}
      titleActions={
        <Button
          size="small"
          color="primary"
          variant="contained"
          startIcon={<AddIcon color="inherit" />}
          onClick={() => open('add-living-situation-type')}
        >
          {formatMessage({ id: 'settings.living_situation.base_checklist.add_living_situation_type' })}
        </Button>
      }
    >
      <Card>
        <CardContent>
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({
                id: 'settings.living_situation.base_checklist.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'settings.living_situation.base_checklist.empty_description',
              })}
            </Typography>
          </InfoSection>
        </CardContent>
      </Card>
    </Page>
  );
};
