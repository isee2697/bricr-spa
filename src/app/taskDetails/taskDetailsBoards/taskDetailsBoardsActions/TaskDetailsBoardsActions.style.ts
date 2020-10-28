import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  dropdownLabel: {
    color: theme.palette.gray.main,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    width: '100%',
    height: theme.spacing(6),
    borderRadius: theme.spacing(1),
  },
  backgroundBlue: {
    background: theme.palette.blue.light,
  },
  backgroundYellow: {
    background: theme.palette.yellow.light,
  },
  backgroundRed: {
    background: theme.palette.red.light,
  },
  backgroundGreen: {
    background: theme.palette.green.light,
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  name: {
    verticalAlign: 'top',
    lineHeight: `${theme.spacing(4)}px`,
  },
  statusEmoji: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
  },
  avagarIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  dropdown: {
    backgroundColor: theme.palette.white.main,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5),
    height: theme.spacing(9),
  },
  dropdownInner: {
    '&.selected': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: theme.palette.primary.light,
    },
  },
  dropdownMenu: {
    marginTop: theme.spacing(0.5),
    backgroundColor: theme.palette.white.main,
  },
  dropdownMenuItem: {
    padding: theme.spacing(1),
    height: theme.spacing(8),
  },
  dropdownMenuItemInner: {
    '&.blue': {
      background: theme.palette.blue.light,
    },

    '&.yellow': {
      background: theme.palette.yellow.light,
    },

    '&.red': {
      background: theme.palette.red.light,
    },

    '&.green': {
      background: theme.palette.green.light,
    },
  },
  labelDropdown: {
    backgroundColor: theme.palette.white.main,
    height: theme.spacing(9.5),
    padding: theme.spacing(2),
  },
  labelDropdownInner: {
    height: theme.spacing(4),
    width: `calc(100% + ${theme.spacing(1)}px)`,
    marginLeft: -theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),

    '&.selected': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: theme.palette.primary.light,
    },
  },
  labelDropdownMenuItem: {
    height: theme.spacing(8),
    padding: theme.spacing(0, 2),
  },
  labelDropdownMenuItemInner: {
    display: 'flex',
    alignItems: 'center',
    height: theme.spacing(8),
    borderBottom: `2px solid ${theme.palette.gray.light}`,

    '&.last': {
      borderBottom: 'none',
    },
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  labelIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    padding: theme.spacing(0.125),
    borderRadius: theme.spacing(0.5),
    border: `2px solid ${theme.palette.gray.main}`,
    '& svg': {
      fontSize: theme.spacing(2.25),
    },
  },
  labelText: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  originalEstimateWrapper: {
    position: 'relative',
    cursor: 'pointer',
  },
  originalEstimate: {
    padding: theme.spacing(1.5),
    '&.isEditing': {
      position: 'relative',
      borderRadius: theme.spacing(1),
      background: theme.palette.white.main,
      zIndex: 1200,
    },
  },
  originalEstimateBack: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.info.dark,
    left: 0,
    top: 0,
    zIndex: 1100,
  },
  originalEstimateChip: {
    background: theme.palette.gray.light,
    cursor: 'pointer',
  },
  originalEstimateLabel: {
    color: theme.palette.gray.main,
    padding: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.h4.fontSize,
  },
  originalEstimateValueWrapper: {
    height: theme.spacing(4),
  },
  originalEstimateInput: {
    background: theme.palette.gray.light,
    height: theme.spacing(4),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(0.5),

    '& .MuiInput-underline': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.spacing(0.5),
      height: theme.spacing(6),
    },
    '& .MuiInput-underline:before': {
      border: theme.spacing(),
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: theme.spacing(),
    },
    '& .MuiInput-underline:after': {
      border: theme.spacing(),
    },
    '& .MuiAutocomplete-inputRoot, & .MuiAutocomplete-input': {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
      borderRadius: theme.spacing(0.5),
    },
    '&:not(.selected) .MuiInput-underline': {
      borderColor: 'transparent',
    },
  },
  detailItem: {
    padding: theme.spacing(1.5),
    cursor: 'pointer',
  },
  detailItemIcon: {
    height: theme.spacing(3),
  },
  inlineBlock: {
    display: 'inline-block',
  },
  marginTopOneHalf: {
    marginTop: theme.spacing(1.5),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
