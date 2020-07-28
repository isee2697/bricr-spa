import React from 'react';

import { ObjectTypeDetailsHeader } from 'app/objectTypeDetails/objectTypeDetailsHeader/ObjectTypeDetailsHeader';
import { ObjectTypeDetailsProps } from 'app/objectTypeDetails/ObjectTypeDetails.types';

export const Dashboard = ({ onSidebarOpen, isSidebarVisible }: ObjectTypeDetailsProps) => {
  return (
    <>
      <ObjectTypeDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <div>Object type details dashboard</div>
    </>
  );
};
