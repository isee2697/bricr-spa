import React, { useState, ChangeEvent, useRef } from 'react';
import { useField } from 'react-final-form';

import { Grid, CircularProgress } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { CloseIcon } from 'ui/atoms/icons/close/CloseIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { validatorsChain } from 'form/validators';

import { useStyles } from './UploadImageField.styles';
import { UploadImageFieldProps } from './UploadImageField.types';

export const UploadImageField = ({ value, error, validate, validateFields, name }: UploadImageFieldProps) => {
  const [loading, setLoading] = useState(false);
  const [invalidFile, setInvalidFile] = useState(false);
  const { formatMessage } = useLocale();
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const defaultErrorMessage = formatMessage({ id: AppMessages['upload_image.invalid_file'] });
  const { input, meta } = useField(name, {
    validate: validate ? validatorsChain(...validate) : undefined,
    validateFields,
  });
  const image: string | undefined = value ? value : input.value;
  const [backgroundImage, setBackgroundImage] = useState(image);

  const hasError =
    invalidFile ||
    error ||
    (meta.touched && !!meta.error) ||
    (!meta.dirtySinceLastSubmit && !!meta.submitError) ||
    (meta.initial !== undefined && meta.initial !== '' && meta.initial !== null && !!meta.error);

  const processFile = ({ target: { validity, files } }: ChangeEvent<HTMLInputElement>) => {
    const file = files && files[0];

    if (validity.valid && !!file && !!file.type.match(/image\/*/)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBackgroundImage(reader.result as string);
        setLoading(true);
      };

      //ToDo api implementation
      input.onChange(reader.result as string);
    } else {
      setInvalidFile(true);
    }
  };

  const openInput = () => !!inputRef && inputRef.current && inputRef.current.click();

  return (
    <>
      <Grid item onClick={openInput}>
        <Grid container style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.root}>
          {loading && !hasError && (
            <Grid container className={classes.loading}>
              <CircularProgress color="primary" />
            </Grid>
          )}
          {hasError && (
            <Grid container className={classes.error}>
              <CloseIcon />
              <span className={classes.text}>
                {error || invalidFile
                  ? defaultErrorMessage
                  : formatMessage(meta.error || meta.submitError, {
                      ...meta.error?.values,
                      ...meta.submitError?.values,
                    })}
              </span>
            </Grid>
          )}
          {!loading && !hasError && !backgroundImage && (
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
