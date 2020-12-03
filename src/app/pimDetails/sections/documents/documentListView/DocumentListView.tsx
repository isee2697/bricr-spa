import React from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import { ListPimsFilters } from 'api/types';
import { Box, Grid, Card, CardHeader, CardContent } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { PropertyItemPlaceholder, List } from 'ui/molecules';
import { DocumentListViewType, DocumentStatus } from '../Documents.types';
import { DocumentKind } from 'app/pimDetails/sections/documents/Documents.types';

import { DocumentListViewTabs } from './documentListViewTabs/DocumentListViewTabs';
import { useStyles } from './DocumentListView.styles';
import { DocumentListViewProps } from './DocumentListView.types';
import { DocumentListViewItem } from './documentListViewItem/DocumentListViewItem';
import { DocumentTableView } from './documentTableView/DocumentTableView';

export const DocumentListView = ({
  status,
  onStatusChange,
  activeFilters,
  onFilter,
  documents,
  isLoading,
}: DocumentListViewProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const history = useHistory();

  const handleNavigate = (documentKind: DocumentKind, id: string) => {
    history.push(history.location.pathname + '/' + documentKind + '/' + id);
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardHeader action={<FiltersButton data={activeFilters} getActiveFilters={onFilter} />} />
        <CardContent>
          <Box>
            <DocumentListViewTabs status={status} onStatusChange={onStatusChange} />
          </Box>
          <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
          {status === DocumentStatus.Uploaded ? (
            <DocumentTableView data={documents || []} onClick={handleNavigate} />
          ) : (
            <List
              items={(documents ?? []) as DocumentListViewType[]}
              itemIndex={'id'}
              renderItem={(item, checked, checkbox) => (
                <Box key={item.id} className={classNames(classes.row, { [classes.rowChecked]: checked })}>
                  {checkbox}
                  <Box component="span" className={classes.rowItem}>
                    <Box className={classes.itemButton} onClick={() => {}}>
                      <DocumentListViewItem onClick={handleNavigate} {...item} />
                    </Box>
                  </Box>
                </Box>
              )}
              sortOptions={[
                { key: 'lastEdited', name: 'Last edited' },
                { key: 'firstEdited', name: 'First edited' },
              ]}
              onSort={key => alert(key)}
              pagination={{
                count: 8,
                currentPerPage: 10,
                perPageOptions: [10, 25, 'All'],
                onPerPageChange: value => {
                  alert(value);
                },
              }}
              loading={isLoading}
              loadingItem={<PropertyItemPlaceholder />}
              emptyTitle={formatMessage({ id: 'pim_details.documents.empty_title' })}
              emptyDescription={formatMessage({ id: 'pim_details.documents.empty_description' })}
            />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
