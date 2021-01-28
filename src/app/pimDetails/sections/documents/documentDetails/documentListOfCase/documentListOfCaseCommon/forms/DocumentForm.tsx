import React, { ReactElement, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

import { useLocale, useModalDispatch } from 'hooks';
import { FormSection } from 'ui/organisms';
import { DocumentFormProps } from '../DocumentListOfCaseCommon.types';
import { Box, Checkbox, Menu, MenuItem, Typography } from 'ui/atoms';
import { useStyles } from '../DocumentListOfCaseCommon.styles';
import { InfoSection } from 'ui/molecules';
import { DeleteIcon, HistoryIcon } from 'ui/atoms/icons';

import { DocumentFormRow } from './DocumentFormRow';
import { DocumentFormRowDragObject } from './DocumentFormRowDragObject';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export function DocumentForm({
  initOpened,
  card,
  onChangeItemState,
  isSidebarVisible,
  onChangeOrder,
  onDeleteCard,
  onDeleteItem,
}: DocumentFormProps) {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const classes = useStyles();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <DocumentFormRowDragObject isSidebarVisible={isSidebarVisible} />
        <FormSection
          title={card?.name}
          isExpandable
          isInitExpanded={initOpened}
          onAdd={() => open('add-lvz-item', { id: card?.id })}
          onOptionsClick={onMenuClick}
        >
          {editing => (
            <>
              {(!card || !card.items || card.items.length === 0) && (
                <InfoSection emoji="🤔">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.specification.outside.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.specification.outside.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
              {card && card.items && card?.items?.length > 0 && (
                <>
                  <Box display="flex" alignItems="center" className={classes.tableTopHeader}>
                    <Checkbox color="primary" />
                    <Typography variant="h5" className={classes.mediumText}>
                      {formatMessage({ id: 'common.select_all' })}
                    </Typography>
                  </Box>
                  <Box className={classes.table}>
                    <Box display="flex" className={classes.tableHeadRow}>
                      <Box className={classes.checkboxCell} />
                      <Box className={classes.fullWidthCell}>
                        <Typography variant="h5" className={classes.mediumText}>
                          {formatMessage({ id: 'pim_details.specification.outside.description' })}
                        </Typography>
                      </Box>
                      <Box className={classes.narrowCell}>
                        <Typography variant="h5" className={classes.mediumText}>
                          {formatMessage({ id: 'pim_details.specification.outside.stays_behind' })}
                        </Typography>
                      </Box>
                      <Box className={classes.narrowCell}>
                        <Typography variant="h5" className={classes.mediumText}>
                          {formatMessage({ id: 'pim_details.specification.outside.goes_with' })}
                        </Typography>
                      </Box>
                      <Box className={classes.narrowCell}>
                        <Typography variant="h5" className={classes.mediumText}>
                          {formatMessage({ id: 'pim_details.specification.outside.for_takeover' })}
                        </Typography>
                      </Box>
                      <Box className={classes.narrowCell}>
                        <Typography variant="h5" className={classes.mediumText}>
                          {formatMessage({ id: 'pim_details.specification.outside.nvt' })}
                        </Typography>
                      </Box>
                      <Box className={classes.narrowCell} />
                    </Box>
                    <Box>
                      {card?.items?.map((item, index) => (
                        <DocumentFormRow
                          key={index}
                          index={index}
                          item={item}
                          editing={editing}
                          onChangeOrder={onChangeOrder}
                          onDeleteItem={onDeleteItem}
                        />
                      ))}
                    </Box>
                  </Box>
                </>
              )}
            </>
          )}
        </FormSection>
      </DndProvider>
      <Menu
        id="document-card-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <SubMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onMenuClose();
            onDeleteCard?.(card?.id as number);
          }}
          icon={<DeleteIcon color="secondary" />}
        />
      </Menu>
    </>
  );
}
