import MaterialChip from '@material-ui/core/Chip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { ChipProps } from './Chip.types';

export const Chip: React.ComponentType<ChipProps> = withStyles(({ palette, typography, spacing }) => ({
  root: {
    display: 'inline-flex',
    fontSize: typography.h5.fontSize,
    fontWeight: typography.fontWeightMedium,
    padding: spacing(),
  },
  labelSmall: {
    fontSize: typography.h6.fontSize,
    fontWeight: typography.fontWeightBold,
    padding: `0 ${spacing(2)}px`,
  },
  colorPrimary: {
    borderColor: palette.gray.main,
    backgroundColor: palette.white.main,
    color: palette.gray.main,
  },
  colorSecondary: {
    borderColor: palette.gray.main,
    backgroundColor: 'currentColor',
    color: 'inherit',
  },
}))(MaterialChip);

export const useStyles = makeStyles(theme => ({
  secondary: {
    backgroundColor: (props: Pick<ChipProps, 'bgcolor' | 'fontcolor'>) => props.bgcolor && props.bgcolor,
    color: (props: Pick<ChipProps, 'bgcolor' | 'fontcolor'>) => props.fontcolor && props.fontcolor,
    borderColor: (props: Pick<ChipProps, 'bgcolor' | 'fontcolor'>) => props.fontcolor && props.fontcolor,
  },
}));
