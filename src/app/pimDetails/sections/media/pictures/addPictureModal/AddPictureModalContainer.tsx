import React from 'react';

import { UploadModal } from 'ui/organisms';
import { AddMapModalProps } from 'app/pimDetails/sections/media/pictures/addPictureModal/AddPictureModal.types';

export const AddPictureModalContainer = ({ isOpened, onClose }: AddMapModalProps) => {
  return <UploadModal onUpload={() => {}} isSubmitting={false} isOpened={isOpened} onClose={onClose} />;
};
