import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { Card, CardContent } from 'ui/atoms';

import { useStyles } from './Map.styles';

export const Map = () => {
  const classes = useStyles();
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
      <CardContent className={classes.mapWrapper}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </CardContent>
    </Card>
  );
};
