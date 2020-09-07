import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5),
    background: theme.palette.gray.light,
  },
  checkboxWrapper: {
    lineHeight: `${theme.spacing(6)}px`,
  },
  checkbox: {
    marginLeft: -theme.spacing(1),
  },
  dateLabel: {
    lineHeight: `${theme.spacing(6)}px`,
    display: 'inline-block',
    marginRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
  datePickerInput: {
    height: theme.spacing(6),
  },
  inlineBlock: {
    display: 'inline-block',
  },
}));
