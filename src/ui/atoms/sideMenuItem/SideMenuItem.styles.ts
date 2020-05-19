import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  item: {
    position: 'relative',
    height: 52,
    paddingLeft: 0,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderBottomWidth: 2,
      borderBottomColor: theme.palette.gray.light,
      borderBottomStyle: 'solid',
    },
    '&.Mui-selected, &:hover, &.Mui-selected:hover': {
      backgroundColor: 'transparent',
      '& > h3, & a': {
        color: theme.palette.black.main,
      },
      '& path': {
        fill: theme.palette.primary.main,
      },
      '&::after': {
        borderBottomColor: theme.palette.primary.main,
        boxShadow: theme.shadows[2],
      },
    },
  },
  title: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.gray.main,
  },
}));
