import { makeStyles } from '@material-ui/core';
import React from 'react';

import { Box } from 'ui/atoms';

export const useStyles = makeStyles(theme => ({
  count: {
    marginLeft: theme.spacing(2),
    padding: 0,
    color: theme.palette.gray.main,
    background: theme.palette.gray.light,

    '& > .MuiChip-label': {
      padding: theme.spacing(0, 1.5),
      fontSize: theme.typography.h4.fontSize,
    },
  },
  list: {
    '& .card-file-list': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    '& .card-file-list:nth-child(odd)': {
      backgroundColor: theme.palette.gray.light,
    },
  },
}));
