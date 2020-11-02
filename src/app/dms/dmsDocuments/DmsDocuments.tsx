import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box } from 'ui/atoms';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { Page } from 'ui/templates';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';

import { DmsDocumentMetaItem } from './dmsDocumentMetaItem/DmsDocumentMetaItem';
import { DmsDocumentsProps } from './DmsDocuments.types';

export const DmsDocuments = ({ dms }: DmsDocumentsProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/documents"
        title={formatMessage({ id: 'dms.documents.title' })}
      />
      <Page withoutHeader>
        {dms.folders?.length
          ? dms.folders.map((folder, index) => (
              <Box mt={5} key={index} width="100%">
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
