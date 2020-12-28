import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  version: {
    color: theme.palette.gray.main,
  },
  pdfViewer: {
    width: '100%',
    height: theme.spacing(100),
  },
  languages: {
    width: theme.spacing(24),
  },
}));
