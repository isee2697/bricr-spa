import React from 'react';
import { useHistory, useParams } from 'react-router';

import { Box, Card, CardContent, CardHeader, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { DocumentTableView } from '../../documentListView/tableView/DocumentTableView';

import { DocumentPreviousVersionsProps } from './DocumentPreviousVersions.types';

export const DocumentPreviousVersions = ({ documents }: DocumentPreviousVersionsProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleNavigateDetail = (docId: string) => {
    push(AppRoute.crmRelationsDocumentDetails.replace('id', id).replace('docId', docId));
  };

  return (
    <Page withoutHeader>
      <Card>
        <CardHeader
          title={formatMessage({ id: 'crm.details.documents.previous_versions' })}
          action={
            <>
              <IconButton variant="rounded" size="small" onClick={() => {}}>
                <ManageIcon />
              </IconButton>
              <Box mr={2} />
              <IconButton variant="rounded" size="small" onClick={() => {}}>
                <SearchIcon />
              </IconButton>
            </>
          }
        />
        <CardContent>
          <DocumentTableView documents={documents || []} onClick={handleNavigateDetail} />
        </CardContent>
      </Card>
    </Page>
  );
};
