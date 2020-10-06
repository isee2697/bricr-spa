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
    fontWeight: fontWeight.medium,
    fontSize: '12px',
    lineHeight: '16px',
    marginBottom: spacing(4),

    '& .linked_selector': {
      cursor: 'pointer',
      color: '#2F1F5B',
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
    marginLeft: spacing(1),
    display: 'inline-block',
    color: 'white',
    fontSize: '14px',
    lineHeight: '24px',
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
    fontWeight: fontWeight.bold,
    fontSize: '10px',
    lineHeight: '16px',
    color: `${palette.gray}`,
    margin: spacing(2, 0),
  },
}));
