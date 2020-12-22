import React from 'react';

import { FormModal } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { DatePickerField, GenericField } from 'form/fields';

import { AddSignModalProps } from './AddSignModal.types';

export const AddSignModal = ({ isOpened, onSubmit, onClose }: AddSignModalProps) => {
  const { formatMessage } = useLocale();

  const handleSubmit = async () => {
    onSubmit();

    return undefined;
  };

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.title' })}
      addText={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.title' })}
    >
      <Box>
        <GenericField
          name="key"
          label={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.select_sign_number' })}
          placeholder={formatMessage({
            id: 'pim_details.summary.signs_and_keys.signs.add_signs.search_sign_number_from_sign_board',
          })}
        />
      </Box>
      <Box>
        <GenericField
          name="description"
          label={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.description' })}
          placeholder={formatMessage({
            id: 'pim_details.summary.signs_and_keys.signs.add_signs.description.placeholder',
          })}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DatePickerField
            name="datePlace"
            label={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.date_place' })}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerField
            name="datePlaced"
            label={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.date_placed' })}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerField
            name="dateSold"
            label={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.date_sold' })}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerField
            name="dateRemove"
            label={formatMessage({ id: 'pim_details.summary.signs_and_keys.signs.add_signs.date_remove' })}
          />
        </Grid>
      </Grid>
    </FormModal>
  );
};
