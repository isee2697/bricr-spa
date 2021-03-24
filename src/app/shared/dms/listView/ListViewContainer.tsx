import React, { useState } from 'react';

import { DmsEntityType, ListPimsFilters } from 'api/types';
import { EMAILS } from 'api/mocks/email';
import { Box } from 'ui/atoms';
import { CardWithTable } from 'ui/templates';
import { FileType, FileTypeView } from 'ui/templates/cards/cardWithTable/CardWithTable.types';
import { DMS_GENERAL_LIST_ITEMS as dmsGeneralListItems } from 'api/mocks/dms';

import { ListViewContainerProps } from './ListViewContainer.types';
import { DmsViewTabs } from './viewTabs/ViewTabs';
import { DmsDetailView } from './detailView/DetailView';
import { TableView } from './tableView/TableView';
import { DmsViewType } from './viewTabs/ViewTabs.types';

export const ListViewContainer = ({
  id,
  name,
  folderType,
  type,
  entityType,
  isLoading,
  isError,
  data,
}: ListViewContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});
  const [view, setView] = useState<DmsViewType>('detail');

  return (
    <>
      {entityType === DmsEntityType.Crm && folderType === 'emails' && (
        <CardWithTable<FileType>
          titleId={'common.emails'}
          onAdd={() => {}}
          view={FileTypeView.Email}
          files={
            [
              ...EMAILS.map(email => ({
                ...email,
                body: '',
              })),
            ] as FileType[]
          }
          actions={{
            onEdit: { exec: () => {} },
            onDelete: { exec: () => {} },
          }}
          titleAmount={EMAILS.length}
        />
      )}
      {((entityType === DmsEntityType.Crm && folderType !== 'emails') || entityType === DmsEntityType.Pim) && (
        <CardWithTable<FileType>
          titleId={`common.${type}`}
          onAdd={() => {}}
          view={FileTypeView.File}
          files={dmsGeneralListItems as FileType[]}
          actions={{
            onEdit: { exec: () => {} },
            onDelete: { exec: () => {} },
          }}
          titleAmount={dmsGeneralListItems.length}
        />
      )}
      {entityType !== DmsEntityType.Crm && entityType !== DmsEntityType.Pim && (
        <Box width="100%" display="flex" flexDirection="column">
          <Box ml="auto" mr={1.5}>
            <DmsViewTabs
              status={view}
              onStatusChange={setView}
              activeFilters={activeFilters}
              onFilter={setActiveFilters}
              onAdd={() => {}}
            />
          </Box>
          <Box mt={7}>{view === 'detail' ? <DmsDetailView data={data || []} /> : <TableView data={data || []} />}</Box>
        </Box>
      )}
    </>
  );
};
