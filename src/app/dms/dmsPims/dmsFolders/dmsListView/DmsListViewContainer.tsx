import React, { useState } from 'react';

import { ListPimsFilters, PropertyType } from 'api/types';
import { EmailList } from 'app/shared/emailList/EmailList';
import { EMAILS } from 'api/mocks/email';

import { DmsListViewContainerProps } from './DmsListViewContainer.types';

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
    </>
  );
};
