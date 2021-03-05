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

import { OthersProps, LinkedOthers } from './Others.types';
import { useStyles } from './Others.styles';
import { OthersItem } from './othersItem/OthersItem';

export const Others = ({ onSidebarOpen, isSidebarVisible, items }: OthersProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();
  const classes = useStyles();
  const { open } = useModalDispatch();

  const handleSave = async () => {
    return undefined;
  };

  const handleLinkOthers = async () => {
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
        title={formatMessage({ id: 'crm.details.professional_contacts_others.title' })}
        to="/professional_contacts_others"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <PageWithListsCard<LinkedOthers, {}, {}>
        isLoading={false}
        onSave={handleSave}
        name="description"
        placeholder={formatMessage({
          id: 'crm.details.professional_contacts_others.description.placeholder',
        })}
        optionsMenu={{
          hideDeleteButton: true,
          onEdit: () => {},
          renderChildren: () => (
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'crm.details.professional_contacts_others.disconnect',
              })}
              icon={<DisconnectIcon />}
            />
          ),
        }}
        baseRoute={''}
        header={{
          titleId: 'crm.details.professional_contacts_others.linked_others',
          hideAddButton: true,
        }}
        formButtons={
          <IconButton size="small" color="primary" onClick={() => open('link-partner')}>
            <AddIcon />
          </IconButton>
        }
        cardTitleId={'crm.details.professional_contacts_others.linked_others'}
        views={[
          {
            viewIcon: <HamburgerIcon />,
            renderViewComponent: (item: LinkedOthers) => (
              <>
                <OthersItem partner={item.notary} />
                {item.items.map(othersItem => (
                  <Box ml={10}>
                    <ProfileItem
                      onClick={() => goToItem(othersItem.id, true)}
                      name={`${othersItem.firstName} ${othersItem.lastName}`}
                      avatar={othersItem?.image?.url ?? ''}
                      email={othersItem.email ?? ''}
                      teamNames={othersItem?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                      phone={othersItem?.phoneNumbers?.[0].phoneNumber ?? undefined}
                      button={
                        <ListOptionsMenu hideDeleteButton onEditClick={() => {}}>
                          <ListOptionsMenuItem
                            title={formatMessage({
                              id: 'crm.details.professional_contacts_others.disconnect',
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
          emptyTitle: formatMessage({ id: 'crm.details.professional_contacts_others.empty_title' }),
          emptyDescription: formatMessage({ id: 'crm.details.professional_contacts_others.empty_description' }),
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
      <LinkPartnerModalContainer onSubmit={handleLinkOthers} />
    </>
  );
};
