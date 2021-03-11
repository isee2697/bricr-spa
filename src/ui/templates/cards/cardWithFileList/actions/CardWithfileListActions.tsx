import React from 'react';

import { Box, MenuItem } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ActionFunctionObject, FileType } from 'ui/templates/cards/cardWithFileList/CardWithFileList.types';
import { ListOptionsMenu } from 'ui/molecules';

export const CardWithFileListActions: <F extends FileType>(p: {
  actions: ActionFunctionObject<F>;
  item: F;
}) => React.ReactElement<{ actions: ActionFunctionObject<F>; item: F }> = ({ actions, item }) => {
  const { formatMessage } = useLocale();
  const actionNames = Object.keys(actions).filter(name => name !== 'onEdit' && name !== 'onDelete');

  return (
    <Box mr={2}>
      <ListOptionsMenu
        onDeleteClick={() => actions['onDelete']?.exec(item)}
        onEditClick={() => actions['onEdit']?.exec(item)}
      >
        {actionNames.map(name => (
          <MenuItem
            onClick={e => {
              e.stopPropagation();
              actions[name]?.exec(item);
            }}
          >
            {actions[name]?.icon}
            {formatMessage({ id: `common.${name.replace('on', '').toLowerCase()}` })}
          </MenuItem>
        ))}
      </ListOptionsMenu>
    </Box>
  );
};
