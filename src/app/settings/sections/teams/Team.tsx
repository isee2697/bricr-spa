import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm, FormSection } from 'ui/organisms';
import { Team as TeamData } from 'api/types';
import { DataHandlerProps } from 'app/shared/types';
import { Page } from 'ui/templates';
import { CheckboxGroupField } from 'form/fields';

import { TeamRightsOptions } from './dictionaries';

export const Team = ({ data, onSave }: DataHandlerProps<TeamData>) => {
  return (
    <AutosaveForm key={data.id} onSave={onSave} mutators={{ ...arrayMutators }} initialValues={{ ...data }}>
      <Page title={data?.name ?? undefined} titleActions={<></>} showHeader headerProps={{ customAction: <></> }}>
        <FormSection isExpandable title={'teams'}>
          <CheckboxGroupField xs={2} name="teamRights" options={TeamRightsOptions} />
        </FormSection>
      </Page>
    </AutosaveForm>
  );
};
