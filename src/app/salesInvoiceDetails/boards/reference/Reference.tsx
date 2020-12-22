import React from 'react';

import { Card, CardContent, Grid } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';

import { ReferenceProps } from './Reference.types';

export const Reference = ({ onSave }: ReferenceProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardContent>
        <AutosaveForm onSave={onSave}>
          <Grid item xs={12}>
            <GenericField margin="none" name="reference" label={formatMessage({ id: 'sales.invoice.reference' })} />
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
