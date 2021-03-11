import React from 'react';

import { InfoSection } from 'ui/molecules';
import { Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { EmptyFilterIcon } from 'ui/atoms/icons';

import { EmptyStateFilterProps } from './EmptyStateFilter.types';
import { useStyles } from './EmptyStateFilter.styles';

export const EmptyStateFilter = ({ isFiltered, type }: EmptyStateFilterProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  if (isFiltered) {
    return (
      <InfoSection emoji={<EmptyFilterIcon className={classes.icon} />}>
        <Typography variant="h3">
          {formatMessage({
            id: 'common.filtered_list.empty_title',
          })}
        </Typography>
        <Typography variant="h3">
          {formatMessage({
            id: 'common.filtered_list.empty_description',
          })}
        </Typography>
      </InfoSection>
    );
  }

  return (
    <InfoSection emoji="🤔">
      <Typography variant="h3">
        {formatMessage(
          {
            id: 'common.list.empty_title',
          },
          { type },
        )}
      </Typography>
      <Typography variant="h3">
        {formatMessage(
          {
            id: 'common.list.empty_description',
          },
          { type },
        )}
      </Typography>
    </InfoSection>
  );
};
