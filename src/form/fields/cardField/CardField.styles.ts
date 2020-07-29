import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  '@keyframes blink': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  root: {
    borderWidth: theme.spacing(0.25),
    position: 'relative',
    minHeight: theme.spacing(17),
    cursor: 'text',
    '& .MuiFormControl-root': {
      width: '100%',
    },
  },
  input: {
    '& .MuiInputBase-root': {
      background: 'transparent',
      border: 'none',
      width: `calc(50% + ${theme.spacing(4)}px)`,
      '&::before, &::after': {
        content: 'none',
      },
    },
    '& input.MuiInputBase-input': {
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      color: theme.palette.black.main,
      textAlign: 'right',
      marginRight: theme.spacing(1),
      height: 'auto',
    },
    '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
    },
  },
  focus: {
    borderColor: theme.palette.primary.main,
  },
  error: {
    borderColor: theme.palette.red.main,
    color: theme.palette.red.main,
  },
  disabled: {
    cursor: 'default',
  },
  adornment: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h3.fontSize,
  },
}));
