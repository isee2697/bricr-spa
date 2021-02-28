import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { Box, Card, CardContent, CardHeader, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { useLocale, useModalDispatch } from 'hooks';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, DisconnectIcon } from 'ui/atoms/icons';
import { InfoSection, List, ListOptionsMenu, ProfileItem } from 'ui/molecules';
import { AppRoute } from 'routing/AppRoute.enum';
import { LinkPartnerModalContainer } from 'app/shared/linkPartnerModal/LinkPartnerModalContainer';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { NotaryProps, LinkedNotary } from './Notary.types';
import { useStyles } from './Notary.styles';
import { NotaryItem } from './notaryItem/NotaryItem';

export const Notary = ({ onSidebarOpen, isSidebarVisible, items }: NotaryProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();
  const classes = useStyles();
  const { open } = useModalDispatch();

  const handleSave = async () => {
    return undefined;
  };

  const handleLinkNotary = async () => {
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
        title={formatMessage({ id: 'crm.details.professional_contacts_notary.title' })}
        to="/professional_contacts_notary"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page
        title={formatMessage({ id: 'crm.details.professional_contacts_notary.title' })}
        titleActions={<></>}
        onSave={handleSave}
        name="description"
        placeholder={formatMessage({
          id: 'crm.details.professional_contacts_notary.description.placeholder',
        })}
      >
        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.details.professional_contacts_notary.linked_notary' })}
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
                    id: 'crm.details.professional_contacts_notary.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.professional_contacts_notary.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {items.length > 0 && (
              <List<LinkedNotary>
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
                  <>
                    <NotaryItem partner={item.notary} />
                    {item.items.map(notaryItem => (
                      <Box ml={10}>
                        <ProfileItem
                          onClick={() => goToItem(notaryItem.id, true)}
                          name={`${notaryItem.firstName} ${notaryItem.lastName}`}
                          avatar={notaryItem?.image?.url ?? ''}
                          email={notaryItem.email ?? ''}
                          teamNames={notaryItem?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                          phone={notaryItem?.phoneNumbers?.[0].phoneNumber ?? undefined}
                          button={
                            <ListOptionsMenu hideDeleteButton onEditClick={() => {}}>
                              <ListOptionsMenuItem
                                title={formatMessage({
                                  id: 'crm.details.professional_contacts_notary.disconnect',
                                })}
                                icon={<DisconnectIcon />}
                              />
                            </ListOptionsMenu>
                          }
                          classes={{ avatar: classes.avatar }}
                        />
                      </Box>
                    ))}
                  </>
                )}
                isShowHeader={false}
                hideArchive
                hideBulkActions
              />
            )}
          </CardContent>
        </Card>
      </Page>
      <LinkPartnerModalContainer onSubmit={handleLinkNotary} />
    </>
  );
};
