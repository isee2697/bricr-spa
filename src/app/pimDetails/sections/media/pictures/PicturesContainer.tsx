import React from 'react';
import { useParams } from 'react-router-dom';

import { PictureContainerProps } from 'app/pimDetails/sections/media/pictures/Pictures.types';
import { useCustomLabels } from 'hooks/useCustomLabels';
import { LabelProperty } from 'api/types';

import { Pictures } from './Pictures';

export const PicturesContainer = ({ pictures }: PictureContainerProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const customLabels = useCustomLabels(pimId, [LabelProperty.Picture])[LabelProperty.Picture] ?? [];

  return <Pictures pictures={pictures ?? []} sortOptions={[]} customLabels={customLabels} />;
};
