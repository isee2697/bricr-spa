import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Publication } from './Publication';
import { AddNewPublicationBody, PublicationItem, PublicationStatus } from './Publication.types';

export const PublicationContainer = (props: PimDetailsSectionProps) => {
  const [publications, setPublications] = useState<PublicationItem[]>([]);

  const handleAddNew = async (values: AddNewPublicationBody) => {
    setPublications([
      ...publications,
      {
        id: publications.length,
        name: values.name,
        type: values.type,
        startDate: DateTime.local(),
        status: PublicationStatus.Error,
        isActive: true,
      },
    ]);
  };

  const handleDeleteItem = async (id: number) => {
    setPublications([...publications.filter(publication => publication.id !== id)]);
  };

  return <Publication {...props} onAddNewPublication={handleAddNew} onDelete={handleDeleteItem} items={publications} />;
};

export default PublicationContainer;
