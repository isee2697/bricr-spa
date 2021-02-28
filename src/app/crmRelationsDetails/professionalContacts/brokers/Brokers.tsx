import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { useLocale, useModalDispatch } from 'hooks';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, DisconnectIcon } from 'ui/atoms/icons';
import { InfoSection, List, ListOptionsMenu, ProfileItem } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { LinkPartnerModalContainer } from 'app/shared/linkPartnerModal/LinkPartnerModalContainer';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { BrokersProps, LinkedBroker } from './Brokers.types';
import { useStyles } from './Brokers.styles';

export const Brokers = ({ onSidebarOpen, isSidebarVisible, items }: BrokersProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();
  const classes = useStyles();
  const { open } = useModalDispatch();

  const handleSave = async () => {
    return undefined;
  };

  const handleLinkBroker = async () => {
    return undefined;
  };

  const goToItem = (id: string, isEditing = false) => {
    push(AppRoute.userDetails.replace(':id', id), {
      newlyAdded: isEditing,
    });
  };

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.professional_contacts_brokers.title' })}
        to="/professional_contacts_brokers"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page
        title={formatMessage({ id: 'crm.details.professional_contacts_brokers.title' })}
        titleActions={<></>}
        onSave={handleSave}
        name="description"
        placeholder={formatMessage({
          id: 'crm.details.professional_contacts_brokers.description.placeholder',
        })}
      >
        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.details.professional_contacts_brokers.linked_brokers' })}
            action={
              <IconButton size="small" color="primary" onClick={() => open('link-partner')}>
                <AddIcon />
              </IconButton>
            }
          />
          <CardContent>
            {items.length === 0 && (
              <InfoSection emoji="🤔" color="gradient">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.professional_contacts_brokers.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.professional_contacts_brokers.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {items.length > 0 && (
              <List<LinkedBroker>
                items={items}
                itemIndex={'id'}
                pagination={{
                  count: 8,
                  currentPerPage: 10,
                  perPageOptions: [10, 25, 'All'],
                  onPerPageChange: value => {
                    alert(value);
                  },
                }}
                renderItem={(item, isEditing, checkbox) => (
                  <Grid key={item.id} container>
                    <Grid xs={1} lg="auto" item>
                      {checkbox}
                    </Grid>
                    <Grid xs={11} lg="auto" item style={{ flexGrow: 1 }}>
                      <ProfileItem
                        onClick={() => goToItem(item.id, true)}
                        name={`${item.firstName} ${item.lastName}`}
                        avatar={item?.image?.url ?? ''}
                        email={item.email ?? ''}
                        teamNames={item?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                        phone={item?.phoneNumbers?.[0].phoneNumber ?? undefined}
                        rights={
                          item.isAdmin ? [formatMessage({ id: 'common.admin' })] : item.adminSettings ?? undefined
                        }
                        functionDescription={item?.functionDescription || undefined}
                        button={
                          <ListOptionsMenu hideDeleteButton onEditClick={() => {}}>
                            <ListOptionsMenuItem
                              title={formatMessage({
                                id: 'crm.details.professional_contacts_brokers.disconnect',
                              })}
                              icon={<DisconnectIcon />}
                            />
                          </ListOptionsMenu>
                        }
                        notes={item.notes}
                        classes={{ avatar: classes.avatar }}
                      />
                    </Grid>
                  </Grid>
                )}
                hideArchive
                hideBulkActions
              />
            )}
          </CardContent>
        </Card>
      </Page>
      <LinkPartnerModalContainer onSubmit={handleLinkBroker} />
    </>
  );
};
