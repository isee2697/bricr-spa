import React from 'react';

import { Card, CardContent, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';

import { DescriptionProps } from './Description.types';

export const Description = ({ onSave }: DescriptionProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardContent>
        <AutosaveForm onSave={onSave}>
          <Grid item xs={12}>
            <GenericField margin="none" name="description" label={formatMessage({ id: 'sales.invoice.description' })} />
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
