import React, { useState } from 'react';

import { ListPimsFilters } from 'api/types';
import { EmailList } from 'app/shared/emailList/EmailList';
import { EMAILS } from 'api/mocks/email';
import { Box } from 'ui/atoms';
import { GeneralList } from 'app/shared/dms/generalList/GeneralList';
import { DMS_GENERAL_LIST_ITEMS as dmsGeneralListItems } from 'api/mocks/dms';

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
        <EmailList
          activeFilters={activeFilters}
          onFilter={setActiveFilters}
          items={[
            ...EMAILS.map(email => ({
              ...email,
              body: '',
            })),
          ]}
          onAdd={() => {}}
          count={EMAILS.length}
        />
      )}
      {category === 'crm' && folderType !== 'emails' && (
        <GeneralList
          activeFilters={activeFilters}
          onFilter={setActiveFilters}
          items={dmsGeneralListItems}
          onAdd={() => {}}
          count={3}
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
