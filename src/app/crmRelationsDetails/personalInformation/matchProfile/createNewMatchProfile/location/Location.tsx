import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  InputAdornment,
  Switch,
  TextField,
} from 'ui/atoms';
import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { SearchIcon } from 'ui/atoms/icons';

import { useStyles } from './Location.styles';
import { LocationMap } from './locationMap/LocationMap';

export const Location = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

  const onSave = async () => {
    return undefined;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.location.title' })}
        action={
          <FormControlLabel
            control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
            label={formatMessage({ id: 'form_section.edit_mode' })}
            labelPlacement="start"
          />
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} mutators={{ ...arrayMutators }}>
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
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
