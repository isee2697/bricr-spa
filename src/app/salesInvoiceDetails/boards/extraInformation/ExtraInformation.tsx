import React from 'react';

import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';
import { Card, CardContent, Grid } from 'ui/atoms';

import { ExtraInformationProps } from './ExtraInformation.types';

export const ExtraInformation = ({ onSave }: ExtraInformationProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardContent>
        <AutosaveForm onSave={onSave}>
          <Grid item xs={12}>
            <GenericField
              margin="none"
              name="extraInformation"
              label={formatMessage({ id: 'sales.invoice.extra_information' })}
            />
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
