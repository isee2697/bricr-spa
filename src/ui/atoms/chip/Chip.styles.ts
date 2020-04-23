import React from 'react';
import MaterialChip, { ChipProps } from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

export const Chip: React.ComponentType<ChipProps> = withStyles(({ palette }) => ({
  colorPrimary: {
    backgroundColor: palette.yellow.light,
    color: palette.yellow.main,
  },
  colorSecondary: {
    backgroundColor: palette.green.light,
    color: palette.green.main,
  },
}))(MaterialChip);
