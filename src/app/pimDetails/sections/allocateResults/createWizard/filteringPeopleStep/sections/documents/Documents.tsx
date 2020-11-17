import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch, Typography } from 'ui/atoms';
import { ArrowDownIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { CheckboxField, QuantityField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../../FilteringPeopleStep.styles';

export const Documents = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    return undefined;
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'pim_details.allocate_results.documents.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton variant="roundedContained" aria-label="open" size="small" onClick={() => {}}>
              <ArrowDownIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h3">
                {formatMessage({
                  id: 'pim_details.allocate_results.filtering_people.accepted_number_of_missing_documents',
                })}
              </Typography>
              <Grid container spacing={1} className={classes.marginTopFour}>
                <Grid item xs={4}>
                  <QuantityField label={formatMessage({ id: 'common.documents' })} name="acceptedMissingDocuments" />
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.marginTopFour}>
              <CheckboxField
                name="onlyAcceptedDocuments"
                label={formatMessage({
                  id: 'pim_details.allocate_results.filtering_people.only_accepted_documents',
                })}
              />
            </Box>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
