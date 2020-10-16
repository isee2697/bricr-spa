import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '& form': {
      width: '100%',
    },
    minWidth: '100%',
    '& .MuiPaper-root.MuiCard-root': {
      padding: theme.spacing(1, 2),
      '&:not(:last-child)': {
        marginBottom: theme.spacing(3),
      },
    },
  },
  textEditor: {
    padding: `${theme.spacing(2, 0)} !important`,
    '& div[role="textbox"]': {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
}));
