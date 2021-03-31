import React, { useState } from 'react';

import { Grid, Menu } from 'ui/atoms';
import { ClockIcon, DeleteIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AddLvzPropertyGroupItemModal } from '../addLvzPropertyGroupItemModal/AddLvzPropertyGroupItemModal';
import { AddLvzPropertyGroupItemBody } from '../addLvzPropertyGroupItemModal/AddLvzPropertyGroupItemModal.types';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { CardWithList } from 'ui/templates';

import { LvzPropertyGroupItem, LzvPropertyItemProps } from './LzvPropertyItem.types';

export const LzvPropertyItem = ({ group }: LzvPropertyItemProps) => {
  const { formatMessage } = useLocale();
  const [lvzGroupItems, setLvzGroupItems] = useState<LvzPropertyGroupItem[]>([]);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-lvz-property-group-item');

  const { id, name } = group;

  const initialValues = {
    name,
  };

  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const handleSave = async () => {
    return undefined;
  };

  const handleAddLvzGroupItem = async (body: AddLvzPropertyGroupItemBody) => {
    setLvzGroupItems([
      ...lvzGroupItems,
      {
        id: `${lvzGroupItems.length}`,
        name: body.name,
      },
    ]);

    close('add-lvz-property-group-item');

    return undefined;
  };

  const handleSaveSubItem = async (value: LvzPropertyGroupItem) => {
    // TODO: Save group sub item

    return undefined;
  };

  return (
    <>
      <CardWithList
        emoji="🤔"
        emptyStateTextFirst={formatMessage({ id: 'dms.templates.lvz_property.item.empty.title' })}
        emptyStateTextSecond={formatMessage({ id: 'dms.templates.lvz_property.item.empty.description' })}
        title={name}
        items={lvzGroupItems}
        onSave={(value: LvzPropertyGroupItem) => handleSaveSubItem(value)}
        onAdd={() => open('add-lvz-property-group-item')}
        onOptionsClick={onMenuClick}
        renderGenericFields={isEditing => (
          <AutosaveForm onSave={handleSave} initialValues={initialValues}>
            <Grid item xs={12}>
              <GenericField
                fullWidth
                name="name"
                label={formatMessage({ id: 'dms.templates.lvz_property.item.name_lvz_group' })}
                placeholder={formatMessage({ id: 'dms.templates.lvz_property.item.name_lvz_group.placeholder' })}
                disabled={!isEditing}
              />
            </Grid>
          </AutosaveForm>
        )}
        renderItem={(item, isEditing) => <></>}
      />
      <Menu
        id={`lvz-property-item-${id}`}
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'dms.templates.clone',
          })}
          icon={<ClockIcon />}
        />
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'dms.templates.inactive',
          })}
          icon={<ClockIcon />}
        />
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          icon={<DeleteIcon color="secondary" />}
          color="secondary"
        />
      </Menu>
      <AddLvzPropertyGroupItemModal
        isOpened={isModalOpen}
        onClose={() => close('add-lvz-property-group-item')}
        onSubmit={handleAddLvzGroupItem}
      />
    </>
  );
};
