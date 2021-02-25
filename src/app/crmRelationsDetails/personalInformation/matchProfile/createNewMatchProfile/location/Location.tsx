import React from 'react';
import { useForm, useFormState } from 'react-final-form';
import { useParams } from 'react-router-dom';

import { Box, Grid, IconButton, InputAdornment, TextField, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { AogIcon, DeleteIcon, SearchIcon } from 'ui/atoms/icons';
import { QuantityField } from 'form/fields';
import { MatchProfileLocation } from 'api/types';

import { useStyles } from './Location.styles';
import { LocationMap } from './locationMap/LocationMap';

export const Location = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  const form = useForm();
  const formState = useFormState();

  const locations = formState.values?.locations || [];

  const handleRemoveLocation = (index: number) => {
    form.change(
      'locations',
      locations.filter((location: MatchProfileLocation, locationIndex: number) => locationIndex === index),
    );
  };

  return (
    <FormSection
      title={formatMessage({
        id: 'crm.details.personal_information_match_profile.characteristics_property.title',
      })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
    >
      {isEditing => (
        <Grid item xs={12}>
          <LocationMap
            latitudeName={`locations[${(locations || []).length}].latitude`}
            longitudeName={`locations[${(locations || []).length}].longitude`}
            disabled={!isEditing}
          />
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
          {(locations || []).map((location: MatchProfileLocation, index: number) => (
            <Box mt={3}>
              <Grid container spacing={8} alignItems="center" justify="space-between">
                <Grid item xs={8}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <AogIcon />
                    <Box flexGrow={1} flexShrink={1}>
                      <Typography variant="h5" className={classes.locationLabel}>
                        {location.street} {location.houseNumber}
                      </Typography>
                    </Box>
                    <IconButton size="small" variant="rounded" onClick={() => handleRemoveLocation(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h5" className={classes.radiusLabel}>
                    {formatMessage({ id: 'crm.details.personal_information_match_profile.location.radius' })}
                  </Typography>
                  <QuantityField
                    label={formatMessage({ id: 'crm.details.personal_information_match_profile.location.meters' })}
                    name={`locations[${index}].radius`}
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
        </Grid>
      )}
    </FormSection>
  );
};
