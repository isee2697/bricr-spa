import React from 'react';
import { Page } from 'ui/templates';
import { Grid, Box, Card, CardContent } from 'ui/atoms';
import { useLocale } from 'hooks';
import { useGetBillingQuery } from 'api/types';

import { useStyles } from './BillingContainer.styles';

export const BillingContainer = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { data } = useGetBillingQuery();

  return (
    <>
      <Page
        title={formatMessage({ id: 'settings.billing.title' })}
        placeholder="settings.workflow_templates.description_placeholder"
        showHeader
        headerProps={{ customAction: <></> }}
      >
        <Grid item xs={12} className={classes.root}>
          <Card>
            <Box p={2}>
              <CardContent>
                <iframe
                  title={formatMessage({ id: 'settings.billing.title' })}
                  src={data?.getBilling?.url}
                  width="100%"
                  height="669"
                  className={classes.iFrame}
                />
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
