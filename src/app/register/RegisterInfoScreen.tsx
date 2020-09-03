import React from 'react';

import { Grid } from 'ui/atoms';
import { useClaimSpaceHook } from '../../hooks/useClaimSpaceHook/useClaimSpaceHook';

import { useStyles } from './RegisterInfoScreen.styles';

export const RegisterInfoScreen = () => {
  const { isClaimed, spaceName } = useClaimSpaceHook();
  const classes = useStyles();

  return (
    <Grid item md={12} lg={6} xl={4} className={classes.root}>
      {isClaimed !== undefined ? spaceName : ''}
    </Grid>
  );
};
