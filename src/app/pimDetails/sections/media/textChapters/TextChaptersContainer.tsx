import React from 'react';

import { TextChapters } from './TextChapters';

export const TextChaptersContainer = () => {
  return <TextChapters onSave={() => Promise.resolve(undefined)} options={[]} onAdd={() => {}} chapters={[]} />;
};
