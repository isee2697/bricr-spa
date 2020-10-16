import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  modalFooter: {
    paddingTop: spacing(1.5),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },

  condition: {
    borderTop: `${spacing(0.125)}px solid ${palette.gray.light}`,
  },

  conditionSider: {
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
  },

  conditionTabWrapper: {
    alignItems: 'flex-start',
  },

  tabContentHeader: {
    ...typography.h5,
    fontWeight: typography.fontWeightMedium,
    marginBottom: spacing(4),

    '& .linked_selector': {
      cursor: 'pointer',
      color: palette.black.main,
    },
    '& .delete_condition': {
      cursor: 'pointer',
      color: palette.primary.main,
    },
  },

  tabSearchWrapper: {
    marginBottom: spacing(4),
  },

  conditionTab: {
    flexDirection: 'row-reverse',
    paddingRight: spacing(1.5),
  },

  titleBadge: {
    ...typography.h4,
    marginLeft: spacing(1),
    verticalAlign: 'middle',
  },

  infoTitle: {
    ...typography.h6,
    fontWeight: typography.fontWeightBold,
    color: palette.gray.main,
    margin: spacing(2, 0),
  },
}));
