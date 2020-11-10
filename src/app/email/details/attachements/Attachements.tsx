import React from 'react';

import { Card, CardHeader, CardContent, Box, Typography, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon, ArrowDownIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './Attachements.styles';

export const Attachements = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const attachements = ['Bijlage-prijslist1.pdf', 'Ondertekende akte-20-12-2017.pdf', 'ID-277484.jpg'];

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'email.attachements' })}
        action={
          <Box display="flex" alignItems="center">
            <IconButton size="small" aria-label="add" color="primary">
              <AddIcon color="inherit" />
            </IconButton>
            <Box mr={2} />
            <IconButton size="small" variant="roundedContained">
              <ArrowDownIcon />
            </IconButton>
          </Box>
        }
      />
      <CardContent>
        {attachements.map((attachement, index) => (
          <Box display="flex" alignItems="center" className={classes.attachementRow}>
            <Typography variant="h4" color="textSecondary" className={classes.index}>
              {index + 1}
            </Typography>
            <Box width="100%">
              <Typography variant="h3">{attachement}</Typography>
            </Box>
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
