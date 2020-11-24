import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      backgroundColor: `${theme.palette.gray.light}`,
      marginTop: theme.spacing(2.5),
      overflowX: 'auto',
      padding: theme.spacing(1, 2),
      '& .MuiChip-root.MuiChip-outlined': {
        margin: theme.spacing(1),
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
      },
    },
    dimmed: {
      ...theme.typography.h5,
      opacity: 0.5,
    },
    filter: {
      ...theme.typography.h5,
    },
  }),
);
