import React from 'react';

import { Links } from './Links';

export const LinksContainer = () => {
  return <Links links={[]} onSave={() => Promise.resolve(undefined)} options={[]} onAdd={() => {}} />;
};
