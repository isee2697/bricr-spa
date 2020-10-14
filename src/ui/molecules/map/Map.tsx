import React from 'react';
import { Map as EsriMap } from '@esri/react-arcgis';

import { Pin } from './pin/Pin';
import { MapProps } from './Map.types';

const defaultLat = 50.3158481;
const defaultLng = 19.1242141;

export const Map = ({ lat = defaultLat, lng = defaultLng, zoom = 6, isShowPin = false }: MapProps) => {
  const center = [lat, lng];

  return (
    <EsriMap
      viewProperties={{
        center,
        zoom,
      }}
    >
      {isShowPin ? <Pin latitude={lat} longitude={lng} /> : <></>}
    </EsriMap>
  );
};
