import { makeStyles } from '@material-ui/core';

import { CrmStatus, Maybe } from 'api/types';

export const useStyles = makeStyles(theme => ({
  inactive: {
    filter: 'grayscale(1)',
  },
  image: {
    width: 160,
    height: 152,
    marginRight: theme.spacing(2),
    filter: ({ status }: { status?: Maybe<CrmStatus> }) => (status === CrmStatus.Inactive ? 'grayscale(1)' : ''),
    fontSize: '3em',
    [theme.breakpoints.down('md')]: {
      width: 80,
      height: 47,
    },
    [theme.breakpoints.down('sm')]: {
      width: 47,
      height: 47,  
    },
  },
  content: {
      [theme.breakpoints.down('sm')]: {
        background: 'pink',
        padding: 0,
        marginRight: 900,
        width: 160,
        height: 250,
      },
  },
  cursor: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'red',
      marginLeft: 'none',
      marginRight: 900,
      width: 90,
      height: 210,
    },
    
  },
  crmUserName: {
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  inlineBlock: {
    display: 'inline-block',
  },
  label: {
    marginBottom: theme.spacing(0.5),
  
  },
  crmUserAvatar: {
    fontSize: theme.spacing(20),
  },
  avatarWithName: {
    background: theme.palette.gradientBlue.light,
    borderRadius: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'purple',
      marginRight: 0,
      marginLeft: 0,
      width: '100%',
      height: 50,
    
    },

  },
  avatarIcon: {
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'yellow',
      width: 20,
      height: 30,
    
    },
    
  },
  meta: {
    width: 74,
    height: 40,
    borderLeft: `1px solid ${theme.palette.gray.light}`,
    '&:last-child': {
      borderRight: `1px solid ${theme.palette.gray.light}`,
    },
  },
  metaCount: {
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.black.main,
  },
  metaLabel: {
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.silver.main,
  },
  infoProgress: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    flexBasis: theme.spacing(5),
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    color: theme.palette.gray.main,
    [theme.breakpoints.down('md')]: {
      width: 20,
      height: 57,
    },
       [theme.breakpoints.down('sm')]: {
        backgroundColor: 'blue',
        align: 'left',
        width: 87,
        height: 67,
      },
  },
  
  verticalAlignTop: {
    verticalAlign: 'top',
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
}));
