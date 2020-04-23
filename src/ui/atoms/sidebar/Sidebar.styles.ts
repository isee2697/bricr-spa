import { styled } from '@material-ui/core/styles';

export const Sidebar = styled('div')(({ theme }) => ({
  position: 'sticky',
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  flex: `0 0 ${theme.spacing(8)}px`,
  top: theme.spacing(11),
  textAlign: 'center',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderLeft: `2px solid ${theme.palette.white.main}`,
  '& > *:not(:first-child)': {
    marginTop: theme.spacing(2),
  },
}));

export const SidebarDivider = styled('div')(({ theme }) => ({
  height: theme.spacing(6),
}));
