import React from 'react';
import clsx from 'classnames';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Page } from 'ui/templates';
import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { BuildingIcon } from 'ui/atoms/icons';

import { SignsAndKeyProps } from './SignsAndKey.types';
import { useStyles } from './SignsAndKey.styles';
import { SignsContainer } from './signs/SignsContainer';
import { Keys } from './keys/Keys';

export const SignsAndKey = ({ summary, isSidebarVisible, onSidebarOpen }: SignsAndKeyProps) => {
  const classes = useStyles(summary);
  const { formatMessage } = useLocale();
  const { address } = summary;

  return (
    <>
      <PimDetailsHeader isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page withoutHeader classes={{ container: classes.summaryContainer }}>
        <Grid xs={12} item className={classes.summaryContent}>
          <Typography variant="h1" className={classes.fontWeightBold}>
            {formatMessage({ id: 'pim_details.summary.personal.title' })}
          </Typography>
          <Typography variant="h1" className={clsx(classes.marginTopTwo, classes.fontWeightMedium)}>
            <BuildingIcon className={classes.addressIcon} color="error" /> {address}
          </Typography>
          <Grid container spacing={3} className={classes.details}>
            <Grid item xs={6}>
              <SignsContainer />
            </Grid>
            <Grid item xs={6}>
              <Keys />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
