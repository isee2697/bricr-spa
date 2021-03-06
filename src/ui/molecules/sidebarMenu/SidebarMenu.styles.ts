import { makeStyles } from '@material-ui/core/styles';

export const useStyles = ({ width, bannerColor }: { width: number | string; bannerColor?: string | null }) =>
  makeStyles(({ spacing, palette, typography }) => ({
    container: {
      position: 'relative',
    },
    menuWrapper: {
      paddingLeft: 0,
      background: palette.white.main,
      boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
      height: `calc(100vh - ${spacing(8)}px)`,
      width: typeof width === 'number' ? `${width}px` : width,
      top: spacing(8),
      paddingTop: spacing(2),
      position: 'fixed',
      zIndex: 1,
      overflowY: 'hidden',
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
    banner: {
      width: '100%',
      backgroundColor: bannerColor ? `${bannerColor}25` : palette.gray.light,
      display: 'flex',
      color: bannerColor ?? 'inherit',
      marginBottom: spacing(4),
      alignItems: 'center',
      '& .MuiSvgIcon-root, & .MuiAvatar-root': {
        backgroundColor: palette.white.main,
        margin: spacing(1, 2, 1, 3),
        borderRadius: spacing(1),
        width: spacing(4),
        height: spacing(4),
        '& path': {
          fill: bannerColor ?? 'inherit',
        },
      },
      '& .MuiSvgIcon-root': {
        padding: spacing(0.5),
      },
      '& .MuiTypography-h5': {
        fontWeight: typography.fontWeightBold,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: `calc(100% - ${spacing(10)}px) !important`,
      },
      '& .MuiTypography-root': {
        width: '100%',
      },
    },
    backToList: {
      height: 'auto',
      '& a': {
        display: 'flex',
        padding: spacing(1.5, 0, 2, 0),
        ...typography.h5,
        fontWeight: typography.fontWeightBold,
        '& h3, & svg': {
          color: palette.black.main,
        },
      },
      '&:after': {
        borderBottomWidth: 0,
      },
    },
    hideButton: {
      position: 'absolute',
      right: -14,
      top: 24,
      zIndex: 2,
    },
    group: {
      '& + &': {
        marginTop: spacing(2),
      },
    },
    selected: {
      '& .MuiTypography-root[class*="makeStyles-collapseTitle-"] ': {
        fontWeight: typography.fontWeightBold,
        color: palette.black.main,
      },
    },
    collapseHeader: {
      display: 'flex',
      padding: spacing(0, 1.87, 1, 1.87),
      cursor: 'pointer',
      borderBottom: `${palette.gray.light} solid ${spacing(0.25)}px`,
    },
    collapseTitle: {
      ...typography.h4,
      fontWeight: typography.fontWeightMedium,
      color: palette.gray.main,
    },
    notCollapsable: {
      marginLeft: 0,
      padding: spacing(1.87),
      width: '100%',
    },
    spaceAfter: {
      marginBottom: spacing(5),
    },
    groupCollapse: {
      position: 'relative',
    },
    groupConnector: {
      position: 'absolute',
      top: spacing(1),
      left: spacing(3),
      width: 2,
      height: `calc(100% - ${spacing(1)}px)`,
      background: palette.gradientGray.main,
    },
    itemsCollapse: {
      position: 'relative',
    },
    itemsConnector: {
      position: 'absolute',
      top: spacing(1),
      left: spacing(5.5),
      width: 2,
      height: `calc(100% - ${spacing(1)}px)`,
      background: palette.gradientGray.main,
    },
  }))();
