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
      opacity: 0.5,
      fontSize: '12px',
      lineHeight: '16px',
    },
    filter: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  }),
);
