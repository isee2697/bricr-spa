import React, { useState } from 'react';

import { ListPimsFilters } from 'api/types';
import { EMAILS } from 'api/mocks/email';
import { Box } from 'ui/atoms';
import { CardWithTable } from 'ui/templates';
import { FileType, FileTypeView } from 'ui/templates/cards/cardWithTable/CardWithTable.types';
import { GeneralList } from 'app/shared/dms/generalList/GeneralList';
import { DMS_GENERAL_LIST_ITEMS as dmsGeneralListItems } from 'api/mocks/dms';
import { DocumentItem } from 'app/shared/dms/generalList/GeneralList.types';

import { DmsListViewContainerProps } from './DmsListViewContainer.types';
import { DmsViewTabs } from './dmsViewTabs/DmsViewTabs';
import { DmsDetailView } from './dmsDetailView/DmsDetailView';
import { DmsTableView } from './dmsTableView/DmsTableView';
import { DmsViewType } from './dmsViewTabs/DmsViewTabs.types';

export const DmsListViewContainer = ({
  id,
  name,
  folderType,
  type,
  category,
  isLoading,
  isError,
  data,
}: DmsListViewContainerProps) => {
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});
  const [view, setView] = useState<DmsViewType>('detail');

  return (
    <>
      {category === 'crm' && folderType === 'emails' && (
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
      {category === 'crm' && folderType !== 'emails' && (
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
      {category !== 'crm' && (
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
          <Box mt={7}>
            {view === 'detail' ? <DmsDetailView data={data || []} /> : <DmsTableView data={data || []} />}
          </Box>
        </Box>
      )}
    </>
  );
};
