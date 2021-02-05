import React from 'react';

import { Box, Checkbox, CircularProgress } from 'ui/atoms';
import { CheckboxProps } from 'ui/atoms/checkbox/Checkbox.types';

export const CheckboxLoading = ({ isLoading, color = 'primary', ...props }: CheckboxProps & { isLoading: boolean }) => {
  const passColor = color === 'secondary' || color === 'primary' ? color : undefined;

  return isLoading ? (
    <Box ml={1.5} mr={1.5}>
      <CircularProgress color={passColor} size={18} />
    </Box>
  ) : (
    <Checkbox color={passColor} {...props} />
  );
};
