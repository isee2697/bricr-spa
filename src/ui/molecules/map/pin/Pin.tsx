import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

import { Pin as PinType } from '../Map.types';

import pinSvg from './pin.svg';
import { PinProps } from './Pin.types';

export const Pin = ({ latitude, longitude, view }: PinProps) => {
  useEffect(() => {
    if (!latitude || !longitude || !view) {
      return;
    }

    loadModules(['esri/Graphic']).then(([Graphic]) => {
      const point = {
        type: 'point',
        latitude,
        longitude,
      };

      const markerSymbol = {
        type: 'picture-marker',
        url: pinSvg,
        width: '32px',
        height: '40px',
      };

      const newPin = new Graphic({
        geometry: point,
        symbol: markerSymbol,
      }) as PinType;

      view.graphics.removeAll();
      view.graphics.add(newPin);
      view.center = [longitude, latitude];
    });
  }, [latitude, longitude, view]);

  if (!latitude || longitude) {
    return null;
  }

  return null;
};
