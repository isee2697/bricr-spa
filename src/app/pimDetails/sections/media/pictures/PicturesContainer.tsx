import React from 'react';

import { PictureContainerProps } from 'app/pimDetails/sections/media/pictures/Pictures.types';

import { Pictures } from './Pictures';

export const PicturesContainer = ({ pictures }: PictureContainerProps) => {
  return <Pictures pictures={pictures ?? []} sortOptions={[]} />;
};
