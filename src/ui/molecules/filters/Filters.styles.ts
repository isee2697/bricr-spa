import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  filter: {
    borderTop: `1px solid ${palette.gray.lighter}`,
  },

  filterSider: {
    borderRight: `1px solid ${palette.gray.lighter}`,
  },

  filterSiderTab: {
    borderBottom: `1px solid ${palette.gray.lighter}`,
  },
}));
