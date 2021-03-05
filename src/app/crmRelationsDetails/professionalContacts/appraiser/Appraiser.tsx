import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { Box, IconButton, NavBreadcrumb } from 'ui/atoms';
import { useLocale, useModalDispatch } from 'hooks';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { PageWithListsCard } from 'ui/templates';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, DisconnectIcon, HamburgerIcon } from 'ui/atoms/icons';
import { ListOptionsMenu, ProfileItem } from 'ui/molecules';
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
      <PageWithListsCard<LinkedAppraiser, {}, {}>
        isLoading={false}
        onSave={handleSave}
        name="description"
        placeholder={formatMessage({
          id: 'crm.details.professional_contacts_appraiser.description.placeholder',
        })}
        optionsMenu={{ hideDeleteButton: true, hideEditButton: true }}
        baseRoute={''}
        header={{
          titleId: 'crm.details.professional_contacts_appraiser.linked_appraiser',
          hideAddButton: true,
        }}
        formButtons={
          <IconButton size="small" color="primary" onClick={() => open('link-partner')}>
            <AddIcon />
          </IconButton>
        }
        cardTitleId={'crm.details.professional_contacts_appraiser.linked_appraiser'}
        views={[
          {
            viewIcon: <HamburgerIcon />,
            renderViewComponent: (item: LinkedAppraiser) => (
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
            ),
            isActive: true,
          },
        ]}
        actionTabs={{
          onStatusChange: () => {},
        }}
        list={{
          items,
          itemIndex: 'id',
          emptyTitle: formatMessage({ id: 'crm.details.professional_contacts_appraiser.empty_title' }),
          emptyDescription: formatMessage({ id: 'crm.details.professional_contacts_appraiser.empty_description' }),
          pagination: {
            count: 8,
            currentPerPage: 10,
            perPageOptions: [10, 25, 'All'],
            onPerPageChange: value => {
              alert(value);
            },
          },
          isShowHeader: false,
        }}
        isShowActionTabs={false}
        isShowItemCheckbox={false}
      />
      <LinkPartnerModalContainer onSubmit={handleLinkAppraiser} />
    </>
  );
};
