import React from 'react';
import { useForm } from 'react-final-form';
import classNames from 'classnames';

import { AppointmentLocation } from 'api/types';
import { DropdownField, GenericField } from 'form/fields';
import { ConferenceRoomIcon, LocationIcon, UserIcon } from 'ui/atoms/icons';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { Grid, Box, Typography, Button, Collapse } from 'ui/atoms';
import { AvatarRowItem } from 'ui/atoms/avatarRowItem/AvatarRowItem';
import { useLocale } from 'hooks';

import { useStyles } from './ParticipantsLocation.styles';
import { TravelTime } from './ParticipantsLocation.types';

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

  const timeDropdownItems: DropdownItem[] = Object.keys(TravelTime).map((item, key) => ({
    label: formatMessage({ id: `dictionaries.appointment.travel.${item}` }),
    value: item,
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
          <DropdownField
            items={timeDropdownItems}
            label="appointment.travel.label_before"
            placeholder="appointment.travel.placeholder_before"
            name="travelBeforeAppointment"
          />
          <DropdownField
            items={timeDropdownItems}
            label="appointment.travel.label_After"
            placeholder="appointment.travel.placeholder_After"
            name="travelAfterAppointment"
          />
        </Collapse>
      </Grid>
    </Grid>
  );
};
