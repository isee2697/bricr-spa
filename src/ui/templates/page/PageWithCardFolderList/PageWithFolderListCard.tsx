import React, { useCallback, useEffect, useState } from 'react';

import { Page } from '../Page';
import { Box, Grid } from 'ui/atoms';
import { CardWithFolder } from '../../cards/cardWithFolder/CardWithFolder';
import { CardWithTable } from '../../cards/cardWithTable/CardWithTable';
import { FileType, FileTypeView } from '../../cards/cardWithTable/CardWithTable.types';
import { ClockIcon, HomeIcon } from 'ui/atoms/icons';
import { DmsFolder, DmsFolderViewType } from 'api/types';
import { EMAILS } from 'api/mocks/email';
import { InvoicesContainer } from 'app/shared/dms/cards/invoices/InvoicesContainer';
import { QuestionairesContainer } from 'app/shared/dms/cards/questoinaires/QuestionairesContainer';

import { PageWithFolderListCardProps } from './PageWithFolderListCard.types';
import { useStyles } from './PageWithCardFolderList.styles';

const actions = {
  onReply: { exec: () => {}, icon: <HomeIcon /> },
  replyToAll: { exec: () => {}, icon: <ClockIcon /> },
  forWard: { exec: () => {}, icon: <ClockIcon /> },
  markAsUnread: { exec: () => {}, icon: <ClockIcon /> },
  addAsRelation: { exec: () => {}, icon: <ClockIcon /> },
  linkToSales: { exec: () => {}, icon: <ClockIcon /> },
  linkToPim: { exec: () => {}, icon: <ClockIcon /> },
  linkToCalendar: { exec: () => {}, icon: <ClockIcon /> },
  archive: { exec: () => {}, icon: <ClockIcon /> },
};

export const PageWithFolderListCard = ({
  title,
  titleActions,
  headerProps,
  folders,
  onUploadFiles,
  cardTitle,
  cardTitleActions,
  cardTitleAmount,
  files,
  loadingFiles = false,
  onSelectDmsFolder,
  ...props
}: PageWithFolderListCardProps) => {
  const classes = useStyles();

  const [selectedFolder, setSelectedFolder] = useState<DmsFolder | null>(null);

  useEffect(() => {
    if (selectedFolder && onSelectDmsFolder) {
      onSelectDmsFolder(selectedFolder);
    }
  }, [onSelectDmsFolder, selectedFolder]);

  const handleUploadFiles = useCallback(
    (folder: DmsFolder, files: File[]) => {
      onUploadFiles?.(folder, files);
    },
    [onUploadFiles],
  );

  return (
    <>
      <Page showHeader title={title} titleActions={titleActions} headerProps={headerProps}>
        <Grid data-testid={'card-with-folder'} item xs={12} className={classes.root}>
          <CardWithFolder
            foldersData={folders}
            isLoading={false}
            isError={false}
            setSelectedFolder={setSelectedFolder}
            onUploadFiles={onUploadFiles}
            selectedFolder={selectedFolder}
            title={cardTitle}
            titleActions={cardTitleActions}
            titleAmount={cardTitleAmount}
            {...props}
          />
          {selectedFolder && (
            <Box data-testid="card-with-table" mt={3.5}>
              <CardWithTable<FileType>
                onAdd={() => {}}
                titleId={selectedFolder.isEmailFolder ? 'common.email' : 'common.common'}
                titleAmount={selectedFolder.filesCount ?? 0}
                view={selectedFolder.isEmailFolder ? FileTypeView.Email : FileTypeView.File}
                files={
                  (selectedFolder.isEmailFolder
                    ? (EMAILS as FileType[])
                    : (files || []).map(file => ({
                        ...file,
                        name: file.fileName,
                        type: file.meta.fileType,
                        dateCreated: file.meta.createdAt,
                        uri: file.signedUrl,
                        date: file.meta.createdAt,
                      }))) as FileType[]
                }
                onUploadFiles={files => handleUploadFiles(selectedFolder, files)}
                actions={{
                  onEdit: { exec: () => {} },
                  onDelete: { exec: () => {} },
                  ...(selectedFolder.isEmailFolder ? actions : {}),
                }}
              />
            </Box>
          )}
          {selectedFolder && selectedFolder.viewType === DmsFolderViewType.Invoices && (
            <Box mt={3.5}>
              <InvoicesContainer />
            </Box>
          )}
          {selectedFolder && selectedFolder.viewType === DmsFolderViewType.Contracts && <Box mt={3.5}>Contracts</Box>}
          {selectedFolder && selectedFolder.viewType === DmsFolderViewType.Questionaires && (
            <Box mt={3.5}>
              <QuestionairesContainer />
            </Box>
          )}
          {selectedFolder && selectedFolder.viewType === DmsFolderViewType.Surveys && <Box mt={3.5}>Surveys</Box>}
          {selectedFolder && selectedFolder.viewType === DmsFolderViewType.ListOfItems && (
            <Box mt={3.5}>ListOfItems</Box>
          )}
        </Grid>
      </Page>
    </>
  );
};
