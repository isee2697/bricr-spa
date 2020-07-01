import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  image: {
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
  },
  content: {
    padding: theme.spacing(2.5, 2, 2, 2),
  },
  disabledText: {
    color: theme.palette.gray.main,
  },
  active: {
    cursor: 'pointer',
  },
  chip: {
    marginTop: theme.spacing(1),
  },
  selected: {
    backgroundImage: 'linear-gradient(#f5f8ff, #e7effd), radial-gradient(circle at top left, #9fc0ff, #0a57e9)',
  },
}));
