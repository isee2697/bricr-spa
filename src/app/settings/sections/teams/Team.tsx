import React from 'react';

import { AutosaveForm, FormSection } from 'ui/organisms';
import { Team as TeamData } from 'api/types';
import { DataHandlerProps } from 'app/shared/types';
import { InfoCardPage, Page } from 'ui/templates';

export const Team = ({ data, onSave }: DataHandlerProps<TeamData>) => {
  return (
    <AutosaveForm onSave={onSave} initialValues={{ ...data }}>
      <Page title={data?.name ?? undefined} showHeader headerProps={{ customAction: <></> }}>
        <FormSection title={'teams'}>
          <>children {JSON.stringify(data)}</>
        </FormSection>
      </Page>
    </AutosaveForm>
  );
};
