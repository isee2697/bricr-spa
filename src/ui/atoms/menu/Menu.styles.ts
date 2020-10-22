import { makeStyles, Theme } from '@material-ui/core/styles';

import { MenuProps } from './Menu.types';

type AvailableProps = Pick<MenuProps, 'offsetTop' | 'offsetBottom' | 'offsetLeft' | 'offsetRight' | 'placement'>;

const ARROW_BASE_SIZE = 7;

const getArrowMargins = (props: AvailableProps, theme: Theme) => {
  if (props.placement?.startsWith('top')) {
    return `0 0 ${theme.spacing(props.offsetBottom || 0) - ARROW_BASE_SIZE}px`;
  }

  if (props.placement?.startsWith('bottom')) {
    return `${theme.spacing(props.offsetTop || 0) - ARROW_BASE_SIZE}px 0 0`;
  }

  if (props.placement?.startsWith('left')) {
    return `0 ${theme.spacing(props.offsetRight || 0) - ARROW_BASE_SIZE}px 0 0`;
  }

  if (props.placement?.startsWith('right')) {
    return `0 0 0 ${theme.spacing(props.offsetLeft || 0) - ARROW_BASE_SIZE}px`;
  }
};

export const useStyles = makeStyles(theme => ({
  card: {
    minWidth: theme.spacing(25),
    '& .MuiCardContent-root:last-child': {
      paddingBottom: 16,
    },
    '& a': {
      display: 'block',
    },
  },
  popper: {
    zIndex: 1500,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      width: ARROW_BASE_SIZE * 3,
      height: ARROW_BASE_SIZE,
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      width: ARROW_BASE_SIZE * 3,
      height: ARROW_BASE_SIZE,
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: 9,
      width: ARROW_BASE_SIZE,
      height: ARROW_BASE_SIZE * 3,
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: 9,
      width: ARROW_BASE_SIZE,
      height: ARROW_BASE_SIZE * 3,
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  arrow: {
    position: 'absolute',
    fontSize: 7,
    margin: (props: AvailableProps) => getArrowMargins(props, theme),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
}));
