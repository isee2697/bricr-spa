import React from 'react';

import { Card, CardContent } from 'ui/atoms';
import { Map as EsriMap } from 'ui/molecules';

import { useStyles } from './Map.styles';
import { MapProps } from './Map.types';

export const Map = ({ latitude, longitude }: MapProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.mapWrapper}>
        <EsriMap lat={latitude} lng={longitude} isShowPin />
      </CardContent>
    </Card>
  );
};
