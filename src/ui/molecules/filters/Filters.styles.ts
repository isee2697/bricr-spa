import { makeStyles } from '@material-ui/core/styles';

import { fontWeight } from './../../../theme/typography';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  modalFooter: {
    paddingTop: spacing(1.5),
    borderTop: `2px solid ${palette.gray.light}`,
  },

  filter: {
    borderTop: `1px solid ${palette.gray.light}`,
  },

  filterSider: {
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
  },

  filterTabWrapper: {
    alignItems: 'flex-start',
  },

  tabContentHeader: {
    ...typography.h5,
    fontWeight: fontWeight.medium,
    marginBottom: spacing(4),

    '& .linked_selector': {
      cursor: 'pointer',
      color: palette.black.main,
    },
    '& .delete_filter': {
      cursor: 'pointer',
      color: palette.primary.main,
    },
  },

  tabSearchWrapper: {
    marginBottom: spacing(4),
  },

  filterTab: {
    flexDirection: 'row-reverse',
    paddingRight: spacing(1.5),
  },

  titleBadge: {
    ...typography.h4,
    marginLeft: spacing(1),
    display: 'inline-block',
    color: palette.white.main,
    flex: 'none',
    alignSelf: 'center',
    textAlign: 'center',
    flexGrow: 0,
    backgroundColor: palette.primary.main,
    borderRadius: '100%',
    width: spacing(3),
    verticalAlign: 'middle',
  },

  infoTitle: {
    ...typography.h6,
    fontWeight: fontWeight.bold,
    color: `${palette.gray}`,
    margin: spacing(2, 0),
  },
}));
