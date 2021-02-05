import React from 'react';

import { Box, Checkbox, CircularProgress } from 'ui/atoms';
import { CheckboxProps } from 'ui/atoms/checkbox/Checkbox.types';

export const CheckboxLoading = ({ isLoading, ...props }: CheckboxProps & { isLoading: boolean }) => {
  return isLoading ? (
    <Box ml={1.5} mr={1.5}>
      <CircularProgress size={18} />
    </Box>
  ) : (
    <Checkbox color="primary" {...props} />
  );
};
