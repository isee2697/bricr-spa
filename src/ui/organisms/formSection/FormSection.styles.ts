import { withStyles, makeStyles } from '@material-ui/core/styles';

import { ExpansionPanelSummary } from 'ui/atoms';

import { FormSectionHeaderProps } from './FormSection.types';

export const Header: React.ComponentType<FormSectionHeaderProps> = withStyles(({ palette, spacing }) => ({
  root: {
    padding: spacing(2),
    color: (props: FormSectionHeaderProps) => (props.editing === 'true' ? palette.primary.main : palette.black.main),
    '&.MuiButtonBase-root.MuiExpansionPanelSummary-root': {
      cursor: 'default',
    },
  },
  content: {
    minHeight: 0,
    margin: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    '&.Mui-expanded': {
      margin: 0,
    },
  },
  expanded: {
    '& .expanding-icon': {
      transform: 'rotate(180deg)',
    },
  },
}))(ExpansionPanelSummary);

export const useStyles = makeStyles(({ typography, spacing }) => ({
  content: {
    padding: spacing(2),
  },
  actions: {
    '& > *': {
      marginLeft: spacing(3),
    },
  },
  editLabel: {
    '& .MuiFormControlLabel-label': {
      fontSize: typography.h5.fontSize,
      fontWeight: typography.fontWeightMedium,
    },
  },
}));
