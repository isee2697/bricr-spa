import React, { useState, ReactNode } from 'react';
import { useHistory, useParams } from 'react-router';

import { Box, Grid, IconButton, Loader } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { DmsDocument } from 'app/dms/Dms.types';
import { ListViewContainer } from '../listView/ListViewContainer';
import { ExitIcon, SeeIcon } from 'ui/atoms/icons';
import { GeneralPageSettings } from 'app/shared/dms/generalPageSettings/GeneralPageSettings';
import { DmsDocumentTypes } from 'app/dms/dictionaires';
import { CardWithBody, Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { DmsFolder, DmsFolderType } from 'api/types';
import { AddFolderDialog } from '../addFolderDialog/AddFolderDialog';
import { CardWithFolder } from '../../../../ui/templates/cards/cardWithFolder/CardWithFolder';
import { PageWithFolderListCard } from '../../../../ui/templates/page/PageWithCardFolderList/PageWithFolderListCard';

import { useStyles } from './SecondaryFolder.styles';
import { SecondaryFolderProps } from './SecondaryFolder.types';

export const SecondaryFolder = ({
  id,
  name,
  loading,
  type,
  entityType,
  onAddFolder,
  folders,
}: SecondaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { entityId } = useParams<{ entityId: string }>();

  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<DmsFolder | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DmsDocument | null>(null);

  const handleAdd = () => {
    setDialog(
      <AddFolderDialog
        isOpened={true}
        isAdd={true}
        onClose={() => {
          setDialog(null);
        }}
        onSubmit={({ folderName }) => {
          if (onAddFolder) {
            onAddFolder({
              entityId,
              entityType,
              foldername: folderName,
              type: DmsFolderType.Custom,
            });
          }

          // setSelectedDocument(foldersData?.[0].documents?.[0]!);
          setDialog(null);

          return new Promise(resolve => {});
        }}
      />,
    );
  };

  const handleSave = async () => {
    return undefined;
  };

  if (selectedDocument) {
    return (
      <GeneralPageSettings
        title={formatMessage({ id: `dms.documents.${entityType}_documents` })}
        types={DmsDocumentTypes[entityType]?.[type] || []}
        onSave={handleSave}
        titleActions={
          <IconButton size="small" variant="rounded">
            <SeeIcon />
          </IconButton>
        }
        headerProps={{
          customAction: (
            <IconButton size="small" variant="rounded" onClick={() => setSelectedDocument(null)}>
              <ExitIcon />
            </IconButton>
          ),
        }}
      />
    );
  }

  return (
    <>
      <PageWithFolderListCard
        folders={folders}
        path={'/'}
        onSidebarOpen={() => {}}
        isSidebarVisible={true}
        title={name}
        onAddFolder={folderName => {
          if (onAddFolder) {
            onAddFolder({
              entityId,
              entityType,
              foldername: folderName,
              type: DmsFolderType.Custom,
            });
          }
        }}
      />
      <Page
        showHeader
        title={name}
        titleActions={[]}
        headerProps={{
          customAction: (
            <IconButton size="small" variant="rounded" onClick={() => push(`${AppRoute.dms}/${entityType}/${type}`)}>
              <ExitIcon />
            </IconButton>
          ),
        }}
        classes={{ container: classes.page }}
      >
        <Grid item xs={12}>
          <CardWithFolder
            title={name}
            isLoading={loading}
            isError={false}
            setSelectedFolder={setSelectedFolder}
            path={'/'}
            foldersData={folders.map(item => ({ ...item, name: item.foldername }))}
            selectedFolder={selectedFolder}
          />

          {selectedFolder && (
            <Box mt={4}>
              <ListViewContainer
                id={selectedFolder.id}
                name={selectedFolder.foldername}
                folderType={selectedFolder.type!}
                type={type}
                entityType={entityType}
                data={[]}
              />
            </Box>
          )}
          {/* show add folder dialog */}

          {dialog}
        </Grid>
      </Page>
    </>
  );
};
