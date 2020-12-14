import React from 'react';

import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';

import { CadastreSettingsProps } from './CadastreSettings.types';

export const CadastreSettings = ({ data, onSave }: CadastreSettingsProps) => {
  return (
    <AutosaveForm onSave={onSave} initialValues={data}>
      <GenericField name="username" placeholder="settings.cadastre.username_placeholder" />
      <GenericField name="password" placeholder="settings.cadastre.password_placeholder" />
    </AutosaveForm>
  );
};
