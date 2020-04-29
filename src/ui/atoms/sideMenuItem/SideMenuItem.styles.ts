import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  item: {
    height: 52,
    paddingLeft: 0,
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.gray.light,
    borderBottomStyle: 'solid',
    '&.Mui-selected, &:hover, &.Mui-selected:hover': {
      backgroundColor: 'transparent',
      borderBottomColor: theme.palette.primary.main,
      '& > h3': {
        color: theme.palette.black.main,
      },
      '& path': {
        fill: theme.palette.primary.main,
      },
    },
  },
  title: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.gray.main,
  },
}));
