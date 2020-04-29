import React from 'react';
import MaterialChip from '@material-ui/core/Chip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { ChipProps } from './Chip.types';

export const Chip: React.ComponentType<ChipProps> = withStyles(({ palette }) => ({
  root: {
    display: 'inline-flex',
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
