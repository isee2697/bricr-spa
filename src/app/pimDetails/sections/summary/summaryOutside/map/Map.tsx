import React from 'react';
import { Card, CardContent } from 'ui/atoms';
import { Map as EsriMap } from 'ui/molecules';

import { useStyles } from './Map.styles';

export const Map = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.mapWrapper}>
        <EsriMap isShowPin />
      </CardContent>
    </Card>
  );
};
