import React from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { useEntityType } from 'app/shared/entityType';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Emoji,
  Grid,
  IconButton,
  NavBreadcrumb,
  ProgressFilling,
  Typography,
} from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { AddIcon, CardsIcon, LocationIcon, ManageIcon, MenuIcon, SearchIcon } from 'ui/atoms/icons';
import { PropertyRelatedItems, PropertyType } from 'api/types';

import { useStyles } from './YourNewHome.styles';

export const BusinessJourneyYourNewHome = () => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const classes = useStyles();

  const homes = [
    {
      image: 'http://placeimg.com/176/112/arch',
      dateCreated: DateTime.local(),
      name: 'Van der Meerstraat 45, Amersfoort',
      size: 65,
      rooms: 2,
      properties: [PropertyType.Apartment],
      propertyRelatedItems: [PropertyRelatedItems.Balcony, PropertyRelatedItems.Terrace],
      price: 358000,
      matchStrength: 0.56,
      finalPrice: 350000,
      finalPriceUpdated: DateTime.local(),
      conditions: {
        takeOverListOfCases: true,
        technicalBuildingInspection: true,
        reservationOfFunding: true,
      },
      requiredDocuments: {
        salesContract: true,
        driverLicense: true,
        employmentConfirmation: false,
      },
      status: 'Candidate',
    },
  ];

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.business_journey.your_new_home.title' })}
        to="/business_journey/your_new_home"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.details.business_journey.your_new_home.title' })}
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
            {homes.map((home, index) => (
              <Box className={classes.row}>
                <Box display="flex" className={classes.rowItem}>
                  <Box>
                    <Typography variant="h6" className={classes.itemNo}>
                      {index + 1}
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" width="100%">
                    <Box display="flex" width="100%">
                      <Box>
                        <Avatar variant="rounded" src={home.image} className={classes.image}>
                          {!home.image && <Emoji>{'📷'}</Emoji>}
                        </Avatar>
                      </Box>
                      <Box width="100%">
                        <Box display="flex" justifyContent="space-between" mb={2}>
                          <Box>
                            <Typography variant="h6" className={classes.createdTime}>
                              {formatMessage({ id: 'crm.details.business_journey.hours_ago' }, { before: 1 })}
                            </Typography>
                            <Typography variant="h3" className={classes.fontWeightMedium}>
                              {home.name}
                            </Typography>
                            <Box display="flex">
                              <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                                {formatMessage({ id: 'crm.details.business_journey.room_size' }, { size: home.size })}
                              </Typography>
                              <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                                {formatMessage({ id: 'crm.details.business_journey.rooms' }, { rooms: home.rooms })}
                              </Typography>
                              {home.properties.map((property, index) => (
                                <Typography
                                  key={index}
                                  variant="h6"
                                  className={clsx(classes.property, classes.fontWeightMedium)}
                                >
                                  {formatMessage({ id: `crm.details.business_journey.properties.${property}` })}
                                </Typography>
                              ))}
                            </Box>
                            <Typography variant="h3" className={clsx(classes.price, classes.fontWeightMedium)}>
                              € {home.price}
                            </Typography>
                            <Box>
                              <Typography
                                variant="h6"
                                className={clsx(classes.matchStrengthLabel, classes.fontWeightMedium)}
                              >
                                {formatMessage(
                                  { id: 'crm.details.business_journey.match_strenth' },
                                  { percentage: Math.floor(home.matchStrength * 100) },
                                )}
                              </Typography>
                              <ProgressFilling progress={home.matchStrength ?? 0} />
                            </Box>
                          </Box>
                          <Box>
                            <IconButton className="menu-icon" variant="rounded" size="small" onClick={() => {}}>
                              <MenuIcon />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Grid container spacing={1}>
                      <Grid item xs={2}>
                        <Box mb={2}>
                          <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                            {formatMessage({ id: 'crm.details.business_journey.your_new_home.final_price' })}
                          </Typography>
                        </Box>
                        <Typography variant="h4">€ {home.finalPrice}</Typography>
                        <Typography variant="h6" className={classes.gray}>
                          {home.finalPriceUpdated.toLocaleString(DateTime.DATE_MED)}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Box mb={2}>
                          <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                            {formatMessage({ id: 'crm.details.business_journey.your_new_home.conditions' })}
                          </Typography>
                        </Box>
                        <Typography
                          variant="h6"
                          className={clsx(home.conditions.takeOverListOfCases ? '' : classes.conditionUnavailable)}
                        >
                          {formatMessage({ id: 'crm.details.business_journey.condition.take_over_list_of_cases' })}
                        </Typography>
                        <Typography
                          variant="h6"
                          className={clsx(
                            home.conditions.technicalBuildingInspection ? '' : classes.conditionUnavailable,
                          )}
                        >
                          {formatMessage({
                            id: 'crm.details.business_journey.condition.technical_building_inspection',
                          })}
                        </Typography>
                        <Typography
                          variant="h6"
                          className={clsx(home.conditions.reservationOfFunding ? '' : classes.conditionUnavailable)}
                        >
                          {formatMessage({ id: 'crm.details.business_journey.condition.reservation_of_funding' })}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Box mb={2}>
                          <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                            {formatMessage({ id: 'crm.details.business_journey.your_new_home.final_price' })}
                          </Typography>
                        </Box>
                        <Typography
                          variant="h6"
                          className={clsx(home.requiredDocuments.salesContract ? '' : classes.documentsUnavailable)}
                        >
                          {formatMessage({ id: 'crm.details.business_journey.document.sales_contract' })}
                        </Typography>
                        <Typography
                          variant="h6"
                          className={clsx(home.requiredDocuments.driverLicense ? '' : classes.documentsUnavailable)}
                        >
                          {formatMessage({ id: 'crm.details.business_journey.document.driver_license' })}
                        </Typography>
                        <Typography
                          variant="h6"
                          className={clsx(
                            home.requiredDocuments.employmentConfirmation ? '' : classes.documentsUnavailable,
                          )}
                        >
                          {formatMessage({ id: 'crm.details.business_journey.document.employment_confirmation' })}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Box mb={2}>
                          <Typography variant="h6" className={clsx(classes.bold, classes.gray)}>
                            {formatMessage({ id: 'crm.details.business_journey.your_new_home.final_price' })}
                          </Typography>
                        </Box>
                        <Typography variant="h4" className={classes.bold}>
                          {formatMessage({ id: `crm.details.business_journey.your_new_home.${home.status}` })}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
