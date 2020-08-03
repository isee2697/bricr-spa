import { makeStyles, Theme } from '@material-ui/core/styles';

const hoverAndSelectedStyles = (theme: Theme) => ({
  '& h3, & a': {
    color: theme.palette.black.main,
  },
  '& path': {
    fill: theme.palette.primary.main,
  },
  '&::after': {
    borderBottomColor: theme.palette.primary.main,
    boxShadow: theme.shadows[2],
  },
});

export const useStyles = makeStyles(theme => ({
  item: {
    position: 'relative',
    height: 52,
    padding: 0,
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      borderBottomWidth: 2,
      borderBottomColor: theme.palette.gray.light,
      borderBottomStyle: 'solid',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      ...hoverAndSelectedStyles(theme),
    },
    '&:hover, &.Mui-selected:hover': {
      backgroundColor: 'transparent',
      '@media (hover: hover)': {
        ...hoverAndSelectedStyles(theme),
      },
    },
  },
  title: {
    marginLeft: theme.spacing(1),
    ...theme.typography.h4,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.gray.main,
  },
  badge: {
    marginRight: theme.spacing(1.5),
    padding: theme.spacing(0, 1.25),
    color: theme.palette.gray.main,
    background: theme.palette.gray.light,
    borderRadius: theme.spacing(3),
  },
}));
