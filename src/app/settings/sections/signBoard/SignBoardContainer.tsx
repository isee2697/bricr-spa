import React from 'react';

import { SIGN_BOARD_SETTINGS } from 'api/mocks/signs-keys';

import { SignBoard } from './SignBoard';

export const SignBoardContainer = () => {
  const handleSave = async () => {
    return undefined;
  };

  const signBoardSettings = SIGN_BOARD_SETTINGS;

  return <SignBoard onSave={handleSave} signBoardSettings={signBoardSettings} />;
};
