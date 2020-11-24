import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  pdfViewer: {
    width: '100%',
    height: '80vh',
    overflow: 'auto',
    background: theme.palette.gray.light,
  },
}));
