import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  filter: {
    borderTop: `1px solid ${palette.gray.light}`,
  },

  filterSider: {
    borderRight: `1px solid ${palette.gray.light}`,
  },

  filterSiderTab: {
    borderBottom: `1px solid ${palette.gray.light}`,
  },
}));
