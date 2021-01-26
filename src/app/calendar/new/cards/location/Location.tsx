import React from 'react';
import { useForm } from 'react-final-form';
import classNames from 'classnames';

import { DropdownField, GenericField, QuantityField } from 'form/fields';
import { ConferenceRoomIcon, LocationIcon, UserIcon } from 'ui/atoms/icons';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { Grid, Box, Typography, Button, Collapse, Card, CardContent, Tab, Tabs } from 'ui/atoms';
import { AvatarRowItem } from 'ui/atoms/avatarRowItem/AvatarRowItem';
import { useLocale } from 'hooks';

import { useStyles } from './Location.styles';
import { TravelTime, LocationProps } from './Location.types';

export const Location = ({ locations }: LocationProps) => {
  const fieldName = 'location';
  const insideOfficeFieldName = 'isInsideOffice';
  const form = useForm();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const values = form.getState().values;
  const isInsideOffice = values?.[insideOfficeFieldName] ?? true;

  const items: DropdownItem[] = locations.map(location => ({
    value: location.id,
    label: (
      <Box display="flex">
        <ConferenceRoomIcon />
        <Box mt={1} ml={2}>
          {location.name}
        </Box>
      </Box>
    ),
  }));

  const timeDropdownItems: DropdownItem[] = Object.entries(TravelTime).map(([key, value], index) => ({
    label: formatMessage({ id: `dictionaries.appointment.travel.${key}` }),
    value: value,
  }));

  return (
    <Card>
      <Tabs className={classes.tabs} value={0} indicatorColor="primary">
        <Tab label={formatMessage({ id: 'appointment.location.title' })} />
      </Tabs>
      <CardContent>
        <Grid container>
          <Button
            className={classes.buttons}
            disabled={isInsideOffice}
            onClick={() => form.change(insideOfficeFieldName, true)}
            variant="outlined"
          >
            {formatMessage({ id: 'appointment.inside_office' })}
          </Button>
          <Button
            className={classNames(classes.buttons, 'last')}
            disabled={!isInsideOffice}
            onClick={() => form.change(insideOfficeFieldName, false)}
            variant="outlined"
          >
            {formatMessage({ id: 'appointment.outside_office' })}
          </Button>

          <Grid item xs={12}>
            <Collapse in={isInsideOffice}>
              <DropdownField items={items} placeholder={'appointment.location.placeholder'} name={fieldName} />
              {!values?.[fieldName] && locations && (
                <>
                  <Box mt={2} mb={2}>
                    <Typography variant="h5">{formatMessage({ id: 'appointment.suggested_locations' })}</Typography>
                  </Box>
                  {locations
                    .filter(loc => loc.suggest)
                    .map(item => (
                      <AvatarRowItem
                        content={
                          <Box>
                            <Typography className={classes.boldText} variant="h5">
                              {item.name}
                            </Typography>
                            <Box className={classes.iconBox} display="flex" alignItems="center">
                              <UserIcon fontSize="small" /> {item.availablePlaces}
                            </Box>
                          </Box>
                        }
                        onClick={() => form.change(fieldName, item.id)}
                        icon={<ConferenceRoomIcon />}
                      />
                    ))}
                </>
              )}
            </Collapse>
            <Collapse in={!isInsideOffice}>
              <Box mt={2} mb={2}>
                <GenericField
                  InputProps={{ endAdornment: <LocationIcon /> }}
                  name="outsideLocation"
                  label="appointment.location.label"
                  placeholder="appointment.location.placeholder"
                />
              </Box>
              <QuantityField min={0} name="travelTimeBefore" label="appointment.travel.label_before" />
              <DropdownField
                items={timeDropdownItems}
                label="appointment.travel.label_After"
                placeholder="appointment.travel.placeholder_After"
                name="travelTimeAfter"
              />
            </Collapse>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
