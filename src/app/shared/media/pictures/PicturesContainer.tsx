import React from 'react';
import { useParams } from 'react-router-dom';
import { PictureContainerProps } from 'app/shared/media/pictures/Pictures.types';
import { useCustomLabels } from 'hooks/useCustomLabels';
import { LabelProperty } from 'api/types';
import { useEntityType } from 'app/shared/entityType';

import { Pictures } from './Pictures';

export const PicturesContainer = ({ pictures, sorting, sortQuery, mainPictureId }: PictureContainerProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const { entityType } = useEntityType();
  const customLabels = useCustomLabels(pimId, [LabelProperty.Picture], entityType)[LabelProperty.Picture] ?? [];

  return (
    <Pictures
      pictures={pictures ?? []}
      mainPictureId={mainPictureId}
      customLabels={customLabels}
      sorting={sorting}
      sortQuery={sortQuery}
    />
  );
};
