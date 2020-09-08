import React from 'react';

import { useSettingInfoQuery } from 'api/types';

import { Settings } from './Settings';
export const SettingsContainer = () => {
  const { loading, error, data } = useSettingInfoQuery();

  if (data) {
    return <Settings data={data} />;
  }

  return <>Loading teams</>;
};
