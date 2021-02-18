import React from 'react';
import { useHistory } from 'react-router-dom';

import { CrmStatus } from 'api/types';
import { ListOptionsMenu } from 'ui/molecules';
import { useLocale } from 'hooks';
import { EditIcon } from 'ui/atoms/icons';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { AppRoute } from 'routing/AppRoute.enum';

import { BusinessesMenuProps } from './BusinessesMenu.types';

export const BusinessesMenu = ({ item, onMerge, onEdit, onMove, onActive, onDelete }: BusinessesMenuProps) => {
  const { push } = useHistory();
  const { formatMessage } = useLocale();

  const handleEdit = (id: string) => {
    if (onEdit) {
      onEdit(id);
    } else {
      push(AppRoute.crmBusinessesDetails.replace(':id', id));
    }
  };

  return (
    <ListOptionsMenu
      id={`crm-business-menu-${item.id}`}
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
      <ListOptionsMenuItem
        title={formatMessage({ id: `common.edit` })}
        icon={<EditIcon />}
        onClick={() => handleEdit(item.id)}
      />
      {onMove && (
        <ListOptionsMenuItem
          title={formatMessage({ id: `crm.item.move_relation` })}
          onClick={() => onMove?.(item.id)}
        />
      )}
      {onActive && (
        <ListOptionsMenuItem
          title={formatMessage({ id: `crm.item.set_${item.status === CrmStatus.Active ? 'inactive' : 'active'}` })}
          onClick={() => onActive?.(item.id)}
        />
      )}
    </ListOptionsMenu>
  );
};
