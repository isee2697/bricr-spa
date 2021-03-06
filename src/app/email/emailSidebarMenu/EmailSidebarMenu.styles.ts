import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    position: 'relative',
    marginBottom: spacing(2.25),
  },
  menuWrapper: {
    background: palette.white.main,
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
    height: `calc(100vh - ${spacing(6)}px)`,
    top: spacing(6),
    paddingTop: spacing(2),
    overflowY: 'auto',
    position: 'sticky',
    '& a': {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontWeight: typography.fontWeightMedium,
      fontSize: typography.h3.fontSize,
      color: palette.gray.main,
      '& svg': {
        marginRight: spacing(1),
      },
    },
  },
  hideMenu: {
    marginBottom: spacing(2),
    borderBottom: 0,
    marginLeft: spacing(3),
  },
  menu: {
    '& > :last-child': {
      '& a': {
        height: '100%',
      },
      display: 'block',
    },
    marginBottom: spacing(2.25),
  },
  backToList: {
    height: 'auto',
    '& a': {
      display: 'flex',
      justifyContent: 'center',
      padding: spacing(3, 2, 3, 2),
      borderBottom: 0,
      borderTop: `2px solid ${palette.gray.light}`,
      ...typography.h5,
      fontWeight: typography.fontWeightBold,
      '& h3, & svg': {
        color: palette.black.main,
      },
    },
  },
  hideButton: {
    position: 'absolute',
    right: -14,
    top: 24,
    zIndex: 10,
  },
  group: {
    '& + &': {
      marginTop: spacing(3),
    },
  },
  groupHeader: {
    background: palette.gray.light,
    height: spacing(6),
    padding: spacing(3),
    cursor: 'pointer',
  },
  collapseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: spacing(1.875),
    cursor: 'pointer',
  },
  collapseTitle: {
    ...typography.h4,
    fontWeight: typography.fontWeightMedium,
  },
  menuItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    fontWeight: typography.fontWeightMedium,
  },
  subMenuItem: {
    color: palette.gray.main,
    paddingLeft: spacing(4),

    '&.selected': {
      color: palette.primary.main,
    },
    '&.draggingOver': {
      color: palette.primary.main,
    },
  },
  draggingOver: {
    color: palette.primary.main,
  },
  gray: {
    color: palette.gray.main,
  },
  title: {
    marginLeft: spacing(1),
    ...typography.h4,
    fontWeight: typography.fontWeightMedium,
    color: palette.gray.main,

    '&.draggingOver': {
      color: palette.primary.main,
    },
  },
  badge: {
    marginRight: spacing(1.5),
    padding: spacing(0, 1.25),
    color: palette.gray.main,
    background: palette.gray.light,
    borderRadius: spacing(3),
  },
  fontWeightBold: {
    fontWeight: typography.fontWeightBold,
  },
}));
