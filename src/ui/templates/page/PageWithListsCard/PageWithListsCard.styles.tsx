import { makeStyles } from '@material-ui/core';

export const useStyles = (isTable?: boolean) =>
  makeStyles(({ palette, shadows, spacing, breakpoints }) => ({
    header: {
      marginBottom: spacing(3),
    },
    hideSidebarButton: {
      background: palette.white.main,
      boxShadow: shadows[1],
      marginRight: spacing(1),
    },
    activeList: {
      color: palette.blue.dark,
      '& .MuiSvgIcon-root rect': {
        fill: 'inherit',
      },
    },
    inputField: {
      marginBottom: spacing(2),
      marginTop: 0,
    },
    filters: {
      margin: spacing(-2, -2, 0, -2),
    },
    rowFilter: {
      width: spacing(2),
      marginRight: spacing(3.5),
    },
    listContainer: {},
    row: {
      '&.list-row > span[class*="makeStyles-checkbox"]': {
        padding: spacing(1),
        marginLeft: spacing(1.3),
        marginRight: spacing(1.3),
        backgroundColor: 'yellow',
        [breakpoints.down('sm')]: {
          marginLeft: 0,
          marginRight: 0, 
        },
      },
      display: 'flex',
      alignItems: isTable ? 'center' : 'flex-start',
      position: 'relative',

      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        width: `calc(100% - ${spacing(4)}px)`,
        margin: spacing(0, 2),
        borderBottom: `${spacing(0.25)}px solid ${palette.gray.light}`,
      },
      '&:nth-child(odd)': {
        background: isTable ? `${palette.gray.light}` : 'transparent',
      },
    },
    rowChecked: {
      background: `${palette.primary.main}08`,
    },
    rowItem: {
      width: '100%',
      cursor: 'pointer',
      backgroundColor: 'green',
      [breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 900,
        paddingLeft: 0,
        width: 40,
        height: 210,
      },
      '& .MuiBox-root': {
        paddingLeft: 0,
        paddingTop: 0,
      }
    },
    tableActionCell: {
      cursor: 'pointer',
    },
    actionMenu: {
      alignSelf: isTable ? 'center' : 'flex-start',
      marginRight: spacing(1),
      position: isTable ? 'relative' : 'absolute',
      right: spacing(1),
      top: isTable ? 0 : spacing(2),
    },
  }))();
