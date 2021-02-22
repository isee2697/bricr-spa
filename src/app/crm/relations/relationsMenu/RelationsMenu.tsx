import React from 'react';
import { useHistory } from 'react-router-dom';

import { CrmStatus } from 'api/types';
import { ListOptionsMenu } from 'ui/molecules';
import { useLocale } from 'hooks';
import { EditIcon } from 'ui/atoms/icons';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { AppRoute } from 'routing/AppRoute.enum';

import { RelationsMenuProps } from './RelationsMenu.types';

export const RelationsMenu = ({ item, onMerge, onEdit, onMove, onUpdateStatus, onDelete }: RelationsMenuProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();

  const handleEdit = () => {
    if (onEdit) {
      onEdit(item.id);
    } else {
      push(AppRoute.crmRelationsDetails.replace(':id', item.id));
    }
  };

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
      <ListOptionsMenu
        id={`crm-relation-menu-${item.id}`}
        onDeleteClick={() => onDelete?.(item.id)}
        hideDeleteButton={!onDelete}
        hideEditButton
      >
        {onMerge && (
          <ListOptionsMenuItem
            title={formatMessage({ id: `crm.item.merge_relation` })}
            onClick={() => onMerge?.(item.id)}
          />
        )}
        <ListOptionsMenuItem title={formatMessage({ id: `common.edit` })} icon={<EditIcon />} onClick={handleEdit} />
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
      </ListOptionsMenu>
    </>
  );
};
