import React, { useRef, useState } from 'react';

import { useLocale } from 'hooks';
import { DialogContent, DialogActions, Box, Typography, Badge, Alert } from 'ui/atoms';
import { UploadIcon, CloseIcon } from 'ui/atoms/icons';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';

import { UploadModalProps } from './UploadModal.types';
import { useStyles } from './UploadModal.styles';

const validTypes = 'image/*';

const readFileAsync = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const UploadModal = ({ onClose, onUpload, isSubmitting, ...props }: UploadModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [fileList, setFileList] = useState<FileList>();
  const [isError, setError] = useState(false);

  const handleChange = async ({ target: { validity, files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (validity.valid && files && files.length && Array.from(files).every(file => file.type.match(validTypes))) {
      const uploadedImages = await Promise.all(Array.from(files).map(file => readFileAsync(file)));
      setImages(images => [...images, ...uploadedImages]);
      setFileList(files);

      setError(false);
    } else {
      setError(true);
    }
  };

  const removeImage = (removedImage: string) => {
    setImages(images => images.filter(image => image !== removedImage));
  };

  return (
    <Modal title={formatMessage({ id: 'upload_modal.upload_file' })} onClose={onClose} fullWidth {...props}>
      <DialogContent>
        <Box className={classes.container}>
          <UploadIcon />
          <Typography>
            <strong>{formatMessage({ id: 'upload_modal.add_files' })}</strong>{' '}
            {formatMessage({ id: 'upload_modal.or_drag_and_drop' })}
          </Typography>
          <input
            ref={inputRef}
            className={classes.input}
            accept={validTypes}
            type="file"
            onChange={handleChange}
            multiple
          />
        </Box>

        {!!images.length && (
          <>
            <Typography className={classes.previewTitle}>{formatMessage({ id: 'upload_modal.preview' })}</Typography>
            <Box display="flex" flexWrap="wrap">
              {images.map(image => (
                <Box key={image} className={classes.image} style={{ backgroundImage: `url(${image})` }}>
                  <Badge
                    className={classes.removeBadge}
                    onClick={() => removeImage(image)}
                    badgeContent={<CloseIcon />}
                    color="error"
                  />
                </Box>
              ))}
            </Box>
          </>
        )}

        {!!isError && (
          <Box mt={3}>
            <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
          </Box>
        )}
      </DialogContent>

      <DialogActions className={classes.actions}>
        <CancelButton variant="outlined" size="large" onClick={onClose}>
          {formatMessage({ id: 'common.cancel' })}
        </CancelButton>
        <SubmitButton
          type="submit"
          startIcon={<UploadIcon color="inherit" />}
          size="large"
          color="primary"
          variant="contained"
          disabled={!fileList || isError}
          onClick={() => fileList && onUpload(fileList)}
          isLoading={isSubmitting}
        >
          {formatMessage({ id: 'common.upload' })}
        </SubmitButton>
      </DialogActions>
    </Modal>
  );
};
