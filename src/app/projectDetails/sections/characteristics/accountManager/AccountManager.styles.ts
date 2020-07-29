import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.gradientBlue.light,
    borderRadius: theme.spacing(0, 1, 1, 0),
  },
  titleContainer: {
    borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.white.main}`,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    ...theme.typography.h4,
    fontWeight: theme.typography.fontWeightMedium,
  },
  edit: {
    marginTop: -theme.spacing(1),
    padding: theme.spacing(0.5),
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
  itemTitle: {
    ...theme.typography.h6,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.gray.main,
  },
  itemText: {
    ...theme.typography.h5,
    color: theme.palette.gray.main,
    lineHeight: `${theme.spacing(2.75)}px`,
  },
}));
