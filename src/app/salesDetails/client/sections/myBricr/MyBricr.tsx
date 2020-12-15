import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, FormControlLabel, IconButton, Switch } from 'ui/atoms';
import { ArrowUpIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';

export const MyBricr = () => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'sales_details.client.my_bricr' })}
        action={
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
            />
            <Box ml={3} />
            <IconButton size="small" variant="roundedContained" onClick={() => {}}>
              <ArrowUpIcon />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
          <GenericField
            name="extraInformation"
            label={formatMessage({ id: 'common.extra_information' })}
            placeholder={formatMessage({ id: 'sales_details.client.my_bricr.this_info_will_be_shown_in_mybricr' })}
            disabled={!isEditing}
          />
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
