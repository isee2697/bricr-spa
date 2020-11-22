import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, FormControlLabel, IconButton, Switch } from 'ui/atoms';
import { ArrowUpIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { RadioGroupField } from 'form/fields';
import { PackageType } from '../../dictionaries';

export const PackageChoice = () => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'sales_details.general.package_choice' })}
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
          <FormSubSectionHeader
            title={formatMessage({ id: 'sales_details.general.type_of_package' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField name="status" options={PackageType} disabled={!isEditing} />
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
