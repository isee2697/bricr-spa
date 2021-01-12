import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  chartWrapper: {
    minHeight: spacing(50),
    height: 'fit-content',
  },
}));
