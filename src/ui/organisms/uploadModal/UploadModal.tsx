import React, { useRef, useState } from 'react';

import { useLocale } from 'hooks';
import { Alert, Box, DialogActions, DialogContent, Typography } from 'ui/atoms';
import { UploadIcon } from 'ui/atoms/icons';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { pdfToImages } from 'ui/organisms/uploadModal/UploadModal.helpers';
import { UploadModalImage } from 'ui/organisms/uploadModal/UploadModalImage';

import { UploadModalProps } from './UploadModal.types';
import { useStyles } from './UploadModal.styles';

const validTypes = 'image/*,application/pdf';

export const UploadModal = ({ onClose, onUpload, isSubmitting, ...props }: UploadModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  const [isError, setError] = useState(false);

  const isFileValid = (file: File) => {
    return validTypes.split(',').reduce((valid, type) => {
      return valid || !!file.type.match(type);
    }, false);
  };

  const parseFiles = async (files: File[]): Promise<File[]> => {
    const parsedFiles = await Promise.all(
      files.map(async (file: File) => {
        if (file.type === 'application/pdf') {
          return await pdfToImages(file);
        }

        return [file];
      }),
    );

    return parsedFiles.flat();
  };

  const handleChange = async ({ target: { validity, files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (validity.valid && files && files.length && Array.from(files).every(isFileValid)) {
      const parsedFiles = await parseFiles(Array.from(files));
      setFileList(files => [...files, ...parsedFiles]);

      setError(false);
    } else {
      setError(true);
    }
  };

  const removeImage = (removedFile: File) => {
    setFileList(files => files.filter(file => file !== removedFile));
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

        {!!fileList.length && (
          <>
            <Typography className={classes.previewTitle}>{formatMessage({ id: 'upload_modal.preview' })}</Typography>
            <Box display="flex" flexWrap="wrap">
              {fileList.map((file, index) => (
                <UploadModalImage key={file.name + index} file={file} onRemove={() => removeImage(file)} />
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
