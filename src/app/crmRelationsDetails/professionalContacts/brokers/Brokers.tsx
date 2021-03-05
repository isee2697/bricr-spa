import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { IconButton, NavBreadcrumb } from 'ui/atoms';
import { useLocale, useModalDispatch } from 'hooks';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { PageWithListsCard } from 'ui/templates';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, DisconnectIcon, HamburgerIcon } from 'ui/atoms/icons';
import { ListOptionsMenu, ProfileItem } from 'ui/molecules';
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
      <PageWithListsCard<LinkedBroker, {}, {}>
        isLoading={false}
        onSave={handleSave}
        name="description"
        placeholder={formatMessage({
          id: 'crm.details.professional_contacts_brokers.description.placeholder',
        })}
        optionsMenu={{
          hideDeleteButton: true,
          onEdit: () => {},
          renderChildren: () => (
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'crm.details.professional_contacts_brokers.disconnect',
              })}
              icon={<DisconnectIcon />}
            />
          ),
        }}
        baseRoute={''}
        header={{
          titleId: 'crm.details.professional_contacts_brokers.linked_brokers',
          hideAddButton: true,
        }}
        formButtons={
          <IconButton size="small" color="primary" onClick={() => open('link-partner')}>
            <AddIcon />
          </IconButton>
        }
        cardTitleId={'crm.details.professional_contacts_brokers.linked_brokers'}
        views={[
          {
            viewIcon: <HamburgerIcon />,
            renderViewComponent: (item: LinkedBroker) => (
              <ProfileItem
                onClick={() => goToItem(item.id, true)}
                name={`${item.firstName} ${item.lastName}`}
                avatar={item?.image?.url ?? ''}
                email={item.email ?? ''}
                teamNames={item?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                phone={item?.phoneNumbers?.[0].phoneNumber ?? undefined}
                rights={item.isAdmin ? [formatMessage({ id: 'common.admin' })] : item.adminSettings ?? undefined}
                functionDescription={item?.functionDescription || undefined}
                notes={item.notes}
                classes={{ avatar: classes.avatar }}
                hideMenuButton={true}
              />
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
          emptyTitle: formatMessage({ id: 'crm.details.professional_contacts_brokers.empty_title' }),
          emptyDescription: formatMessage({ id: 'crm.details.professional_contacts_brokers.empty_description' }),
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
      />
      <LinkPartnerModalContainer onSubmit={handleLinkBroker} />
    </>
  );
};
