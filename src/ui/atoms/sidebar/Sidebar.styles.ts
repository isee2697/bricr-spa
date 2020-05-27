import { styled } from '@material-ui/core/styles';

export const Sidebar = styled('div')(({ theme }) => ({
  flex: theme.spacing('0', '0', 8),
  top: theme.spacing(8),
  right: 0,
  width: theme.spacing(8),
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
  display: 'flex',
  flex: theme.spacing('0', '0', 8),
  height: '100%',
}));

export const SidebarDivider = styled('div')(({ theme }) => ({
  height: theme.spacing(6),
}));
