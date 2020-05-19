import { styled } from '@material-ui/core/styles';

export const Sidebar = styled('div')(({ theme }) => ({
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  flex: `0 0 ${theme.spacing(8)}px`,
  top: theme.spacing(8),
  width: theme.spacing(4),
  right: theme.spacing(3),
  position: 'fixed',
  zIndex: 2,
  textAlign: 'center',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderLeft: `2px solid ${theme.palette.white.main}`,
  [theme.breakpoints.down('sm')]: {
    top: theme.spacing(0),
  },
  '& > *:not(:first-child)': {
    marginTop: theme.spacing(2),
  },
  '&.hasOverlay': {
    borderLeftColor: theme.palette.white.light,
  },
  '&:after': {
    content: '""',
    width: theme.spacing(4),
  },
}));

export const Container = styled('div')(({ theme }) => ({
  width: theme.spacing(7),
  marginLeft: theme.spacing(2),
  height: '100%',
}));

export const SidebarDivider = styled('div')(({ theme }) => ({
  height: theme.spacing(6),
}));
