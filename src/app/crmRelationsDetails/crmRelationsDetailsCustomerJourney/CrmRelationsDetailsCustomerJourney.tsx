import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Grid, Card, CardContent, CardHeader, IconButton, NavBreadcrumb, Tab, Tabs, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AddIcon, CardsIcon, HelpIcon, LocationIcon, ManageIcon, MenuIcon, SearchIcon } from '../../../ui/atoms/icons';
import { joinUrlParams } from '../../../routing/AppRoute.utils';
import { useEntityType } from '../../shared/entityType';

import { useStyles } from './CrmRelationsDetailsCustomerJourney.styles';
import {
  CrmRelationsDetailsCustomerJourneyProps,
  CrmRelationsDetailsCustomerJourneyTab,
} from './CrmRelationsDetailsCustomerJourney.types';

export const CrmRelationsDetailsCustomerJourney = ({ crm }: CrmRelationsDetailsCustomerJourneyProps) => {
  const customerJourneyTabs = [
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Matches,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Interests,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Viewings,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Biddings,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Candidate,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Optant,
    },
  ];

  const [customerJourneyTab, setCustomerJourneyTab] = useState<CrmRelationsDetailsCustomerJourneyTab>(
    CrmRelationsDetailsCustomerJourneyTab.Matches,
  );
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  const { name } = crm;

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.customer_journey.title' })}
        to="/dashboard"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {name}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.details.customer_journey.title' })}
            action={
              <>
                <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
                  <CardsIcon />
                </IconButton>
                <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
                  <LocationIcon />
                </IconButton>
                <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
                  <ManageIcon />
                </IconButton>
                <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
                  <SearchIcon />
                </IconButton>
                <IconButton aria-label="add" color="primary" size="small" onClick={() => {}}>
                  <AddIcon color="inherit" />
                </IconButton>
              </>
            }
          />
          <CardContent className={classes.noMargin}>
            <Box>
              <Tabs
                className={classes.tabs}
                value={customerJourneyTab}
                onChange={(event, value) => setCustomerJourneyTab(value)}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                classes={{ indicator: classes.activeTabIndicator }}
              >
                {customerJourneyTabs.map(tab => (
                  <Tab
                    key={tab.key}
                    value={tab.key}
                    label={formatMessage({ id: `crm.details.customer_journey.${tab.key}` })}
                  />
                ))}
              </Tabs>
            </Box>
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
