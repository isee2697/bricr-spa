import React from 'react';

import {
  GetKikSettingsDocument,
  KikSettingsInput,
  useGetKikSettingsQuery,
  useUpdateKikSettingsMutation,
} from 'api/types';
import { Loader } from 'ui/atoms';

import { CadastreSettings } from './CadastreSettings';

export const CadastreSettingsContainer = () => {
  const { data } = useGetKikSettingsQuery();
  const [updateKikSettingsMutation] = useUpdateKikSettingsMutation();

  if (!data) {
    return <Loader />;
  }
  const handleSave = async (input: KikSettingsInput) => {
    try {
      if (input.username && input.password) {
        await updateKikSettingsMutation({ variables: { input }, refetchQueries: [{ query: GetKikSettingsDocument }] });
      }
    } catch {
      return { error: true };
    }
  };

  return <CadastreSettings data={data.getKikSettings || undefined} onSave={handleSave} />;
};
