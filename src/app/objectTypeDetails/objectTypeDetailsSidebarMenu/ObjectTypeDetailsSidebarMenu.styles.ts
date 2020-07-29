import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    background: palette.white.main,
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
    height: `calc(100vh - ${spacing(6)}px)`,
    top: spacing(6),
    paddingTop: spacing(2),
    overflowY: 'auto',
    position: 'sticky',
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
}));
