import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { UserProps } from 'app/settings/sections/users/Users.types';
import { Page } from 'ui/templates';
import { Profile } from 'api/types';
import { ProfileItem, List, ListOptionsMenu } from 'ui/molecules';
import { Grid, Card, NavBreadcrumb } from 'ui/atoms';
import { UserActionTabs } from 'app/settings/sections/users/actionTabs/UserActiontabs';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddUserModalContainer } from './modals/AddUserModalContainer';

export const Users = ({ data, total, onDelete }: UserProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { formatMessage } = useLocale();
  const { push } = useHistory();

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
        title={formatMessage({ id: 'settings.users.title_count' }, { count: total ?? '-' })}
        showHeader
        headerProps={{ actionText: 'Add user', onAction: () => setModalOpen(true) }}
      >
        <Card>
          <UserActionTabs
            status={'active'}
            onStatusChange={() => {}}
            amounts={{ actionRequired: 2, active: total ?? 0, archived: 0 }}
          />
          <List<Profile>
            items={data}
            itemIndex={'id'}
            renderItem={(item, isEditing, checkbox) => (
              <Grid container>
                <Grid item>{checkbox}</Grid>
                <Grid item style={{ flexGrow: 1 }}>
                  <ProfileItem
                    onClick={() => goToItem(item.id)}
                    name={`${item.firstName} ${item.lastName}`}
                    avatar={item.avatar ?? ''}
                    email={item.email ?? ''}
                    teamNames={item?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                    phone={item?.phoneNumbers?.[0].phoneNumber ?? undefined}
                    rights={['billing', 'crm']}
                    functionDescription={item?.functionDescription || undefined}
                    notes="rights set for only 6 of 8 teams where user is member of"
                    button={
                      <ListOptionsMenu
                        onDeleteClick={() => onDelete(item.id)}
                        onEditClick={() => goToItem(item.id, true)}
                      />
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
