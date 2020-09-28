import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  NavBreadcrumb,
  Tab,
  Tabs,
  Typography,
} from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AddIcon, CardsIcon, HelpIcon, LocationIcon, ManageIcon, MenuIcon, SearchIcon } from '../../../ui/atoms/icons';
import { joinUrlParams } from '../../../routing/AppRoute.utils';
import { useEntityType } from '../../shared/entityType';

import {
  CrmRelationsDetailsCustomerJourneyProps,
  CrmRelationsDetailsCustomerJourneyTab,
} from './CrmRelationsDetailsCustomerJourney.types';
import { useStyles } from './CrmRelationsDetailsCustomerJourney.styles';
import { ListItem } from './listItem/ListItem';

export const CrmRelationsDetailsCustomerJourney = ({
  crm: { name },
  items,
  status,
  onStatusChange,
}: CrmRelationsDetailsCustomerJourneyProps) => {
  const customerJourneyTabs = [
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Matches,
      hasBadge: true,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Interests,
      hasBadge: true,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Viewings,
      hasBadge: true,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Biddings,
      hasBadge: true,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Candidate,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Optant,
    },
  ];

  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const isShowListHeader =
    status === CrmRelationsDetailsCustomerJourneyTab.Matches ||
    status === CrmRelationsDetailsCustomerJourneyTab.Interests;

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
                value={status}
                onChange={(event, value) => onStatusChange(value)}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                classes={{ indicator: classes.activeTabIndicator }}
              >
                {customerJourneyTabs.map(tab => (
                  <Tab
                    key={tab.key}
                    value={tab.key}
                    label={
                      tab.hasBadge ? (
                        <Badge className={classes.badge} badgeContent={4}>
                          {formatMessage({ id: `crm.details.customer_journey.${tab.key}` })}
                        </Badge>
                      ) : (
                        <>{formatMessage({ id: `crm.details.customer_journey.${tab.key}` })}</>
                      )
                    }
                  />
                ))}
              </Tabs>
              <List
                items={items.map((item, index) => ({ ...item, index }))}
                itemIndex={'id'}
                loadingItem={<PropertyItemPlaceholder />}
                isShowHeader={isShowListHeader}
                emptyTitle={formatMessage({ id: 'crm.list.empty_title' })}
                emptyDescription={formatMessage(
                  { id: 'crm.list.empty_description' },
                  { buttonName: formatMessage({ id: 'crm.details.customer_journey.add' }) },
                )}
                renderItem={(item, checked, checkbox) => (
                  <ListItem
                    key={item.id}
                    isShowListHeader={isShowListHeader}
                    isShowNumber={!isShowListHeader}
                    status={status}
                    item={item}
                    checkbox={checkbox}
                    checked={checked}
                  />
                )}
              />
            </Box>
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
