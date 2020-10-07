import React, { useState } from 'react';
import { Field, FieldInputProps } from 'react-final-form';
import { Alert, Box, Button, DialogActions, DialogContent, Typography } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { SubmitButton } from 'ui/molecules';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { requireValidator } from 'form/validators';
import { UploadModalField, UploadModalImage } from 'ui/organisms';

import { NewPhaseFormProps } from './NewPhaseForm.types';

export const NewPhaseForm = ({ submitting, onClose }: NewPhaseFormProps) => {
  const { formatMessage } = useLocale();
  const [isError, setError] = useState(false);

  const renderFileUpload = (input: FieldInputProps<File>) => {
    if (!!input.value) {
      return (
        <>
          <Typography>{formatMessage({ id: 'project_details.characteristics.new_phase.logo' })}</Typography>
          <Box display="flex" flexWrap="wrap">
            <UploadModalImage file={input.value} onRemove={() => input.onChange(null)} />
          </Box>
        </>
      );
    }

    return (
      <>
        <UploadModalField
          onFileParse={files => input.onChange(files[0])}
          onSetError={setError}
          title={
            <>
              <strong>{formatMessage({ id: 'project_details.characteristics.new_phase.add_logo' })}</strong>{' '}
              {formatMessage({ id: 'upload_modal.or_drag_and_drop' })}
            </>
          }
        />
        {isError && (
          <Box mt={3}>
            <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>
          </Box>
        )}
      </>
    );
  };

  return (
    <>
      <DialogContent>
        <Box mb={4}>
          <Typography color="textSecondary">
            {formatMessage({ id: 'project_details.characteristics.new_phase.description' })}
          </Typography>
        </Box>
        <Box mb={4}>
          <GenericField
            name="name"
            placeholder="project_details.characteristics.new_phase.name_placeholder"
            label="project_details.characteristics.new_phase.name_label"
            validate={[requireValidator]}
          />
        </Box>
        <Field<File> name="file">{({ input }) => renderFileUpload(input)}</Field>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" size="large" onClick={onClose}>
          {formatMessage({ id: 'common.cancel' })}
        </Button>
        <SubmitButton
          type="submit"
          startIcon={<AddIcon color="inherit" />}
          size="large"
          color="primary"
          variant="contained"
          isLoading={submitting}
        >
          {formatMessage({ id: 'project_details.characteristics.new_phase.add' })}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
