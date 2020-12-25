import { useEffect } from 'react';
import { loadModules } from 'esri-loader';
import { useTheme } from '@material-ui/core';

import { Pin as PinType } from '../LocationMap.types';

import pinSvg from './pin.svg';
import { PinProps } from './Pin.types';

export const Pin = ({ latitude, longitude, view }: PinProps) => {
  const { spacing } = useTheme();

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
        width: spacing(4),
        height: spacing(5),
      };

      const newPin = new Graphic({
        geometry: point,
        symbol: markerSymbol,
      }) as PinType;

      view.graphics.removeAll();
      view.graphics.add(newPin);
      view.center = [longitude, latitude];
    });
  }, [latitude, longitude, spacing, view]);

  if (!latitude || longitude) {
    return null;
  }

  return null;
};
