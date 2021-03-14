import React, { useState } from 'react';

import { ListPimsFilters, PropertyType } from 'api/types';
import { EmailList } from 'app/shared/emailList/EmailList';
import { EMAILS } from 'api/mocks/email';
import { Box } from 'ui/atoms';

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
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });
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
