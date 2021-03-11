import { makeStyles } from '@material-ui/core';

export const useStyles = ({ width }: { width: number | string }) =>
  makeStyles(({ spacing, palette, typography }) => ({
    root: {
      position: 'relative',
      marginBottom: spacing(2.25),
    },
    menuWrapper: {
      background: palette.white.main,
      boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
      height: `calc(100vh - ${spacing(6)}px)`,
      width: typeof width === 'number' ? `${width}px` : width,
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
    sideMenuItem: {
      marginLeft: spacing(1),
    },
    fontWeightBold: {
      fontWeight: typography.fontWeightBold,
    },
  }))();
