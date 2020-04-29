import React from 'react';
import Fade from '@material-ui/core/Fade';

import { useOverlayState } from 'hooks/useOverlayState/useOverlayState';

import { useStyles } from './Overlay.styles';

export const Overlay = () => {
  const classes = useStyles();
  const isOverlayActive = useOverlayState();

  return (
    <Fade in={isOverlayActive}>
      <div className={classes.root} />
    </Fade>
  );
};
