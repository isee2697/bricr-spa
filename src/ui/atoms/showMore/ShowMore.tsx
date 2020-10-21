import React from 'react';

import { Box, Typography } from 'ui/atoms/index';
import { ArrowUpIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { ShowMoreProps } from 'ui/atoms/showMore/ShowMore.types';
import { useStyles } from 'ui/atoms/showMore/ShowMore.styles';

export const ShowMore = ({ amount }: ShowMoreProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" alignItems="center">
      <ArrowUpIcon />{' '}
      <Typography variant="h5" className={classes.text}>
        +{amount} {formatMessage({ id: 'common.show_more' })}
      </Typography>
    </Box>
  );
};
