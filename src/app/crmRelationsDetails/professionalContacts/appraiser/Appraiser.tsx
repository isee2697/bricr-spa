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

import { AppraiserProps, LinkedAppraiser } from './Appraiser.types';
import { useStyles } from './Appraiser.styles';
import { AppraiserItem } from './appraiserItem/AppraiserItem';

export const Appraiser = ({ onSidebarOpen, isSidebarVisible, items }: AppraiserProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();
  const classes = useStyles();
  const { open } = useModalDispatch();

  const handleSave = async () => {
    return undefined;
  };

  const handleLinkAppraiser = async () => {
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
        title={formatMessage({ id: 'crm.details.professional_contacts_appraiser.title' })}
        to="/professional_contacts_appraiser"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page
        title={formatMessage({ id: 'crm.details.professional_contacts_appraiser.title' })}
        titleActions={<></>}
        onSave={handleSave}
        name="description"
        placeholder={formatMessage({
          id: 'crm.details.professional_contacts_appraiser.description.placeholder',
        })}
      >
        <Card>
          <CardHeader
            title={formatMessage({ id: 'crm.details.professional_contacts_appraiser.linked_appraiser' })}
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
                    id: 'crm.details.professional_contacts_appraiser.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.professional_contacts_appraiser.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {items.length > 0 && (
              <List<LinkedAppraiser>
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
                    <AppraiserItem partner={item.notary} />
                    {item.items.map(appraiserItem => (
                      <Box ml={10}>
                        <ProfileItem
                          onClick={() => goToItem(appraiserItem.id, true)}
                          name={`${appraiserItem.firstName} ${appraiserItem.lastName}`}
                          avatar={appraiserItem?.image?.url ?? ''}
                          email={appraiserItem.email ?? ''}
                          teamNames={appraiserItem?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                          phone={appraiserItem?.phoneNumbers?.[0].phoneNumber ?? undefined}
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
      <LinkPartnerModalContainer onSubmit={handleLinkAppraiser} />
    </>
  );
};
