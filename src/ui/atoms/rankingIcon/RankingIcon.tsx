import React from 'react';
import clsx from 'classnames';

import { Box, Typography } from 'ui/atoms';
import { AllocateResultsRelationRanking } from 'app/projectDetails/sections/allocateResultsDetails/AllocateResultsDetails.types';

import { useStyles } from './RankingIcon.styles';
import { RankingIconProps } from './RankingIcon.types';

export const RankingIcon = ({ rankings, showCount = false, count, showActiveOnly }: RankingIconProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.root} mb={0.5} display="flex" alignItems="center">
        {!showActiveOnly || rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Silver) >= 0 ? (
          <Box
            className={clsx(
              classes.silverItem,
              rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Silver) >= 0 && 'active',
            )}
          >
            <Typography variant="h3" className={classes.label}>
              2
            </Typography>
          </Box>
        ) : null}
        {!showActiveOnly || rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Gold) >= 0 ? (
          <Box
            className={clsx(
              classes.goldItem,
              rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Gold) >= 0 && 'active',
            )}
            ml={0.5}
          >
            <Typography variant="h2" className={classes.label}>
              1
            </Typography>
          </Box>
        ) : null}
        {!showActiveOnly || rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Bronze) >= 0 ? (
          <Box
            className={clsx(
              classes.bronzeItem,
              rankings.findIndex(ranking => ranking === AllocateResultsRelationRanking.Bronze) >= 0 && 'active',
            )}
            ml={0.5}
          >
            <Typography variant="h3" className={classes.label}>
              3
            </Typography>
          </Box>
        ) : null}
      </Box>
      {showCount && (
        <Box display="flex">
          <Box className={classes.count}>
            <Typography variant="h6" className={classes.gray}>
              {count?.silver || 0}
            </Typography>
          </Box>
          <Box className={classes.count}>
            <Typography variant="h6" className={classes.gray}>
              {count?.gold || 0}
            </Typography>
          </Box>
          <Box className={classes.count}>
            <Typography variant="h6" className={classes.gray}>
              {count?.bronze || 0}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
