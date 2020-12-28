import React from 'react';

import { useLocale } from 'hooks';
import { SortOption } from 'ui/molecules/list/List.types';
import { Typography, Grid } from 'ui/atoms';
import { InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { DocumentListItem } from '../listItem/ListItem';

import { useStyles } from './List.styles';
import { DocumentsListProps } from './List.types';

export const DocumentsList = ({ documents, onClick }: DocumentsListProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const sortOptions: SortOption[] = [
    { key: 'last_edited', name: formatMessage({ id: 'common.sort_option.last_edited' }) },
  ];

  return (
    <Grid item xs={12}>
      <List
        loadingItem={<PropertyItemPlaceholder />}
        isShowHeader
        items={documents}
        itemIndex={'id'}
        renderItem={(document, checked, checkbox) => (
          <Grid item xs={12} onClick={() => onClick?.(document.id)}>
            <DocumentListItem
              key={document.id}
              rowIndex={documents.findIndex(item => item.id === document.id)}
              checked={checked}
              checkbox={checkbox}
              item={document}
            />
          </Grid>
        )}
        sortOptions={sortOptions}
      />
      {documents.length === 0 && (
        <InfoSection emoji="📃" className={classes.emptySection}>
          <Typography variant="h3">
            {formatMessage({
              id: 'crm.details.documents.empty_title',
            })}
          </Typography>
          <Typography variant="h3">
            {formatMessage({
              id: 'crm.details.documents.empty_description',
            })}
          </Typography>
        </InfoSection>
      )}
    </Grid>
  );
};
