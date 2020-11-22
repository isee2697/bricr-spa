import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, FormControlLabel, IconButton, Switch } from 'ui/atoms';
import { ArrowUpIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { DatePickerField, GenericField, RadioGroupField } from 'form/fields';
import { SalesStatus, SalesType } from '../../dictionaries';

export const GeneralInformation = () => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'sales_details.general.general_information' })}
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
            title={formatMessage({ id: 'sales_details.general.status' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField name="status" options={SalesStatus} />
          <Box mt={4}>
            <DatePickerField
              name="dateOfSales"
              label={formatMessage({ id: 'sales_details.general.date_of_sales' })}
              disabled={!isEditing}
            />
          </Box>
          <Box mt={4}>
            <FormSubSectionHeader
              title={formatMessage({ id: 'sales_details.general.type_of_sales' })}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <RadioGroupField name="salesType" options={SalesType} disabled={!isEditing} />
          </Box>
          <Box mt={4}>
            <GenericField
              name="extraInformation"
              label={formatMessage({ id: 'common.extra_information' })}
              placeholder={formatMessage({ id: 'common.put_information_here' })}
              disabled={!isEditing}
            />
          </Box>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
