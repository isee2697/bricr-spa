import React, { ReactNode, useState } from 'react';
import { useHistory } from 'react-router';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Box, Card, CardContent, CardHeader, Checkbox, Chip, FormControlLabel, Grid } from 'ui/atoms';
import { ListPimsFilters, PropertyType } from 'api/types';
import { UploadModal, UploadModalField } from 'ui/organisms';
import { useLocale } from 'hooks';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { EmailTable } from 'app/email/emailTable/EmailTable';
import { EMAILS } from 'api/mocks/email';

import { DocumentListViewContainerProps } from './DocumentListViewContainer.types';
import { ListViewTabs } from './listViewTabs/ListViewTabs';
import { DocumentTableView } from './tableView/DocumentTableView';
import { useStyles } from './DocumentListViewContainer.styles';

export const DocumentListViewContainer = ({ path, folder, documents }: DocumentListViewContainerProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const { push } = useHistory();

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const handleUpload = () => {
    setDialog(
      <UploadModal
        isOpened={true}
        onClose={() => setDialog(null)}
        onUpload={files => {
          setDialog(null);
        }}
      />,
    );
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
              {!folder.isEmailFolder && (
                <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={handleFilterChange} />
              )}
              <Box width="100%" display="flex" flexDirection="column" px={2} pt={2}>
                <Box mx={2}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={documents?.length === selectedDocs.length}
                        onClick={handleSelectAllDoc}
                      />
                    }
                    label={formatMessage({ id: 'common.select_all' })}
                  />
                </Box>
                {!folder.isEmailFolder && (
                  <>
                    <Box mt={1.5} />
                    <UploadModalField
                      onFileParse={parsedFiles => {}}
                      onSetError={() => {}}
                      title={
                        <>
                          <strong>{formatMessage({ id: 'crm.details.documents.add_documents' })}</strong>{' '}
                          {formatMessage({ id: 'upload_modal.or_drag_and_drop' })}
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

      {dialog}
    </Grid>
  );
};
