import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  criteriaRowIndex: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'center',
    border: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
  },
  criteriaRow: {
    width: '100%',
    justifyContent: 'space-between',
    border: `1px solid ${theme.palette.gray.light}`,
    padding: theme.spacing(2, 3.75, 2, 2),
    borderRadius: theme.spacing(1),
    marginLeft: 0,
  },
  placeholder: {
    height: theme.spacing(8),
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
  },
}));
