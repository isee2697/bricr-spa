import React, { useState } from 'react';

import { Box, Card, CardContent, CardHeader, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { AllocateResultsRelationRanking } from '../AllocateResultsDetailItem.types';

import { useStyles } from './List.styles';
import { RankingListProps } from './List.types';
import { RankingListItem } from './listItem/ListItem';

export const RankingList = ({ items, selected, onSelect }: RankingListProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [isExpanded, setIsExpanded] = useState(true);

  const goldItem = items.find(item => item.ranking === AllocateResultsRelationRanking.Gold);
  const silverItem = items.find(item => item.ranking === AllocateResultsRelationRanking.Silver);
  const bronzeItem = items.find(item => item.ranking === AllocateResultsRelationRanking.Bronze);

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: `project_details.allocate_results_details.ranking_relations` })}
        action={
          <IconButton size="small" variant="roundedContained" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </IconButton>
        }
      />

      {isExpanded ? (
        <CardContent className={classes.content}>
          {goldItem && (
            <RankingListItem
              item={goldItem}
              checked={selected.indexOf(goldItem.id) !== -1}
              onSelect={() => onSelect(goldItem.id)}
            />
          )}
          {silverItem && (
            <RankingListItem
              item={silverItem}
              checked={selected.indexOf(silverItem.id) !== -1}
              onSelect={() => onSelect(silverItem.id)}
            />
          )}
          {bronzeItem && (
            <RankingListItem
              item={bronzeItem}
              checked={selected.indexOf(bronzeItem.id) !== -1}
              onSelect={() => onSelect(bronzeItem.id)}
            />
          )}
        </CardContent>
      ) : (
        <Box mt={2} />
      )}
    </Card>
  );
};
