import React from 'react';
import clsx from 'classnames';

import { Box, Typography } from 'ui/atoms';
import { AllocateResultsRelationRanking } from 'app/projectDetails/sections/allocateResultsDetails/AllocateResultsDetails.types';

import { useStyles } from './RankingIcon.styles';
import { RankingIconProps } from './RankingIcon.types';

export const RankingIcon = ({ rankings }: RankingIconProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box
        className={clsx(
          classes.silverItem,
          rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Silver) >= 0 && 'active',
        )}
      >
        <Typography variant="h2" className={classes.label}>
          2
        </Typography>
      </Box>
      <Box
        className={clsx(
          classes.goldItem,
          rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Gold) >= 0 && 'active',
        )}
      >
        <Typography variant="h2" className={classes.label}>
          1
        </Typography>
      </Box>
      <Box
        className={clsx(
          classes.bronzeItem,
          rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Bronze) >= 0 && 'active',
        )}
      >
        <Typography variant="h2" className={classes.label}>
          3
        </Typography>
      </Box>
    </Box>
  );
};
