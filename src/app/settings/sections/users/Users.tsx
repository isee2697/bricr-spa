import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { UserProps } from 'app/settings/sections/users/Users.types';
import { Page } from 'ui/templates';
import { Profile } from 'api/types';
import { ProfileItem, List, ListOptionsMenu } from 'ui/molecules';
import { Grid, Card, NavBreadcrumb, MenuItem, Typography, Box } from 'ui/atoms';
import { UserActionTabs } from 'app/settings/sections/users/actionTabs/UserActiontabs';
import { useAuthState, useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { CheckIcon, UserIcon } from 'ui/atoms/icons';

import { AddUserModalContainer } from './modals/AddUserModalContainer';

export const Users = ({ data, total, onActivationChange, status, setStatus, pagination, onUpdate }: UserProps) => {
  const { user: currentUser } = useAuthState();
  const [isModalOpen, setModalOpen] = useState(false);
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const amounts = {
    active: total?.activeCount.metadata?.total ?? 0,
    archived: total?.inActiveCount.metadata?.total ?? 0,
    actionRequired: (total?.activeCount.metadata?.total ?? 0) + (total?.inActiveCount.metadata?.total ?? 0),
  };

  const goToItem = (id: string, isEditing = false) => {
    push(AppRoute.userDetails.replace(':id', id), {
      newlyAdded: isEditing,
    });
  };

  return (
    <>
      <NavBreadcrumb to={AppRoute.users} title={formatMessage({ id: 'settings.users.title' })} />
      <Page
        titleActions={<></>}
        title={formatMessage({ id: 'settings.users.title_count' }, { count: amounts[status] })}
        showHeader
        headerProps={{ actionText: 'Add user', onAction: () => setModalOpen(true) }}
      >
        <Card>
          <UserActionTabs status={status} onStatusChange={setStatus} amounts={amounts} />
          <List<Profile>
            items={data}
            itemIndex={'id'}
            pagination={pagination}
            renderItem={(item, isEditing, checkbox) => (
              <Grid key={item.id} container>
                <Grid xs={1} lg="auto" item>
                  {checkbox}
                </Grid>
                <Grid xs={11} lg="auto" item style={{ flexGrow: 1 }}>
                  <ProfileItem
                    inActive={status === 'archived'}
                    onClick={() => goToItem(item.id)}
                    name={`${item.firstName} ${item.lastName}`}
                    avatar={item?.image?.url ?? ''}
                    email={item.email ?? ''}
                    teamNames={item?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                    phone={item?.phoneNumbers?.[0].phoneNumber ?? undefined}
                    rights={item.isAdmin ? [formatMessage({ id: 'common.admin' })] : item.adminSettings ?? undefined}
                    functionDescription={item?.functionDescription || undefined}
                    button={
                      <ListOptionsMenu
                        hideDeleteButton={status === 'archived'}
                        {...(currentUser?.id !== item.id && { onDeleteClick: () => onActivationChange(item) })}
                        onEditClick={() => goToItem(item.id, true)}
                        deleteText={formatMessage({ id: 'settings.users.deactivate' })}
                      >
                        {status === 'archived' && (
                          <MenuItem onClick={() => onActivationChange(item)} data-testid="delete-option-button">
                            <UserIcon />
                            <Typography>{formatMessage({ id: 'settings.users.reactivate' })}</Typography>
                          </MenuItem>
                        )}
                        <MenuItem
                          onClick={() => onUpdate({ ...item, isAdmin: !item.isAdmin })}
                          data-testid="change-admin"
                        >
                          <UserIcon />
                          <Typography>{formatMessage({ id: 'common.admin' })}</Typography>
                          {item.isAdmin && (
                            <>
                              <Box ml={2} />
                              <CheckIcon color="primary" fontSize="small" />
                            </>
                          )}
                        </MenuItem>
                      </ListOptionsMenu>
                    }
                  />
                </Grid>
              </Grid>
            )}
          />
        </Card>
      </Page>
      <AddUserModalContainer isOpened={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
