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

import { PurchaseProps, LinkedPurchase } from './Purchase.types';
import { useStyles } from './Purchase.styles';
import { PurchaseItem } from './purchaseItem/PurchaseItem';

export const Purchase = ({ onSidebarOpen, isSidebarVisible, items }: PurchaseProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();
  const classes = useStyles();
  const { open } = useModalDispatch();

  const handleSave = async () => {
    return undefined;
  };

  const handleLinkPurchase = async () => {
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
        title={formatMessage({ id: 'crm.details.professional_contacts_purchase.title' })}
        to="/professional_contacts_purchase"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <PageWithListsCard<LinkedPurchase, {}, {}>
        isLoading={false}
        onSave={handleSave}
        name="description"
        placeholder={formatMessage({
          id: 'crm.details.professional_contacts_purchase.description.placeholder',
        })}
        optionsMenu={{
          hideDeleteButton: true,
          onEdit: () => {},
          renderChildren: () => (
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'crm.details.professional_contacts_purchase.disconnect',
              })}
              icon={<DisconnectIcon />}
            />
          ),
        }}
        baseRoute={''}
        header={{
          titleId: 'crm.details.professional_contacts_purchase.linked_purchase',
          hideAddButton: true,
        }}
        formButtons={
          <IconButton size="small" color="primary" onClick={() => open('link-partner')}>
            <AddIcon />
          </IconButton>
        }
        cardTitleId={'crm.details.professional_contacts_purchase.linked_purchase'}
        views={[
          {
            viewIcon: <HamburgerIcon />,
            renderViewComponent: (item: LinkedPurchase) => (
              <>
                <PurchaseItem partner={item.notary} />
                {item.items.map(purchaseItem => (
                  <Box ml={10}>
                    <ProfileItem
                      onClick={() => goToItem(purchaseItem.id, true)}
                      name={`${purchaseItem.firstName} ${purchaseItem.lastName}`}
                      avatar={purchaseItem?.image?.url ?? ''}
                      email={purchaseItem.email ?? ''}
                      teamNames={purchaseItem?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                      phone={purchaseItem?.phoneNumbers?.[0].phoneNumber ?? undefined}
                      button={
                        <ListOptionsMenu hideDeleteButton onEditClick={() => {}}>
                          <ListOptionsMenuItem
                            title={formatMessage({
                              id: 'crm.details.professional_contacts_purchase.disconnect',
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
          emptyTitle: formatMessage({ id: 'crm.details.professional_contacts_purchase.empty_title' }),
          emptyDescription: formatMessage({ id: 'crm.details.professional_contacts_purchase.empty_description' }),
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
      <LinkPartnerModalContainer onSubmit={handleLinkPurchase} />
    </>
  );
};
