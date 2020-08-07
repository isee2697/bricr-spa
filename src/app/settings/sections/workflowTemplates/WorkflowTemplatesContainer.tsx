import React from 'react';

import { SettingHeaderCommonProps } from 'app/settings/settingsHeader/SettingsHeader.types';
import { AutosaveForm } from 'ui/organisms';

import { WorkflowTemplates } from './WorkflowTemplates';

export const WorkflowTemplatesContainer = ({ isSidebarVisible, onSidebarOpen }: SettingHeaderCommonProps) => {
  return (
    <AutosaveForm onSave={() => Promise.resolve(undefined)}>
      <WorkflowTemplates
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        dateUpdated={null}
        updatedBy={null}
      />
    </AutosaveForm>
  );
};
