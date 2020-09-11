import React from 'react';

import { UserProps } from 'app/settings/sections/users/Users.types';
import { Page } from 'ui/templates';
import { Profile } from 'api/types';
import { ProfileItem, List } from 'ui/molecules';
import { Grid, Card } from 'ui/atoms';
import { UserActionTabs } from 'app/settings/sections/users/actionTabs/UserActiontabs';

export const Users = ({ data }: UserProps) => {
  return (
    <Page title={'users'}>
      <Card>
        <UserActionTabs
          status={'active'}
          onStatusChange={() => {}}
          amounts={{ actionRequired: 2, active: 3, archived: 3 }}
        />
        <List<Profile>
          items={data}
          itemIndex={'id'}
          renderItem={(item, isEditing, checkbox) => (
            <Grid container>
              <Grid item>{checkbox}</Grid>
              <Grid item style={{ flexGrow: 1 }}>
                <ProfileItem
                  name={`${item.firstName} ${item.lastName}`}
                  avatar={item.avatar ?? ''}
                  email={item.email ?? ''}
                  teamNames={item?.teams?.filter(team => !!team.name).map(team => team?.name ?? '')}
                  phone={item?.phoneNumbers?.[0].phoneNumber ?? undefined}
                  rights={['billing', 'crm']}
                  functionDescription={item?.functionDescription || undefined}
                  notes="rights set for only 6 of 8 teams where user is member of"
                />
              </Grid>
            </Grid>
          )}
        />
      </Card>
    </Page>
  );
};
