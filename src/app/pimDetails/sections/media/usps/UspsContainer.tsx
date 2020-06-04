import React from 'react';

import { Usps } from './Usps';

export const UspsContainer = () => {
  return <Usps onSave={() => Promise.resolve(undefined)} options={[]} onAdd={() => {}} usps={[]} />;
};
