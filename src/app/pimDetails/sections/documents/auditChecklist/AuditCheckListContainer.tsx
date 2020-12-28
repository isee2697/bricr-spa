import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { DocumentsAuditCheckList } from './AuditCheckList';

export const DocumentsAuditCheckListContainer = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
}: PimDetailsSectionProps) => {
  return <DocumentsAuditCheckList />;
};
