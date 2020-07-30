import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    '& .MuiDialogTitle-root': {
      paddingBottom: 0,
    },
    '& .MuiDialogContent-root': {
      paddingTop: spacing(2),
    },
  },
  actionsPanel: {
    padding: spacing(2),
    margin: spacing(0, 1),
    borderTop: `1px solid ${palette.gray.light}`,
  },
}));
