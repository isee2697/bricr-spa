import React from 'react';
import { DateTime } from 'luxon';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import { Box, Card, CardContent, CardHeader, Typography, Grid } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './Cadastre.styles';

export const Cadastre = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  const defaultCenter = {
    lat: 52.3676,
    lng: 4.9041,
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.outside.cadastre.title' })} />
      <CardContent>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.surface_cadastral_plot' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            300 m<sup>2</sup>
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.type_of_ownership' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            Stressed in charge of Usefruct
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.leaseholder' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            Different, Township
          </Typography>
        </Box>
        <Box className={classes.detailItem}>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_information' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            Variable, Fixed
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_duration' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Constantly, Forever
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_end_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {DateTime.local().toFormat('dd-MM-yyyy')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.ground_lease_price_year' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              1250000 <EuroIcon className={classes.detailItemPriceIcon} />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.share' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              10/130
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.bought_off_date' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              {DateTime.local().toFormat('dd-MM-yyyy')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.cadastre.bought_off_perpetually' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Yes
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box width="100%" className={classes.map}>
              <LoadScript googleMapsApiKey={'AIzaSyDOiSKrGgdo3qVzKq579nQSK2UO6pBPVAY'}>
                <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
              </LoadScript>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
