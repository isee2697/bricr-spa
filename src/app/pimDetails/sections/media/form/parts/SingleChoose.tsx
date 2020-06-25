import React from 'react';

import { Box, Grid } from 'ui/atoms';
import { RadioGroupField } from 'form/fields';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';

import { SingleChooseProps } from './FormParts.types';

export const SingleChoose = ({ titleId, disabled, options }: SingleChooseProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid item xs={12}>
      <FormSubSectionHeader
        noBorder
        title={formatMessage({ id: titleId })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
      />
      <Box paddingTop={2} mb={2}>
        <RadioGroupField disabled={disabled} xs={2} name="type" options={options} />
      </Box>
    </Grid>
  );
};
