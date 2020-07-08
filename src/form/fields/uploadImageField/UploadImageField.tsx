import React, { ChangeEvent, useRef, useState } from 'react';
import { useField } from 'react-final-form';
import classNames from 'classnames';

import { Badge, Checkbox, CircularProgress, Grid } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { CloseIcon } from 'ui/atoms/icons/close/CloseIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { validatorsChain } from 'form/validators';
import { useInitSendFileMutation, useUploadFileMutation, useAddFilesMutation, File } from 'api/types';
import { GenericField } from 'form/fields';
import { CheckMarkIcon, UnCheckMarkIcon, UploadIcon } from 'ui/atoms/icons';

import { useStyles } from './UploadImageField.styles';
import { UploadImageFieldProps, UploadImageFieldTypes } from './UploadImageField.types';

export const UploadImageField = ({
  validate,
  validateFields,
  name,
  disabled,
  onRemove,
  type = UploadImageFieldTypes.BLOCK,
  label,
  entityID,
  entity,
  onSetBackground,
  isChecked,
  showCheckbox,
  onCheck,
}: UploadImageFieldProps) => {
  const [loading, setLoading] = useState(false);
  const [invalidFile, setInvalidFile] = useState(false);
  const { formatMessage } = useLocale();
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const [initUpload] = useInitSendFileMutation();
  const [uploadFile] = useUploadFileMutation();
  const [addFiles] = useAddFilesMutation();

  const { input, meta } = useField<File>(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });

  const [backgroundImage, setBackgroundImage] = useState(input.value?.url || '');

  const hasError =
    invalidFile ||
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial === null && !loading);

  const setFileAsBackground = (file: globalThis.File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBackgroundImage(reader.result as string);

      if (onSetBackground) {
        onSetBackground(reader.result as string);
      }
    };
  };
  const processFile = async ({ target: { validity, files } }: ChangeEvent<HTMLInputElement>) => {
    const file = files && files[0];
    setLoading(true);
    setInvalidFile(false);

    try {
      if (!validity.valid || !file) {
        throw new Error();
      }
      setFileAsBackground(file);

      const { data: initUploadResponse } = await initUpload({
        variables: {
          input: {
            fileName: file.name,
            fileType: file.type,
            permission: 'public',
            description: file.name,
          },
        },
      });

      if (initUploadResponse?.initSendFile && initUploadResponse.initSendFile.signedUrl) {
        await uploadFile({
          variables: {
            input: file,
            pathBuilder: () => initUploadResponse.initSendFile.signedUrl,
          },
        });

        const { data: addFilesResponse } = await addFiles({
          variables: {
            input: {
              fileIDs: [initUploadResponse.initSendFile.id],
              entityID,
              entity,
            },
          },
        });

        setLoading(false);

        if (addFilesResponse?.addFiles[0]) {
          input.onChange({ fileName: file.name, ...initUploadResponse.initSendFile, ...addFilesResponse?.addFiles[0] });
        }
      }
    } catch (error) {
      setInvalidFile(true);
    }
  };

  const openInput = () => !!inputRef && !disabled && inputRef.current && inputRef.current.click();

  const onRemoveImage = () => {
    setLoading(false);
    setBackgroundImage('');
    setInvalidFile(false);
    onRemove && onRemove();
  };

  const getUploadField = () => {
    if (type === UploadImageFieldTypes.DENSE) {
      return (
        <GenericField
          name={`${name}-name`}
          label={label}
          onClick={openInput}
          value={input.value.fileName}
          InputProps={{
            disabled: true,
            classes: {
              root: classes.inputRoot,
            },
            endAdornment: <UploadIcon />,
          }}
          disabled={disabled}
        />
      );
    }

    return (
      <Grid item className={classNames(classes.root, { enabled: !disabled })}>
        {showCheckbox && !disabled && !loading && !!backgroundImage && (
          <Checkbox
            color="primary"
            className={classes.checkbox}
            checked={isChecked}
            onClick={onCheck}
            data-testid="image-main-checkbox"
            icon={<UnCheckMarkIcon />}
            checkedIcon={<CheckMarkIcon color="primary" />}
          />
        )}
        {!disabled && !loading && !!backgroundImage && (!showCheckbox || !isChecked) && (
          <Badge
            className={classes.badge}
            onClick={onRemoveImage}
            badgeContent={<CloseIcon className={classes.badgeIcon} />}
            color="error"
            data-testid="remove-image"
          />
        )}
        <Grid
          onClick={openInput}
          container
          style={{ backgroundImage: !hasError && !!backgroundImage ? `url(${backgroundImage})` : '' }}
          className={classes.item}
        >
          {loading && !hasError && (
            <Grid container className={classes.loading}>
              <CircularProgress color="primary" size={24} />
            </Grid>
          )}
          {hasError && (
            <Grid container className={classes.error}>
              <CloseIcon />
              <span className={classes.text}>{formatMessage({ id: 'upload_image.invalid_file' })}</span>
            </Grid>
          )}
          {!loading && !hasError && !input.value && (
            <Grid container className={classNames(classes.empty, { enabled: !disabled })}>
              <AddIcon viewBox="5 5 14 14" />
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {getUploadField()}
      <input
        ref={inputRef}
        name={name}
        className={classes.inputField}
        accept="image/*"
        type="file"
        onChange={processFile}
      />
    </>
  );
};
