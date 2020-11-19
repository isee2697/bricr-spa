import React, { useState } from 'react';

import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch } from 'ui/atoms';
import { ArrowUpIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { DatePickerField, GenericField } from 'form/fields';

import { ContractTemplatesDetailsGeneralInfoProps } from './GeneralInfo.types';

export const ContractTemplatesDetailsGeneralInfo = ({ generalInfo }: ContractTemplatesDetailsGeneralInfoProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  const initialValues = {
    name: generalInfo.name,
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'settings.documents.contract_templates_details.general_info.title' })}
        action={
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
            />
            <Box ml={3} />
            <IconButton size="small" variant="roundedContained">
              <ArrowUpIcon color="inherit" />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} initialValues={initialValues}>
          <Box>
            <GenericField
              name="name"
              label={formatMessage({ id: 'settings.documents.contract_templates_details.name_contract' })}
              disabled={!isEditing}
            />
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <GenericField
                name="version"
                label={formatMessage({ id: 'settings.documents.contract_templates_details.version' })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePickerField
                name="dateVersion"
                label={formatMessage({ id: 'settings.documents.contract_templates_details.date_version' })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Box>
            <GenericField
              name="note"
              label={formatMessage({ id: 'settings.documents.contract_templates_details.note' })}
              disabled={!isEditing}
            />
          </Box>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
