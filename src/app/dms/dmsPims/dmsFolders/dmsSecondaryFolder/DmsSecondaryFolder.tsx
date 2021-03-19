import React, { useState, ReactNode } from 'react';
import { useHistory } from 'react-router';

import { Box, Grid, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { DmsDocument, DmsFolderType } from 'app/dms/Dms.types';
import { DmsListViewContainer } from '../dmsListView/DmsListViewContainer';
import { ExitIcon, SeeIcon } from 'ui/atoms/icons';
import { DmsAddFolderDialog } from 'app/dms/dmsPims/dmsFolders/dmsAddFolderDialog/DmsAddFolderDialog';
import { GeneralPageSettings } from 'app/shared/dms/generalPageSettings/GeneralPageSettings';
import { DmsDocumentTypes } from 'app/dms/dictionaires';
import { CardWithBody, Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './DmsSecondaryFolder.styles';
import { DmsSecondaryFolderProps } from './DmsSecondaryFolder.types';

export const DmsSecondaryFolder = ({
  name,
  foldersData,
  isLoading,
  type,
  category,
  onAddFolder,
}: DmsSecondaryFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<DmsFolderType | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DmsDocument | null>(null);

  const handleAdd = () => {
    setDialog(
      <DmsAddFolderDialog
        isOpened={true}
        isAdd={true}
        onClose={() => {
          setDialog(null);
        }}
        onSubmit={({ folderName }) => {
          if (onAddFolder) {
            onAddFolder(folderName);
          }
          setSelectedDocument(foldersData?.[0].documents?.[0]!);
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
        title={formatMessage({ id: `dms.documents.${category}_documents` })}
        types={DmsDocumentTypes[category]?.[type] || []}
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
    <Page
      showHeader
      title={formatMessage({ id: `dms.folders.${type}` })}
      titleActions={[]}
      headerProps={{
        customAction: (
          <IconButton size="small" variant="rounded" onClick={() => push(`${AppRoute.dms}/${category}/${type}`)}>
            <ExitIcon />
          </IconButton>
        ),
      }}
      classes={{ container: classes.page }}
    >
      <Grid item xs={12}>
        <CardWithBody>
          <Box mt={4}>
            <Grid container>
              {isLoading ? (
                <Grid item xs={12}>
                  <PropertyItemPlaceholder />
                </Grid>
              ) : foldersData?.length ? (
                foldersData.map((item, index) => (
                  <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                    <FolderContainer
                      id={item.id}
                      name={item.name}
                      childCount={item.documents?.length || 0}
                      type={item.isCustom ? 'secondary' : 'primary'}
                      onClick={() => {
                        setSelectedFolder(item.id === selectedFolder?.id ? null : item);
                      }}
                      isOpened={item.id === selectedFolder?.id}
                    />
                  </Grid>
                ))
              ) : null}

              <Grid item className={classes.listItem} xs={6} sm={4} lg={2}>
                <FolderContainer
                  id="add_folder"
                  name={formatMessage({ id: 'dms.documents.add_folder' })}
                  onClick={() => {
                    handleAdd();
                  }}
                  isAdd
                />
              </Grid>
            </Grid>
          </Box>
        </CardWithBody>

        {selectedFolder && (
          <Box mt={4}>
            <DmsListViewContainer
              id={selectedFolder.id}
              name={selectedFolder.name}
              folderType={selectedFolder.type!}
              type={type}
              category={category}
              data={selectedFolder.documents}
            />
          </Box>
        )}
        {/* show add folder dialog */}

        {dialog}
      </Grid>
    </Page>
  );
};
