import React, { useEffect, useState } from 'react';

import { UploadModalImageProps } from 'ui/organisms/uploadModal/UploadModal.types';
import { Badge, Box } from 'ui/atoms';
import { CloseIcon } from 'ui/atoms/icons';
import { useStyles } from 'ui/organisms/uploadModal/UploadModal.styles';
import { readFileAsync } from 'ui/organisms/uploadModal/UploadModal.helpers';

export const UploadModalImage = ({ file, onRemove }: UploadModalImageProps) => {
  const classes = useStyles();
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    readFileAsync(file).then(setImage);
  }, [file, setImage]);

  return image ? (
    <Box className={classes.image} style={{ backgroundImage: `url(${image})` }}>
      <Badge className={classes.removeBadge} onClick={onRemove} badgeContent={<CloseIcon />} color="error" />
    </Box>
  ) : null;
};
