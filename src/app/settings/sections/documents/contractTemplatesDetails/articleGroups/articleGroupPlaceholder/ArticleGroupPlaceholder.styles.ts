import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  placeholder: {
    display: 'block',
    width: theme.spacing(20.5),
    height: theme.spacing(15.25),
    borderRadius: theme.spacing(1),
    background: theme.palette.primary.light,
    border: `1px dashed ${theme.palette.primary.main}`,

    '&.dragging': {
      background: `${theme.palette.primary.main}40`,
    },
  },
}));
