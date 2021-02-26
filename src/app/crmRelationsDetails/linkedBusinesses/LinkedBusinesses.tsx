import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import groupBy from 'lodash/groupBy';
import { DateTime } from 'luxon';

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
  Typography,
} from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { useLocale, useModalDispatch } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Page } from 'ui/templates';
import { AddIcon } from 'ui/atoms/icons';
import { LinkBusinessType } from 'app/shared/linkBusinessModal/LinkBusinessModal.types';
import { LinkBusinessModalContainer } from 'app/shared/linkBusinessModal/LinkBusinessModalContainer';
import { InfoSection, ListOptionsMenu } from 'ui/molecules';
import { FormSubSection } from 'ui/organisms';

import { LinkedBusinessesProps, LinkedBusinessItem } from './LinkedBusinesses.types';
import { useStyles } from './LinkedBusinesses.styles';

export const LinkedBusinesses = ({ isSidebarVisible, onSidebarOpen }: LinkedBusinessesProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const classes = useStyles();
  const { open, close } = useModalDispatch();

  const [businesses, setBusinesses] = useState<LinkedBusinessItem[]>([]);

  const handleLinkBusiness = async (businessId: string | null, linkType: LinkBusinessType) => {
    close('link-business');

    setBusinesses([
      {
        id: '0001',
        email: 'mail01@mail.com',
        phone: '123456789',
        image: 'http://placeimg.com/168/140/arch',
        name: 'Ikea',
        street: 'Isenburgstraat 36',
        postalCode: '1414 VA',
        city: 'Breda',
        linkType: LinkBusinessType.AccountManager,
      },
      {
        id: '0002',
        email: 'mail01@mail.com',
        phone: '123456789',
        image: 'http://placeimg.com/168/140/arch',
        name: 'Ikea',
        street: 'Isenburgstraat 36',
        postalCode: '1414 VA',
        city: 'Breda',
        linkType: LinkBusinessType.Manager,
      },
      {
        id: '0003',
        email: 'mail01@mail.com',
        phone: '123456789',
        image: 'http://placeimg.com/168/140/arch',
        name: 'Ikea',
        street: 'Isenburgstraat 36',
        postalCode: '1414 VA',
        city: 'Breda',
        linkType: LinkBusinessType.Accountant,
      },
      {
        id: '0004',
        email: 'mail01@mail.com',
        phone: '123456789',
        image: 'http://placeimg.com/168/140/arch',
        name: 'Ikea',
        street: 'Isenburgstraat 36',
        postalCode: '1414 VA',
        city: 'Breda',
        linkType: LinkBusinessType.DeputyDirector,
      },
    ]);

    return undefined;
  };

  const linkedBusinessGroups = groupBy(businesses || [], items => items.linkType);

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.linked_businesses.title' })}
        to="/linked_businesses"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page
        title={formatMessage({ id: 'crm.details.linked_businesses.business_information' })}
        titleActions={<></>}
        updatedBy={{ id: '0001', email: 'test@email.com', firstName: 'Christian', lastName: 'Gils' }}
        dateUpdated={DateTime.local().toISO()}
      >
        <Card className={classes.businesses}>
          <CardHeader
            title={formatMessage({ id: 'crm.details.linked_businesses.title' })}
            action={
              <IconButton aria-label="add" color="primary" size="small" onClick={() => open('link-business')}>
                <AddIcon color="inherit" />
              </IconButton>
            }
          />
          <CardContent className={classes.cardContent}>
            <Grid item xs={12}>
              {businesses.length === 0 && (
                <InfoSection emoji="🤔" className={classes.content}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.linked_businesses.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.linked_businesses.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
              {businesses.length > 0 &&
                Object.values(linkedBusinessGroups).map((group, index) => (
                  <FormSubSection
                    title={formatMessage({ id: `dictionaries.link_business_type.${group[0].linkType}` })}
                    onOptionsClick={() => {}}
                    customOption={<></>}
                    counter={index + 1}
                    key={index}
                  >
                    {group.map(businessItem => (
                      <Box display="flex" mb={2}>
                        <Box>
                          <Avatar src={businessItem?.image || ''} className={classes.image}>
                            {!businessItem && <Emoji>{'📷'}</Emoji>}
                          </Avatar>
                        </Box>
                        <Box className={classes.businessItemData} width="100%">
                          <Box display="flex" className={classes.businessItemDataHeader}>
                            <Box width="100%">
                              <Typography variant="h4" className={classes.fontWeightMedium}>
                                {businessItem.name}
                              </Typography>
                            </Box>
                            <ListOptionsMenu
                              id={`linked-businesses-menu-${businessItem.id}`}
                              onDeleteClick={() => {}}
                              onEditClick={() => {}}
                            />
                          </Box>
                          <Box pt={2} className={classes.businessItemDataBody}>
                            <Grid container>
                              <Grid item xs={5}>
                                <Typography variant="h6" className={classes.fontWeightMedium}>
                                  {formatMessage({ id: 'common.office' })}
                                </Typography>
                                <Typography variant="h6">{businessItem.street}</Typography>
                                <Typography variant="h6">
                                  {businessItem.postalCode} {businessItem.city}
                                </Typography>
                              </Grid>
                              <Grid item xs={7}>
                                <Typography variant="h6" className={classes.fontWeightMedium}>
                                  {formatMessage({ id: 'common.contact' })}
                                </Typography>
                                <Typography variant="h6">
                                  T: <u>{businessItem.phone}</u>
                                </Typography>
                                <Typography variant="h6">
                                  E: <u>{businessItem.email}</u>
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </FormSubSection>
                ))}
            </Grid>
          </CardContent>
        </Card>
      </Page>
      <LinkBusinessModalContainer onSubmit={handleLinkBusiness} />
    </>
  );
};
