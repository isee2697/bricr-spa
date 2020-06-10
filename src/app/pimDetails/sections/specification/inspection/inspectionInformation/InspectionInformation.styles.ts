import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    '& .MuiCollapse-container': {
      paddingBottom: 0,
    },
    '& .MuiCollapse-wrapperInner .MuiBox-root:last-child .MuiGrid-root': {
      marginBottom: 0,
    },
  },
  collapse: {
    marginBottom: spacing(1.25),
    '& .MuiFormControl-root': {
      marginTop: spacing(1),
    },
  },
}));
