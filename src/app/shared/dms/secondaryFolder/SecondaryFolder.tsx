import React from 'react';
import { useHistory, useParams } from 'react-router';

import { IconButton } from 'ui/atoms';
import { ExitIcon } from 'ui/atoms/icons';
import { DmsFolderType } from 'api/types';
import { PageWithFolderListCard } from 'ui/templates/page/PageWithCardFolderList/PageWithFolderListCard';
import { AppRoute } from 'routing/AppRoute.enum';

import { SecondaryFolderProps } from './SecondaryFolder.types';

export const SecondaryFolder = ({
  name,
  type,
  entityType,
  onAddFolder,
  folders,
  hideExitButton = false,
  onExit,
  onSelectDmsFolder,
  files,
  loadingFiles,
  onUpload,
}: SecondaryFolderProps) => {
  const { entityId } = useParams<{ entityId: string }>();
  const { push } = useHistory();

  return (
    <PageWithFolderListCard
      folders={folders}
      path={'/'}
      onSidebarOpen={() => {}}
      isSidebarVisible={true}
      title={name}
      titleActions={[]}
      headerProps={{
        customAction: !hideExitButton ? (
          <IconButton
            size="small"
            variant="rounded"
            onClick={() => (onExit ? onExit() : push(`${AppRoute.dms}/${entityType}/${type}`))}
          >
            <ExitIcon />
          </IconButton>
        ) : (
          undefined
        ),
      }}
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
      files={files}
      loadingFiles={loadingFiles}
      onSelectDmsFolder={onSelectDmsFolder}
      onUploadFiles={onUpload}
    />
  );
};
