import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';
import { CheckboxGroupField } from 'form/fields';
import { ListOptionsMenu } from 'ui/molecules';
import { useLocale } from 'hooks';
import { UpdateTeamNameModal } from 'app/settings/sections/teams/modals/UpdateTeamNameModal';
import { TeamMembersContainer } from 'app/settings/sections/teams/TeamMembersContainer';
import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms';

import { TeamRightsOptions } from './dictionaries';
import { TeamProps } from './Team.types';

export const Team = ({ data, onSave, onRemove }: TeamProps) => {
  const [isOpen, setOpen] = useState(false);
  const { formatMessage } = useLocale();

  const persons = data.profileMembers?.map(person => ({
    ...person,
    name: `${person.user?.firstName} ${person.user?.lastName}`,
  }));

  return (
    <>
      <NavBreadcrumb to={AppRoute.teams} title={formatMessage({ id: 'settings.teams.card_title' })} />
      <AutosaveForm
        key={`${data.id}-${data.name}`}
        onSave={onSave}
        mutators={{ ...arrayMutators }}
        initialValues={{ ...data }}
      >
        <Page
          title={data?.name ?? undefined}
          titleActions={
            <ListOptionsMenu
              editText={formatMessage({ id: 'settings.teams.change_name' })}
              onEditClick={() => setOpen(true)}
              onDeleteClick={() => onRemove(data.id)}
            />
          }
          showHeader
          headerProps={{ customAction: <></> }}
        >
          <FormSection isExpandable title={formatMessage({ id: 'settings.teams.rights' })}>
            {isEditing => (
              <CheckboxGroupField disabled={!isEditing} xs={2} name="teamRights" options={TeamRightsOptions} />
            )}
          </FormSection>
          <TeamMembersContainer data={persons ?? []} />
        </Page>
      </AutosaveForm>
      <UpdateTeamNameModal
        title={formatMessage({ id: 'settings.teams.name_label' })}
        isOpened={isOpen}
        onClose={() => setOpen(false)}
        initialValues={data}
        onSubmit={async update => {
          await onSave(update);
          setOpen(false);

          return undefined;
        }}
      />
    </>
  );
};
