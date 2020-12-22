import React from 'react';
import { DateTime } from 'luxon';

import { Box } from 'ui/atoms';
import { Page } from 'ui/templates';
import { Grid } from 'ui/atoms';

import { Header } from './header/Header';
import { useStyles } from './SalesInvoiceDetails.styles';
import { SalesInvoiceDetailsProps } from './SalesInvoiceDetails.types';
import { General } from './boards/general/General';
import { Conditions } from './boards/conditions/Conditions';
import { Description } from './boards/description/Description';
import { AccountManager } from './boards/accountManager/AccountManager';
import { Reference } from './boards/reference/Reference';
import { Dates } from './boards/dates/Dates';
import { ExtraInformation } from './boards/extraInformation/ExtraInformation';
import { RulesList } from './boards/rulesList/RulesList';
import { TaxBreakdown } from './boards/taxBreakdown/TaxBreakdown';
import { Prices } from './boards/prices/Prices';
import { LinkedItems } from './boards/linkedItems/LinkedItems';

export const SalesInvoiceDetails = ({ breadcrumbs }: SalesInvoiceDetailsProps) => {
  const classes = useStyles();

  const handleSave = async () => {
    return undefined;
  };

  return (
    <>
      {breadcrumbs}
      <Box className={classes.content}>
        <Page
          withoutHeader
          dateUpdated={DateTime.local().toISO()}
          updatedBy={{ id: '0001', firstName: 'Christian', lastName: 'Gils' }}
        >
          <Grid item xs={12}>
            <Header />
            <Box mt={2} />
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <General />
                  </Grid>
                  <Grid item xs={6}>
                    <Conditions onSave={handleSave} />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Description onSave={handleSave} />
                </Box>
                <Box mt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <AccountManager />
                    </Grid>
                    <Grid item xs={6}>
                      <Reference onSave={handleSave} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Dates onSave={handleSave} />
              </Grid>
            </Grid>
            <Box mt={2}>
              <ExtraInformation onSave={handleSave} />
            </Box>
            <Box mt={2}>
              <LinkedItems />
            </Box>
            <Box mt={2}>
              <RulesList />
            </Box>
            <Box mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <TaxBreakdown />
                </Grid>
                <Grid item xs={5}>
                  <Prices />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Page>
      </Box>
    </>
  );
};
