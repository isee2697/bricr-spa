import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    backgroundImage: `url(${require('assets/images/grid_dot.png')})`,
  },
}));
