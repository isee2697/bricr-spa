import React from 'react';
import MaterialChip, { ChipProps } from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

import { palette } from 'theme/palette';

export const Chip: React.ComponentType<ChipProps> = withStyles({
  colorPrimary: {
    backgroundColor: palette.yellow.light,
    color: palette.yellow.main,
  },
  colorSecondary: {
    backgroundColor: palette.green.light,
    color: palette.green.main,
  },
})(MaterialChip);
