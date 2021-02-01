import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Box, Card, CardContent, CardHeader, Chip, Grid } from 'ui/atoms';
import { ListPimsFilters, PropertyType } from 'api/types';
import { UploadModalField } from 'ui/organisms';
import { useLocale } from 'hooks';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { EmailTable } from 'app/email/emailTable/EmailTable';
import { EMAILS } from 'api/mocks/email';
import { ListHeader } from 'ui/molecules/list/listHeader/ListHeader';
import { ListOptionsMenu } from 'ui/molecules';

import { DocumentListViewContainerProps } from './DocumentListViewContainer.types';
import { ListViewTabs } from './listViewTabs/ListViewTabs';
import { DocumentTableView } from './tableView/DocumentTableView';
import { useStyles } from './DocumentListViewContainer.styles';

export const DocumentListViewContainer = ({
  path,
  folder,
  documents,
  onUploadFiles,
}: DocumentListViewContainerProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const { push } = useHistory();

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const handleUpload = (files: File[]) => {
    onUploadFiles(files);
  };

  const handleNavigateDetail = (id: string) => {
    push(`${path}/${id}`);
  };

  const handleSelectDoc = (docId: string) => {
    const index = selectedDocs.findIndex(id => id === docId);

    if (index >= 0) {
      setSelectedDocs(selectedDocs.filter(id => id !== docId));
    } else {
      setSelectedDocs([...selectedDocs, docId]);
    }
  };

  const handleSelectAllDoc = () => {
    setSelectedDocs(documents && documents?.length !== selectedDocs.length ? documents.map(doc => doc.id) : []);
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={
            <>
              {folder.name}
              <Chip size="small" label={documents?.length || 0} className={classes.documentsCount} />
            </>
          }
          action={
            <ListViewTabs
              activeFilters={activeFilters}
              onFilter={handleFilterChange}
              onAdd={handleUpload}
              isExpanded={isExpanded}
              onToggleExpand={() => setIsExpanded(!isExpanded)}
            />
          }
        />
        <CardContent className={classes.listContainer}>
          {isExpanded && (
            <>
              <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={handleFilterChange} />
              <Box width="100%" display="flex" flexDirection="column" px={2} pt={2}>
                <ListHeader
                  sortOptions={[]}
                  onSort={() => {}}
                  checkedKeys={selectedDocs}
                  checkAllStatus={{
                    checked: documents?.length === selectedDocs.length,
                    indeterminate: documents?.length !== selectedDocs.length && selectedDocs.length > 0,
                  }}
                  onCheckAll={handleSelectAllDoc}
                  bulkComponent={
                    <Box ml={0.5} mr={1.5}>
                      <ListOptionsMenu onEditClick={() => {}} onDeleteClick={() => {}} />
                    </Box>
                  }
                />
                {!folder.isEmailFolder && (
                  <>
                    <Box mt={1.5} />
                    <UploadModalField
                      onFileParse={parsedFiles => {
                        onUploadFiles(parsedFiles);
                      }}
                      onSetError={() => {}}
                      title={
                        <>
                          <strong>
                            {formatMessage({
                              id: 'crm.details.documents.add_documents',
                            })}
                          </strong>{' '}
                          {formatMessage({
                            id: 'upload_modal.or_drag_and_drop',
                          })}
                        </>
                      }
                    />
                  </>
                )}
                <Box mt={1} />
                {folder.isEmailFolder ? (
                  <DndProvider backend={HTML5Backend}>
                    <EmailTable
                      emails={EMAILS}
                      checkedItems={selectedDocs}
                      onCheckItem={handleSelectDoc}
                      onCheckAllItems={handleSelectAllDoc}
                    />
                  </DndProvider>
                ) : (
                  <DocumentTableView
                    documents={documents || []}
                    onClick={handleNavigateDetail}
                    selected={selectedDocs}
                    onSelectDoc={handleSelectDoc}
                    onSelectAllDoc={handleSelectAllDoc}
                  />
                )}
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
