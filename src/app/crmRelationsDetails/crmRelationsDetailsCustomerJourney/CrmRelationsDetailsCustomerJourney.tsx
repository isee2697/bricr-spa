import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Badge, Box, Card, CardContent, CardHeader, IconButton, NavBreadcrumb, Tab, Tabs } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AddIcon, CardsIcon, LocationIcon } from 'ui/atoms/icons';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListPimsFilters } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import {
  CrmRelationsCustomerJourneyProperty,
  CrmRelationsDetailsCustomerJourneyProps,
  CrmRelationsDetailsCustomerJourneyTab,
} from './CrmRelationsDetailsCustomerJourney.types';
import { useStyles } from './CrmRelationsDetailsCustomerJourney.styles';
import { ListItem } from './listItem/ListItem';
import { ListItemBuyer } from './listItem/listItemBuyer/ListItemBuyer';
import { CrmRelationsCustomerJourneyFilters } from './dictionaries';

export const CrmRelationsDetailsCustomerJourney = ({
  items,
  status,
  activeFilters,
  onFilter,

  isOwner,
}: CrmRelationsDetailsCustomerJourneyProps) => {
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();

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
      key: CrmRelationsDetailsCustomerJourneyTab.Candidate,
      hasBadge: true,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Biddings,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Optant,
    },
    {
      key: CrmRelationsDetailsCustomerJourneyTab.Buyer,
      label: items?.[0].properties.includes(CrmRelationsCustomerJourneyProperty.RentPrice)
        ? CrmRelationsDetailsCustomerJourneyTab.Tenant
        : CrmRelationsDetailsCustomerJourneyTab.Buyer,
      hasBadge: true,
    },
  ];

  if (isOwner) {
    customerJourneyTabs.push({
      key: CrmRelationsDetailsCustomerJourneyTab.Owner,
      hasBadge: true,
    });
  }

  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const isShowListHeader =
    status === CrmRelationsDetailsCustomerJourneyTab.Matches ||
    status === CrmRelationsDetailsCustomerJourneyTab.Interests;
  const [isMapView, setMapView] = useState(false);

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.customer_journey.title' })}
        to="/customer_journey"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.details.customer_journey.title' })}
            action={
              <Box display="flex">
                <Box mr={2}>
                  <IconButton variant="rounded" size="small" onClick={() => setMapView(!isMapView)}>
                    <CardsIcon color={isMapView ? 'primary' : 'inherit'} />
                  </IconButton>
                </Box>
                <Box mr={2}>
                  <IconButton variant="rounded" size="small" onClick={() => {}}>
                    <LocationIcon />
                  </IconButton>
                </Box>
                <Box mr={2}>
                  <FiltersButton
                    data={activeFilters}
                    getActiveFilters={onFilter}
                    filters={CrmRelationsCustomerJourneyFilters}
                  />
                </Box>
                <IconButton aria-label="add" color="primary" size="small" onClick={() => {}}>
                  <AddIcon color="inherit" />
                </IconButton>
              </Box>
            }
          />
          <CardContent className={classes.noMargin}>
            <Box>
              <Tabs
                className={classes.tabs}
                value={status}
                onChange={(event, value) => {
                  push(AppRoute.crmRelationsDetailsJourney.replace(':id', id).replace(':role', value));
                }}
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
                        <Badge className={classes.badge} badgeContent={666}>
                          {formatMessage({ id: `crm.details.customer_journey.${tab.label ?? tab.key}` })}
                        </Badge>
                      ) : (
                        <>{formatMessage({ id: `crm.details.customer_journey.${tab.label ?? tab.key}` })}</>
                      )
                    }
                  />
                ))}
              </Tabs>
              {Object.keys(activeFilters).length > 0 && (
                <Box mt={-2}>
                  <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
                </Box>
              )}
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
                renderItem={(item, checked, checkbox) =>
                  status === CrmRelationsDetailsCustomerJourneyTab.Buyer ? (
                    <ListItemBuyer item={item} />
                  ) : (
                    <ListItem
                      key={item.id}
                      isShowListHeader={isShowListHeader}
                      isShowNumber={!isShowListHeader}
                      status={status}
                      item={item}
                      checkbox={checkbox}
                      checked={checked}
                    />
                  )
                }
              />
            </Box>
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
