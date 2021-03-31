import React from 'react';

import { CrmStatus } from 'api/types';
import { useLocale } from 'hooks';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { RelationsMenuItemsProps } from './RelationsMenu.types';

export const RelationMenuItems = ({ item, onMerge, onMove, onUpdateStatus }: RelationsMenuItemsProps) => {
  const { formatMessage } = useLocale();

  const handleActive = () => {
    if (!onUpdateStatus) return;

    if (item.status === CrmStatus.Active) {
      onUpdateStatus(item.id, CrmStatus.Inactive);
    } else if (item.status === CrmStatus.Inactive || CrmStatus.ActionRequired) {
      onUpdateStatus(item.id, CrmStatus.Active);
    }
  };

  return (
    <>
      {onMerge && (
        <ListOptionsMenuItem
          title={formatMessage({ id: `crm.item.merge_relation` })}
          onClick={() => onMerge?.(item.id)}
        />
      )}

      {onMove && (
        <ListOptionsMenuItem
          title={formatMessage({ id: `crm.item.move_relation` })}
          onClick={() => onMove?.(item.id)}
        />
      )}
      <ListOptionsMenuItem
        title={formatMessage({ id: `crm.item.set_${item.status === CrmStatus.Active ? 'inactive' : 'active'}` })}
        onClick={handleActive}
      />
    </>
  );
};
