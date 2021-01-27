import React from 'react';
import { Grid, useTheme } from '@material-ui/core';
import { DateTime } from 'luxon';

import { Box, Dialog, DialogContent, IconButton, Typography } from 'ui/atoms';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import {
  AlertIcon,
  BuildingIcon,
  CloseIcon,
  CrmIcon,
  EditIcon,
  LocationIcon,
  RefreshIcon,
  ShareIcon,
  TravelAfterIcon,
  TravelBeforeIcon,
  UnseeIcon,
} from 'ui/atoms/icons';

import { useStyles } from './AppointmentModal.styles';

export const AppointmentModal = () => {
  const { isOpen } = useModalState('appointment-detail');
  const { close } = useModalDispatch();
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();

  const handleClose = () => {
    close('appointment-detail');
  };

  const mockData = {
    travelBefore: 15,
    time: DateTime.local(),
    street: 'Weerschijnvilinder 8',
    zipCode: 4814,
    city: 'Breda',
    invitedPersons: [
      {
        name: 'Mevr. N.C.A. (novita) Smith',
        phone: '0641862725',
        email: 'novita_smit@hotmail.com',
      },
    ],
    crms: [
      {
        address: 'Weerschijnvlinder 8',
        zipCode: 4814,
        city: 'Breda',
      },
    ],
    people: [
      {
        name: 'Gerard de Boer',
      },
      {
        name: 'Leroy Janssen',
      },
    ],
    description:
      'Mevrouw komt eerste keer alleen, maar er volgt sowieso een tweede bezichtiging waarbij haar man mee komt.',
  };

  return (
    <Dialog fullWidth open={isOpen} onClose={handleClose}>
      <DialogContent>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <Typography variant="h1">{formatMessage({ id: 'calendar.appointment' })}</Typography>
            <IconButton variant="rounded" size="small">
              <UnseeIcon />
            </IconButton>
            <IconButton variant="rounded" size="small">
              <RefreshIcon color={theme.palette.gray.main} />
            </IconButton>
          </Box>
          <Box>
            <IconButton aria-label="close" variant="roundedContained" size="small">
              <EditIcon />
            </IconButton>
            <Box ml={1.5} />
            <IconButton aria-label="close" variant="roundedContained" size="small" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <TravelBeforeIcon />
          <Box ml={1} />
          <Typography variant="h6" color="textSecondary">
            {formatMessage({ id: 'calendar.appointment.traveltime_before' }, { travelTimeBefore: 15 })}
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Box ml={4}>
              <Typography variant="h4">{mockData.time.toLocaleString(DateTime.DATETIME_FULL)}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" alignItems="flex-start">
              <LocationIcon color="disabled" />
              <Box>
                <Typography variant="h4" color="textSecondary">
                  {mockData.street}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  {mockData.zipCode} {mockData.city}
                </Typography>
              </Box>
              <IconButton size="small" variant="rounded" className={classes.btnShare}>
                <ShareIcon color="inherit" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" alignItems="center">
          <TravelAfterIcon />
          <Box ml={1} />
          <Typography variant="h6" color="textSecondary">
            {formatMessage({ id: 'calendar.appointment.traveltime_after' }, { travelTimeAfter: 20 })}
          </Typography>
        </Box>
        <Box mt={3}>
          <Grid container spacing={1}>
            {mockData.invitedPersons.map(invitedPerson => (
              <>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-start">
                    <Box className={classes.grayIcon} display="flex" alignItems="center" justifyContent="center">
                      <CrmIcon color="inherit" />
                    </Box>
                    <Box ml={2}>
                      <Typography variant="h4" color="textSecondary">
                        {invitedPerson.name}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        {invitedPerson.phone}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        {invitedPerson.email}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-start">
                    <AlertIcon color="error" />
                    <Typography variant="h5" color="error">
                      otd get./ Staat in Copaan. Gerard 1e keer mee.
                    </Typography>
                  </Box>
                </Grid>
              </>
            ))}
            {mockData.crms.map(crm => (
              <>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-start">
                    <Box className={classes.grayIcon} display="flex" alignItems="center" justifyContent="center">
                      <BuildingIcon color="inherit" />
                    </Box>
                    <Box ml={2}>
                      <Typography variant="h4" color="textSecondary">
                        {crm.address}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        {crm.zipCode} {crm.city}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="flex-start">
                    <AlertIcon color="error" />
                    <Typography variant="h5" color="error">
                      Kat niet laten ontsnappen!
                    </Typography>
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
        <Box mt={1} px={0.5} display="flex" className={classes.grayBack}>
          <CrmIcon />
          <Box display="flex" flexWrap ml={2}>
            {mockData.people.map(person => (
              <Box mr={6}>
                <Typography variant="h4" color="textSecondary">
                  {person.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box mt={3}>
          <Typography variant="h4">{formatMessage({ id: 'calendar.appointment.description' })}</Typography>
          <Typography variant="h4" color="textSecondary">
            {mockData.description}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
