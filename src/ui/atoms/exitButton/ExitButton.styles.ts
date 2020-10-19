import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    '&:hover .MuiSvgIcon-root path': {
      fill: palette.blue.dark,
    },
  },
}));
