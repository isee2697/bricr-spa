import React, { ReactElement, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import clsx from 'classnames';

import { Box, Checkbox, IconButton, Menu, MenuItem, Radio, Typography } from 'ui/atoms';
import { DeleteIcon, HistoryIcon, MenuIcon } from 'ui/atoms/icons';
import { DocumentOutsideItemState } from '../../DocumentListOfCase.types';
import { useStyles } from '../DocumentListOfCaseCommon.styles';
import { DocumentFormRowType } from '../DocumentListOfCaseCommon.types';
import { useLocale } from 'hooks';

import { DocumentFormRowProps } from './DocumentFormRow.types';

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

export const DocumentFormRow = ({ item, editing, index, onChangeOrder, onDeleteItem }: DocumentFormRowProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [itemState, setItemState] = useState(DocumentOutsideItemState.StaysBehind);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const [, drag] = useDrag({
    item: {
      type: 'UpdatePimDocumentOrder',
      itemState,
      isEvenRow: index % 2 === 0,
      ...item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isDrag, isOver, item: dragItem }, drop] = useDrop({
    accept: 'UpdatePimDocumentOrder',
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
      item: monitor.getItem(),
    }),
    drop: (dragItem: DocumentFormRowType, monitor: DropTargetMonitor) => {
      onChangeOrder?.(dragItem.id, item.id);
    },
  });

  return (
    <>
      <div key={item.id} ref={drag}>
        <div ref={drop}>
          <Box display="flex" alignItems="center" className={clsx(classes.tableRow, index % 2 === 0 && 'even')}>
            <Box className={classes.checkboxCell}>
              <Checkbox color="primary" />
            </Box>
            <Box width="100%" className={classes.fullWidthCell}>
              <Typography variant="h3" className={classes.mediumText}>
                {item.description}
              </Typography>
            </Box>
            <Box className={classes.narrowCell}>
              <Radio
                name={`outsideOption${item.id}`}
                color="primary"
                checked={itemState === DocumentOutsideItemState.StaysBehind}
                onChange={() => editing && setItemState(DocumentOutsideItemState.StaysBehind)}
              />
            </Box>
            <Box className={classes.narrowCell}>
              <Radio
                name={`outsideOption${item.id}`}
                color="primary"
                checked={itemState === DocumentOutsideItemState.GoesWith}
                onChange={() => editing && setItemState(DocumentOutsideItemState.GoesWith)}
              />
            </Box>
            <Box className={classes.narrowCell}>
              <Radio
                name={`outsideOption${item.id}`}
                color="primary"
                checked={itemState === DocumentOutsideItemState.ForTakeover}
                onChange={() => editing && setItemState(DocumentOutsideItemState.ForTakeover)}
              />
            </Box>
            <Box className={classes.narrowCell}>
              <Radio
                name={`outsideOption${item.id}`}
                color="primary"
                checked={itemState === DocumentOutsideItemState.Nvt}
                onChange={() => editing && setItemState(DocumentOutsideItemState.Nvt)}
              />
            </Box>
            <Box className={classes.narrowCell}>
              <IconButton size="small" variant="rounded" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          {isDrag && isOver && item.id !== dragItem.id && <Box className={classes.placeholder} />}
        </div>
      </div>
      <Menu
        id="document-row-menu"
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
            onDeleteItem?.(item.id);
          }}
          icon={<DeleteIcon color="secondary" />}
        />
      </Menu>
    </>
  );
};
