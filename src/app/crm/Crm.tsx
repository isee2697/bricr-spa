import React from 'react';

import { Grid } from 'ui/atoms';

import { CrmProps } from './Crm.types';
import { useStyles } from './Crm.style';
import { CrmHeader } from './crmHeader/CrmHeader';
import { CrmSidebarMenu } from './crmSidebarMenu/CrmSidebarMenu';

export const Crm = ({ type, onTypeChange }: CrmProps) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <CrmSidebarMenu type={type} onTypeChange={onTypeChange} />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Grid container spacing={3} className={classes.content}>
            <CrmHeader type={type} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
