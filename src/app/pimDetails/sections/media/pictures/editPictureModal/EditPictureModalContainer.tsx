import React from 'react';

import { EditPictureModalContainerProps } from './EditPictureModal.types';
import { EditPictureModal } from './EditPictureModal';

export const EditPictureModalContainer = ({ isModalOpened, onModalClose, picture }: EditPictureModalContainerProps) => {
  return (
    <EditPictureModal
      isModalOpened={isModalOpened}
      onModalClose={onModalClose}
      picture={picture}
      initialValues={{}}
      options={[]}
      onSubmit={() => {}}
    />
  );
};
