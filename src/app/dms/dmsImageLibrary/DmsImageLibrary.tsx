import React, { useState } from 'react';

import { Images } from 'api/mocks/dms';

import { DmsImages } from './DmsImages';
import { DmsImageItem } from './DmsImages.types';

export const DmsImageLibrary = () => {
  const [images, setImages] = useState<DmsImageItem[]>(Images);

  const handleAddImage = async () => {
    return undefined;
  };

  const handleUpdateImage = async (image: DmsImageItem) => {
    const index = images.findIndex(item => item.id === image.id);
    images[index] = image;
    setImages([...images]);

    return undefined;
  };

  return <DmsImages images={images} onAdd={handleAddImage} onUpdate={handleUpdateImage} />;
};
