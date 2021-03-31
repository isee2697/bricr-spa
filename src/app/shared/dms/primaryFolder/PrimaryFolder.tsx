import React from 'react';
import { useHistory } from 'react-router';

import { DmsFolderType } from 'api/types';
import { useLocale } from 'hooks/useLocale/useLocale';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { PageWithFolderListCard } from 'ui/templates/page/PageWithCardFolderList/PageWithFolderListCard';
import { AppRoute } from 'routing/AppRoute.enum';

import { PrimaryFolderProps } from './PrimaryFolder.types';
import { PrimaryFolderFilters } from './dictionaries';

export const PrimaryFolder = ({
  activeFilters,
  onFilter,
  type,
  entityType,
  entityItems,
  pagination,
}: PrimaryFolderProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  const sortOptions = ['last_edited'];

  return (
    <PageWithFolderListCard
      title={formatMessage({ id: 'dms.folders.title' })}
      titleActions={[]}
      folders={entityItems.map(entityItem => ({
        id: entityItem.id,
        foldername: entityItem.name,
        companyId: '',
        entityId: '',
        entityType,
        type: DmsFolderType.Default,
      }))}
      type={'primary'}
      onSidebarOpen={() => {}}
      isSidebarVisible={true}
      path={'/'}
      activeFilters={activeFilters}
      onFilter={onFilter}
      pagination={pagination}
      cardTitle={[
        formatMessage({ id: `dms.documents.${entityType}` }),
        formatMessage({ id: `dms.documents.${type}` }),
      ].join(' ')}
      cardTitleActions={
        <FiltersButton data={activeFilters} getActiveFilters={onFilter} filters={PrimaryFolderFilters} />
      }
      cardTitleAmount={24}
      onSort={() => {}}
      sortOptions={sortOptions}
      onSelectFolder={folderId => push(`${AppRoute.dms}/${entityType}/${type}/${folderId}`)}
    />
  );
};
