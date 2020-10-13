import React from 'react';
import { Box, Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { RichTextField } from 'form/fields/richTextField/RichTextField';

import { EditorProps } from './FormParts.types';

export const Editor = ({ titleId, disabled }: EditorProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid item xs={12}>
      {titleId && <FormSubSectionHeader noBorder title={formatMessage({ id: titleId })} />}
      <Box paddingTop={2} mb={2}>
        <RichTextField disabled={disabled} name="chapter" />
      </Box>
    </Grid>
  );
};
