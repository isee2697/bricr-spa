import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  timePicker: {
    '& .MuiPickersToolbar-toolbar': {
      background: 'linear-gradient(315deg, #0A57E9 0%, #9FC0FF 100%)',
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    '& .MuiPickersToolbarText-toolbarTxt': {
      fontSize: theme.spacing(8),
    },
    '& .MuiPickersTimePickerToolbar-ampmSelection': {
      marginLeft: 0,
      marginRight: 0,
    },
    '& .MuiPickersTimePickerToolbar-ampmLabel': {
      fontSize: theme.typography.h3.fontSize,
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
    },
    '& .MuiDialogActions-root': {
      paddingTop: 16,
      borderTop: '1px solid #E2F5EC',
    },
    '& .MuiButton-textPrimary:first-child': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& .MuiButton-textPrimary:last-child': {
      background: 'linear-gradient(315deg, #0A57E9 0%, #9FC0FF 100%)',
    },
    '& .MuiButton-textPrimary:last-child .MuiButton-label': {
      color: theme.palette.white.main,
    },
  },
}));
