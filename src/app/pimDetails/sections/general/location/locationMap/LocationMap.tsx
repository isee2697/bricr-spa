import { EventProperties } from '@esri/react-arcgis/dist/esm/components/ArcBase';

import React from 'react';
import { useForm, useFormState } from 'react-final-form';
import { Map } from '@esri/react-arcgis';

import { LocationMapProps } from './LocationMap.types';
import { useStyles } from './LocationMap.styles';
import { Pin } from './pin/Pin';

const defaultCenter = [50.3158481, 19.1242141];

export const LocationMap = ({ latitudeName, longitudeName, disabled }: LocationMapProps) => {
  const styles = useStyles();

  const form = useForm();
  const formState = useFormState();
  const lng = formState.values[longitudeName];
  const lat = formState.values[latitudeName];

  const handleMapClick = (event: EventProperties) => {
    const { mapPoint } = event;
    const { latitude, longitude } = mapPoint;

    form.change(latitudeName, latitude);
    form.change(longitudeName, longitude);
  };

  return (
    <div className={styles.container}>
      {disabled && <div className={styles.disabledOverlay} />}
      <Map
        onClick={handleMapClick}
        viewProperties={{
          center: lat && lng ? [lng, lat] : defaultCenter,
          zoom: 6,
        }}
        className={styles.map}
      >
        <Pin latitude={lat} longitude={lng} />
      </Map>
    </div>
  );
};
