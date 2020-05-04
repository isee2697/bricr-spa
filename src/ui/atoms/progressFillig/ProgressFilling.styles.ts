import { styled } from '@material-ui/core/styles';

export const ProgressFilling = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  borderRadius: theme.spacing(0.5),
  height: theme.spacing(1),
  overflow: 'hidden',
  '& div': {
    width: theme.spacing(2),
    height: '100%',
    '&:not(:last-child)': {
      marginRight: theme.spacing(0.25),
    },
  },
  '& .filled': {
    backgroundSize: 106,

    '&:nth-child(1)': {
      backgroundImage: `linear-gradient(90deg, ${theme.palette.red.main} 0%, ${theme.palette.orange.main} 25.52%, ${theme.palette.yellow.main} 52.6%, ${theme.palette.green.main} 100%)`,
      backgroundPositionX: 0,
    },
    '&:nth-child(2)': {
      backgroundImage: `linear-gradient(90deg, ${theme.palette.red.main} 0%, ${theme.palette.orange.main} 25.52%, ${theme.palette.yellow.main} 52.6%, ${theme.palette.green.main} 100%)`,
      backgroundPositionX: -16,
    },
    '&:nth-child(3)': {
      backgroundImage: `linear-gradient(90deg, ${theme.palette.red.main} 0%, ${theme.palette.orange.main} 25.52%, ${theme.palette.yellow.main} 52.6%, ${theme.palette.green.main} 100%)`,
      backgroundPositionX: -34,
    },
    '&:nth-child(4)': {
      backgroundImage: `linear-gradient(90deg, ${theme.palette.red.main} 0%, ${theme.palette.orange.main} 25.52%, ${theme.palette.yellow.main} 52.6%, ${theme.palette.green.main} 100%)`,
      backgroundPositionX: -52,
    },
    '&:nth-child(5)': {
      backgroundImage: `linear-gradient(90deg, ${theme.palette.red.main} 0%, ${theme.palette.orange.main} 25.52%, ${theme.palette.yellow.main} 52.6%, ${theme.palette.green.main} 100%)`,
      backgroundPositionX: -68,
    },
    '&:nth-child(6)': {
      backgroundImage: `linear-gradient(90deg, ${theme.palette.red.main} 0%, ${theme.palette.orange.main} 25.52%, ${theme.palette.yellow.main} 52.6%, ${theme.palette.green.main} 100%)`,
      backgroundPositionX: -84,
    },
  },
  '& .empty': {
    backgroundColor: theme.palette.gray.light,
  },
}));
