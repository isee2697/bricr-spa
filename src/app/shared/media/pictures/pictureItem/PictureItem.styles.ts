import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 2),
    border: `1px solid ${theme.palette.gray.main}`,
    width: 'auto',
    borderRadius: theme.spacing(1),
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  mainPicture: {
    backgroundColor: theme.palette.blue.dark,
    padding: theme.spacing(0.5, 1),
    color: theme.palette.white.main,
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: theme.spacing(0, 0, 1, 0),
  },
  image: {
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: ({ src }: { src?: string }) => `url(${src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(1, 0, 0, 1),
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.black.main,
    marginBottom: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(2.5, 2, 2, 2),
  },
  disabledText: {
    color: theme.palette.gray.main,
  },
  chip: {
    height: 'auto',
    marginTop: theme.spacing(1),
    padding: theme.spacing(0, 0.5, 0, 0),
    fontSize: theme.typography.h6.fontSize,
  },
  selected: {
    backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
  },
}));
