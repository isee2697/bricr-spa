import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    background: theme.palette.gradientBlue.main,
    boxShadow: 'none',
  },
  header: {
    padding: theme.spacing(2, 0, 1),
    borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.white.main}`,
    margin: theme.spacing(0, 2),
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  shortTitle: {
    maxWidth: '80%',
  },
  subTitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
  content: {
    color: theme.palette.gray.main,
    paddingTop: 0,
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  link: {
    color: theme.palette.gray.main,
    paddingBottom: theme.spacing(0.25),
    cursor: 'pointer',
  },

  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: ({ image }: { image?: string }) => `url(${image})`,
  },
  row: {
    borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.white.main}`,
    padding: theme.spacing(2, 0),
    '& h5': {
      lineHeight: `${theme.spacing(2.75)}px`,
    },
  },
}));
