import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  pdfViewer: {
    height: 300,
    overflow: 'hidden',
    background: theme.palette.gray.light,
  },
  pdfContent: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
}));
