import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import clsx from 'classnames';

import { ListPimsFilters } from 'api/types';
import { Box, Grid, Card, CardHeader, CardContent, IconButton, Collapse } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { PropertyItemPlaceholder, List } from 'ui/molecules';
import { DocumentListViewType, DocumentStatus, DocumentKind } from '../General.types';
import { AddIcon, ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';

import { DocumentListViewTabs } from './documentListViewTabs/DocumentListViewTabs';
import { useStyles } from './DocumentListView.styles';
import { DocumentListViewProps } from './DocumentListView.types';
import { DocumentListViewItem } from './documentListViewItem/DocumentListViewItem';
import { DocumentTableView } from './documentTableView/DocumentTableView';
import { PimDocumentsFilters } from './dictionaries';

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
  const [showDocuments, setShowDocuments] = useState(true);

  const handleNavigate = (documentKind: DocumentKind, id: string) => {
    history.push(history.location.pathname + '/' + documentKind + '/' + id);
  };

  const handleUploadedNavigate = (id: string) => {
    history.push(history.location.pathname + '/uploaded/' + id);
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardHeader
          title={formatMessage({ id: 'present_documents' })}
          action={
            <Box display="flex">
              <IconButton size="small" color="primary" variant="circle">
                <AddIcon />
              </IconButton>
              <Box ml={2} />
              <FiltersButton
                data={activeFilters}
                getActiveFilters={onFilter}
                color="primary"
                filters={PimDocumentsFilters}
              />
              <Box ml={2} />
              <IconButton variant="roundedContained" size="small" onClick={() => setShowDocuments(!showDocuments)}>
                {showDocuments ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </IconButton>
            </Box>
          }
        />
        <CardContent className={clsx(classes.content, !showDocuments && 'noPadding')}>
          <Collapse in={showDocuments}>
            <Box>
              <DocumentListViewTabs status={status} onStatusChange={onStatusChange} />
            </Box>
            <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
            {status === DocumentStatus.Uploaded ? (
              <DocumentTableView data={documents || []} onClick={(docKind, id) => handleUploadedNavigate(id)} />
            ) : (
              <List
                items={(documents ?? []) as DocumentListViewType[]}
                itemIndex={'id'}
                renderItem={(item, checked, checkbox) => (
                  <Box
                    key={item.id}
                    className={classNames(classes.row, {
                      [classes.rowChecked]: checked,
                    })}
                  >
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
                emptyTitle={formatMessage({
                  id: 'pim_details.documents.empty_title',
                })}
                emptyDescription={formatMessage({
                  id: 'pim_details.documents.empty_description',
                })}
              />
            )}
          </Collapse>
        </CardContent>
      </Card>
    </Grid>
  );
};
