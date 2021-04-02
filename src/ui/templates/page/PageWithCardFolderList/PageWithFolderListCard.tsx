import React, { useCallback, useState } from 'react';
import { DateTime } from 'luxon';

import { Page } from '../Page';
import { Box, Grid } from 'ui/atoms';
import { CardWithFolder } from '../../cards/cardWithFolder/CardWithFolder';
import { CardWithTable } from '../../cards/cardWithTable/CardWithTable';
import { FileType, FileTypeView } from '../../cards/cardWithTable/CardWithTable.types';
import { ClockIcon, HomeIcon } from 'ui/atoms/icons';
import { DmsFolder } from 'api/types';
import { EMAILS } from 'api/mocks/email';
import { InvoiceItems } from 'api/mocks/invoice';

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
  ...props
}: PageWithFolderListCardProps) => {
  const classes = useStyles();

  const [selectedFolder, setSelectedFolder] = useState<DmsFolder | null>(null);

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
                titleId={selectedFolder.foldername}
                titleAmount={0}
                view={
                  selectedFolder.isEmailFolder
                    ? FileTypeView.Email
                    : selectedFolder.isQuestionaireFolder
                    ? FileTypeView.Questionaire
                    : selectedFolder.isListOfItemsFolder
                    ? FileTypeView.ListOfItems
                    : selectedFolder.isContractsFolder
                    ? FileTypeView.Contracts
                    : selectedFolder.isSurveyFolder
                    ? FileTypeView.Survey
                    : selectedFolder.isInvoicesFolder
                    ? FileTypeView.Invoices
                    : FileTypeView.File
                }
                files={
                  selectedFolder.isEmailFolder
                    ? (EMAILS as FileType[])
                    : selectedFolder.isInvoicesFolder
                    ? ((InvoiceItems as unknown) as FileType[])
                    : ([
                        {
                          ...EMAILS[0],
                          id: '0001',
                          name: 'PDF Format',
                          uri: 'http://localhost',
                          dateCreated: DateTime.local(),
                          stepsCompleted: [],
                          type: 'pdf',
                        },
                      ] as FileType[])
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
        </Grid>
      </Page>
    </>
  );
};
