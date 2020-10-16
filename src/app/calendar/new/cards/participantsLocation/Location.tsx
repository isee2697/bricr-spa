import React from 'react';
import { useForm } from 'react-final-form';
import classNames from 'classnames';

import { AppointmentLocation, TravelTime } from 'api/types';
import { DropdownField, GenericField, SelectField } from 'form/fields';
import { ConferenceRoomIcon, EuroIcon, LocationIcon, UserIcon } from 'ui/atoms/icons';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { Grid, Box, Typography, Button, Collapse, MenuItem } from 'ui/atoms';
import { AvatarRowItem } from 'ui/atoms/avatarRowItem/AvatarRowItem';
import { useStyles } from 'app/calendar/new/cards/participantsLocation/ParticipantsLocation.styles';
import { useLocale } from 'hooks';

export const Locations = ({ locations }: { locations: AppointmentLocation[] }) => {
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

  return (
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
                          <UserIcon fontSize="small" /> {item.availableSeats}
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
          <Box mb={2}>
            <SelectField
              label="appointment.travel.label_before"
              placeholder="appointment.travel.placeholder_before"
              className={classes.select}
              name="travelBeforeAppointment"
            >
              {Object.keys(TravelTime).map((item, key) => (
                <MenuItem key={key} value={item}>
                  {formatMessage({ id: `dictionaries.appointment.travel.${item}` })}
                </MenuItem>
              ))}
            </SelectField>
          </Box>
          <Box>
            <SelectField
              label="appointment.travel.label_after"
              placeholder="appointment.travel.placeholder_after"
              className={classes.select}
              name="travelAfterAppointment"
            >
              {Object.keys(TravelTime).map((item, key) => (
                <MenuItem key={key} value={item}>
                  {formatMessage({ id: `dictionaries.appointment.travel.${item}` })}
                </MenuItem>
              ))}
            </SelectField>
          </Box>
        </Collapse>
      </Grid>
    </Grid>
  );
};
