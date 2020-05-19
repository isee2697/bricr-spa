import React, { useState, ChangeEvent, useRef } from 'react';
import { useField } from 'react-final-form';

import { Grid, CircularProgress, Badge } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { CloseIcon } from 'ui/atoms/icons/close/CloseIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { validatorsChain } from 'form/validators';

import { useStyles } from './UploadImageField.styles';
import { UploadImageFieldProps } from './UploadImageField.types';

export const UploadImageField = ({ validate, validateFields, name, disabled, onRemove }: UploadImageFieldProps) => {
  const [loading, setLoading] = useState(false);
  const [invalidFile, setInvalidFile] = useState(false);
  const { formatMessage } = useLocale();
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(input.value);
  const hasError =
    invalidFile ||
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial === null && !loading) ||
    (meta.initial === '' && !loading);

  const processFile = ({ target: { validity, files } }: ChangeEvent<HTMLInputElement>) => {
    const file = files && files[0];

    if (validity.valid && !!file && !!file.type.match(/image\/*/)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setLoading(true);
        setBackgroundImage(reader.result as string);

        //toDo implement api call and setLoading false after success
        setTimeout(() => {
          setLoading(false);
          input.onChange(reader.result as string);
        }, 500);
      };
    } else {
      setInvalidFile(true);
    }
  };

  const deleteFile = () => {
    setBackgroundImage(undefined);
    input.onChange(undefined);
    onRemove && onRemove();
  };

  const openInput = () => !!inputRef && !disabled && inputRef.current && inputRef.current.click();

  return (
    <>
      <Grid item className={classes.root}>
        {!loading && !!backgroundImage && (
          <Badge
            className={classes.badge}
            onClick={deleteFile}
            badgeContent={<CloseIcon className={classes.badgeIcon} />}
            color="error"
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
            <Grid container className={classes.empty}>
              <AddIcon />
            </Grid>
          )}
        </Grid>
      </Grid>
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
