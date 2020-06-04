import React from 'react';

import { Tags } from './Tags';

export const TagsContainer = () => {
  return <Tags onSave={() => Promise.resolve(undefined)} options={[]} onAdd={() => {}} tags={[]} />;
};
