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
      paddingLeft: spacing(3),
      borderBottom: 0,
      paddingTop: spacing(2.375),
      paddingBottom: spacing(2.375),
      borderTop: `2px solid ${palette.gray.light}`,
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
}));
