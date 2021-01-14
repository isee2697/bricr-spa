import { makeStyles } from '@material-ui/core';

export const useStyles = ({ width, bannerColor }: { width: number | string; bannerColor?: string | null }) =>
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
      backgroundColor: bannerColor ? `${bannerColor}25` : palette.gray.light,
      display: 'flex',
      color: bannerColor ?? 'inherit',
      alignItems: 'center',
      '& .MuiSvgIcon-root': {
        backgroundColor: palette.white.main,
        padding: spacing(0.5),
        margin: spacing(1, 2, 1, 3),
        borderRadius: spacing(1),
        width: spacing(4),
        height: spacing(4),
        '& path': {
          fill: bannerColor ?? 'inherit',
        },
      },
      '& .MuiTypography-h5': {
        fontWeight: typography.fontWeightBold,
      },
    },
    pickers: {
      maxWidth: `calc(100% - ${spacing(0.5)}px)`,
    },
    showHideButton: {
      margin: spacing(0, 2),
      width: `calc(100% - ${spacing(4)}px)`,
      '& .MuiSvgIcon-root': {
        marginLeft: 'auto',
      },
    },
    count: {
      position: 'absolute',
      right: spacing(3),
      marginTop: -spacing(0.5),
      backgroundColor: palette.gray.light,
      color: palette.gray.main,
      padding: 0,
    },
    groups: {
      padding: spacing(0, 3),
      '& .MuiButton-root': {
        margin: spacing(0, -1),
        '& .MuiSvgIcon-root': {
          marginLeft: 'auto',
        },
      },
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
    input: {
      padding: 0,
      height: spacing(6),
      background: palette.gray.light,
    },
    inputInner: {
      height: spacing(6),
    },
    itemLabelWrapper: {
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
    },
    searchField: {
      paddingRight: spacing(1),
      paddingLeft: spacing(1),
      height: spacing(6),
      padding: 0,
    },
    greenBox: {
      '& .MuiIconButton-label': {
        color: palette.green.main,
      },
    },
    orangeBox: {
      '& .MuiIconButton-label': {
        color: palette.orange.main,
      },
    },
    blueBox: {
      '& .MuiIconButton-label': {
        color: palette.blue.dark,
      },
    },
    FollowUp: {
      '& .MuiIconButton-label': {
        color: palette.red.main,
      },
    },
    Business: {
      '& .MuiIconButton-label': {
        color: palette.blue.main,
      },
    },
    Private: {
      '& .MuiIconButton-label': {
        color: palette.purple.main,
      },
    },
  }))();
