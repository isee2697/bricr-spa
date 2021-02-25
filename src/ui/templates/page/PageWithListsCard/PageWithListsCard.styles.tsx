import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, shadows, spacing }) => ({
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
  filters: {
    margin: spacing(-2, -2, 0, -2),
  },
  listContainer: {},
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${spacing(4)}px)`,
      margin: spacing(0, 2),
      borderBottom: `${spacing(0.25)}px solid ${palette.gray.light}`,
    },
  },
  rowChecked: {
    background: `${palette.primary.main}08`,
  },
  rowItem: {
    padding: spacing(3.75, 2, 3.75, 0),
    width: '100%',
  },
  itemButton: {
    cursor: 'pointer',
  },
}));
