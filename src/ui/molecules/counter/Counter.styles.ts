import { makeStyles } from '@material-ui/core/styles';

import { CounterStylesProps } from './Counter.types';

export const useStyles = makeStyles(theme => ({
  counter: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    marginLeft: (props: CounterStylesProps) => (props.hasMarginLeft ? theme.spacing() : theme.spacing(0)),
    marginRight: (props: CounterStylesProps) => (props.hasMarginRight ? theme.spacing() : theme.spacing(0)),
  },
}));
