import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  addPlot: {
    marginRight: spacing(3),
    backgroundColor: palette.white.main,
  },
  plotContainer: {
    '&.MuiGrid-root': {
      paddingTop: 0,
    },
  },
}));
