import React from 'react';
import { useParams } from 'react-router-dom';

import { Badge, Box, Card, CardContent, CardHeader, IconButton, NavBreadcrumb, Tab, Tabs } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AddIcon, CardsIcon, LocationIcon, ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';

import { BusinessJourneyProps, BusinessJourneyTab } from './BusinessJourney.types';
import { useStyles } from './BusinessJourney.styles';
import { ListItem } from './listItem/ListItem';

export const BusinessJourney = ({
  crm: { firstName, insertion, lastName },
  items,
  status,
  onStatusChange,
}: BusinessJourneyProps) => {
  const customerJourneyTabs = [
    {
      key: BusinessJourneyTab.Matches,
      hasBadge: true,
    },
    {
      key: BusinessJourneyTab.Interests,
      hasBadge: true,
    },
    {
      key: BusinessJourneyTab.Viewings,
      hasBadge: true,
    },
    {
      key: BusinessJourneyTab.Biddings,
      hasBadge: true,
    },
    {
      key: BusinessJourneyTab.Candidate,
    },
    {
      key: BusinessJourneyTab.Optant,
    },
  ];

  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const isShowListHeader = status === BusinessJourneyTab.Matches || status === BusinessJourneyTab.Interests;

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.business_journey.title' })}
        to="/business_journey"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.details.business_journey.title' })}
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
                          {formatMessage({ id: `crm.details.business_journey.${tab.key}` })}
                        </Badge>
                      ) : (
                        <>{formatMessage({ id: `crm.details.business_journey.${tab.key}` })}</>
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
                  { buttonName: formatMessage({ id: 'crm.details.business_journey.add' }) },
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
