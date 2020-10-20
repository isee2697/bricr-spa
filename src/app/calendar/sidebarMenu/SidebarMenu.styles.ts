import { makeStyles } from '@material-ui/core';

export const useStyles = (width: number | string) =>
  makeStyles(({ spacing, palette, typography }) => ({
    root: {
      position: 'fixed',
      marginBottom: spacing(2.25),
      width: typeof width === 'number' ? `${width}px` : width,
    },
    container: {
      position: 'relative',
      height: `calc(100vh - ${spacing(6)}px)`,
    },
    sideMenu: {
      top: spacing(6),
    },
    week: {
      position: 'absolute',
      fontSize: '0.6em',
      color: 'red',
    },
    banner: {
      width: '100%',
      backgroundColor: palette.gray.light,
      display: 'flex',
      alignItems: 'center',
      '& .MuiSvgIcon-root': {
        backgroundColor: palette.white.main,
        padding: spacing(0.5),
        margin: spacing(1, 2),
        borderRadius: spacing(1),
        width: spacing(4),
        height: spacing(4),
      },
      '& .MuiTypography-h5': {
        fontWeight: typography.fontWeightBold,
      },
    },
    pickers: {
      maxWidth: `calc(100% - ${spacing(0.5)}px)`,
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
    hideButton: {
      position: 'absolute',
      right: -14,
      top: 24,
      zIndex: 10,
    },
  }))();
