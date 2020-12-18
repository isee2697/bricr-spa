import React from 'react';

import { KEY_BOARD_SETTING } from 'api/mocks/signs-keys';

import { KeyBoard } from './KeyBoard';

export const KeyBoardContainer = () => {
  const handleSave = async () => {
    return undefined;
  };

  const keyboardSettings = KEY_BOARD_SETTING;

  return <KeyBoard onSave={handleSave} keyBoardSettings={keyboardSettings} />;
};
