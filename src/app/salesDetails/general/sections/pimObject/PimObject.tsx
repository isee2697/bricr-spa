import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  Typography,
} from 'ui/atoms';
import { AddIcon, ArrowUpIcon, LinkIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { FormSubSectionHeader, InfoSection } from 'ui/molecules';
import { GenericField } from 'form/fields';

export const PimObject = () => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'sales_details.general.pim_object' })}
        action={
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
            />
            <Box ml={3} />
            <IconButton size="small" variant="circle" color="primary">
              <AddIcon />
            </IconButton>
            <Box ml={3} />
            <IconButton size="small" variant="roundedContained" onClick={() => {}}>
              <ArrowUpIcon />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
          <InfoSection emoji="🤔" color="gradient">
            <Typography variant="h3">
              {formatMessage({
                id: 'sales_details.general.link_object.linked_object.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'sales_details.general.link_object.linked_object.empty_description',
              })}
            </Typography>
            <Box mt={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {}}
                startIcon={<LinkIcon color="inherit" />}
                size="small"
              >
                {formatMessage({ id: 'sales_details.general.linked_object.link_object' })}
              </Button>
            </Box>
          </InfoSection>
          <Box mt={3} />
          <FormControlLabel
            control={<Checkbox color="primary" onChange={() => {}} name="notPimObject" disabled={!isEditing} />}
            label={
              <Typography variant="h4">{formatMessage({ id: 'sales_details.general.not_a_pim_object' })}</Typography>
            }
          />
          <FormSubSectionHeader title={formatMessage({ id: 'sales_details.general.address' })} noBorder />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="country"
                label={formatMessage({ id: 'sales_details.general.country' })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={5}>
              <GenericField
                name="city"
                label={formatMessage({ id: 'sales_details.general.city' })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={3}>
              <GenericField
                name="zipCode"
                label={formatMessage({ id: 'sales_details.general.zip_code' })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <GenericField
                name="street"
                label={formatMessage({ id: 'sales_details.general.street' })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={3}>
              <GenericField
                name="houseNumber"
                label={formatMessage({ id: 'sales_details.general.house_number' })}
                disabled={!isEditing}
              />
            </Grid>
            <Grid item xs={3}>
              <GenericField
                name="addition"
                label={formatMessage({ id: 'sales_details.general.addition' })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <GenericField
            name="extraAddressInformation"
            label={formatMessage({ id: 'sales_details.general.extra_address_information' })}
            disabled={!isEditing}
          />
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
