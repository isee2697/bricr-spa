import { useTheme } from '@material-ui/core/styles';
import React from 'react';

import { Box } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';

export const AddPlaceholder = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={48}
      height={48}
      border={`1px dashed ${theme.palette.gray.main}`}
      borderRadius={40}
    >
      <AddIcon />
    </Box>
  );
};
