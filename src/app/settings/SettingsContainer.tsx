import React from 'react';

import { useSettingInfoQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { Settings } from './Settings';
export const SettingsContainer = () => {
  const { data } = useSettingInfoQuery();

  if (data) {
    return <Settings data={data} />;
  }

  return <Loader />;
};
