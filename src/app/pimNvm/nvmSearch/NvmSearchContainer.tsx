import React from 'react';

import { NVM_ITEMS } from 'api/mocks/nvm';

import { NvmSearch } from './NvmSearch';

export const NvmSearchContainer = () => {
  return <NvmSearch items={NVM_ITEMS} />;
};
