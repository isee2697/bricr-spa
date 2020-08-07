import React from 'react';
import { useHistory } from 'react-router-dom';

import { SettingHeaderCommonProps } from 'app/settings/settingsHeader/SettingsHeader.types';
import { AutosaveForm } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';

import { WorkflowTemplates } from './WorkflowTemplates';

export const WorkflowTemplatesContainer = ({ isSidebarVisible, onSidebarOpen }: SettingHeaderCommonProps) => {
  const { push } = useHistory();

  const handleAddTemplate = async () => {
    push(`${AppRoute.settings}/workflow`);

    return undefined;
  };

  return (
    <AutosaveForm onSave={() => Promise.resolve(undefined)}>
      <WorkflowTemplates
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        onAdd={handleAddTemplate}
        dateUpdated={null}
        updatedBy={null}
      />
    </AutosaveForm>
  );
};
