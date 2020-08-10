import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  item: {
    width: ({ isAction }: { isAction: boolean }) => (isAction ? '100% ' : theme.spacing(11)),
    display: 'flex',
    flexDirection: ({ isAction }: { isAction: boolean }) => (isAction ? 'row' : 'column'),
    paddingBottom: ({ isAction }: { isAction: boolean }) => (isAction ? theme.spacing(2) : theme.spacing(3)),
    alignItems: 'center',
  },
  itemIcon: {
    background: ({ isAction }: { isAction: boolean }) =>
      isAction ? theme.palette.blue.light : theme.palette.purple.light,
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    marginRight: ({ isAction }: { isAction: boolean }) => (isAction ? theme.spacing(2) : 0),

    '& svg': {
      fontSize: theme.spacing(4),
      color: ({ isAction }: { isAction: boolean }) => (isAction ? theme.palette.blue.main : theme.palette.purple.main),
    },
  },
  highlight: {
    color: theme.palette.red.main,
  },
}));
