import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  label: {
    display: 'flex',
  },
  assignee: {
    display: 'flex',
    alignItems: 'center',
  },
  assigneeAvatar: {
    marginRight: theme.spacing(1.5),
  },
  assignToMeButton: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: 'pointer',
  },
  assigneePlaceholder: {
    height: theme.spacing(6),
  },
  assigneePlaceholderMessage: {
    marginLeft: theme.spacing(1),
    color: theme.palette.info.dark,
  },
  assigneeInput: {
    padding: 0,
    height: theme.spacing(6),
    background: theme.palette.gray.light,
  },
  assigneeInputInner: {
    height: theme.spacing(6),
  },
  assigneeItemLabelWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  searchField: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    height: theme.spacing(6),
    padding: 0,
  },
  searchFieldInput: {
    fontWeight: theme.typography.fontWeightMedium,
    height: theme.spacing(6),

    '&:before': {
      content: 'none',
    },
    '&:after': {
      content: 'none',
    },
  },
  assigneeMenu: {},
  assigneeMenuItem: {},
  assigneeMenuItemInner: {},
}));
