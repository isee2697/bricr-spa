import React from 'react';
import arrayMutators from 'final-form-arrays';

import { Box, Grid, InputAdornment, TextField, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { AogIcon, DeleteIcon, SearchIcon } from 'ui/atoms/icons';
import { QuantityField } from 'form/fields';
import { SubSectionProps } from '../CreateNewMatchProfile.types';

import { useStyles } from './Location.styles';
import { LocationMap } from './locationMap/LocationMap';

export const Location = ({ onSave }: SubSectionProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm onSave={onSave} mutators={{ ...arrayMutators }}>
      <FormSection
        title={formatMessage({
          id: 'crm.details.personal_information_match_profile.characteristics_property.title',
        })}
        isExpandable
        isInitExpanded
        isInitEditing
      >
        {isEditing => (
          <Grid item xs={12}>
            <LocationMap latitudeName="latitude" longitudeName="longitude" disabled={!isEditing} />
            <Box mt={3}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder={formatMessage({ id: 'common.search' })}
                className={classes.searchField}
                disabled={!isEditing}
              />
            </Box>
            <Box mt={3}>
              <Grid container spacing={8} alignItems="center" justify="space-between">
                <Grid item xs={8}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <AogIcon />
                    <Box flexGrow={1} flexShrink={1}>
                      <Typography variant="h5" className={classes.locationLabel}>
                        Stationsstraat 25, Amsterdam
                      </Typography>
                    </Box>
                    <DeleteIcon />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" className={classes.radiusLabel}>
                    {formatMessage({ id: 'crm.details.personal_information_match_profile.location.radius' })}
                  </Typography>
                  <QuantityField
                    label={formatMessage({ id: 'crm.details.personal_information_match_profile.location.meters' })}
                    name="radius"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}
      </FormSection>
    </AutosaveForm>
  );
};
