import { makeStyles } from '@material-ui/core/styles';

const gray = '#ededed';

export const useStyles = makeStyles(() => ({
  filter: {
    borderTop: `1px solid ${gray}`,
  },

  filterSider: {
    borderRight: `1px solid ${gray}`,
  },

  filterSiderTab: {
    borderBottom: `1px solid ${gray}`,
  },
}));
