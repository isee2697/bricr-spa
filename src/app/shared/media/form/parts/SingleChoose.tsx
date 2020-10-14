import React from 'react';

import { Box, Grid } from 'ui/atoms';
import { RadioGroupField } from 'form/fields';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';

import { SingleChooseProps } from './FormParts.types';

export const SingleChoose = ({ titleId, disabled, options, xs = 2, actionElement }: SingleChooseProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid item xs={12}>
      <FormSubSectionHeader
        noBorder
        title={formatMessage({ id: titleId })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <Box paddingTop={2} mb={2}>
        <RadioGroupField
          disabled={disabled}
          xs={xs}
          lg={2}
          name="type"
          options={options}
          actionElement={actionElement}
        />
      </Box>
    </Grid>
  );
};
