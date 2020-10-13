import React from 'react';
import { ObjectTypeDetailsHeader } from 'app/objectTypeDetails/objectTypeDetailsHeader/ObjectTypeDetailsHeader';
import { ObjectTypeDetailsCommonProps } from 'app/objectTypeDetails/ObjectTypeDetails.types';

export const Dashboard = ({ onSidebarOpen, isSidebarVisible }: ObjectTypeDetailsCommonProps) => {
  return (
    <>
      <ObjectTypeDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <div>Object type details dashboard</div>
    </>
  );
};
