import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  tabs: {
    margin: spacing(0, -2),
    '& .MuiTab-root': {
      minWidth: 90,
    },
  },
  scrollable: {
    right: spacing(-1),
  },
  group: {
    paddingRight: spacing(2),
  },
  moreButton: {
    justifyContent: 'left',
  },
}));
