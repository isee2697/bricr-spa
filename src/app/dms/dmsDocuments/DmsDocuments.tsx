import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box } from 'ui/atoms';
import { Page } from 'ui/templates';

import { DmsDocumentMetaItem } from './dmsDocumentMetaItem/DmsDocumentMetaItem';
import { DmsDocumentsProps } from './DmsDocuments.types';

export const DmsDocuments = ({ dms }: DmsDocumentsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Page
        showHeader
        withoutHeader
        title={formatMessage({
          id: `dms.documents.title`,
        })}
        titleActions={[]}
      >
        {dms.folders?.length
          ? dms.folders.map((folder, index) => (
              <Box mt={3} mb={2} key={index} width="100%">
                <DmsDocumentMetaItem
                  name={folder.data.name}
                  meta={folder.meta}
                  onRename={
                    folder.data.id === 'pim' || folder.data.id === 'crm' || folder.data.id === 'sales'
                      ? undefined
                      : (name: string) => {
                          // TODO: rename folder
                        }
                  }
                  onDelete={
                    folder.data.id === 'pim' || folder.data.id === 'crm' || folder.data.id === 'sales'
                      ? undefined
                      : () => {
                          // TODO: remove folder
                        }
                  }
                />
              </Box>
            ))
          : null}
      </Page>
    </>
  );
};
