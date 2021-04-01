import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { IconButton } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { DmsDocument } from 'app/dms/Dms.types';
import { ExitIcon, SeeIcon } from 'ui/atoms/icons';
import { GeneralPageSettings } from 'app/shared/dms/generalPageSettings/GeneralPageSettings';
import { DmsDocumentTypes } from 'app/dms/dictionaires';
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
}: SecondaryFolderProps) => {
  const { formatMessage } = useLocale();
  const { entityId } = useParams<{ entityId: string }>();
  const { push } = useHistory();

  const [selectedDocument, setSelectedDocument] = useState<DmsDocument | null>(null);

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
    />
  );
};
