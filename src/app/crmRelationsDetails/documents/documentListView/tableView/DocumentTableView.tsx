import React, { ReactElement, useState } from 'react';
import classnames from 'classnames';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  IconButton,
  Menu,
  Typography,
  MenuItem,
} from 'ui/atoms';
import { HistoryIcon, MenuIcon, DeleteIcon, ArrowUpIcon, ArrowDownIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Document } from '../../Documents.types';

import { DocumentTableHeaderCell, DocumentTableViewProps } from './DocumentTableView.types';
import { useStyles } from './DocumentTableView.styles';

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

type TableCellMenuProps = {
  doc: Document;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
};

const TableCellMenu = ({ doc, onEdit, onDelete }: TableCellMenuProps) => {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <div>
      <IconButton className="menu-icon" variant="rounded" size="small" selected={Boolean(menuEl)} onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu id={doc.id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        <SubMenuItem
          title={formatMessage({
            id: 'crm.details.documents.menu.edit',
          })}
          onClick={() => {
            onEdit?.();
            onMenuClose();
          }}
        />
        <SubMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onDelete?.();
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
        />
      </Menu>
    </div>
  );
};

export const DocumentTableView = ({
  documents,
  onClick,
  onEdit,
  onDelete,
  selected,
  onSelectDoc,
  onSelectAllDoc,
}: DocumentTableViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'ascending' | 'descending' | null>(null);

  const onSort = (column: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';

    if (sortColumn !== column) {
      setSortColumn(column);
    } else if (sortDirection === direction) {
      direction = 'descending';
    }

    setSortDirection(direction);
  };

  const headerCells: DocumentTableHeaderCell[] = [
    {
      field: 'name',
      label: formatMessage({ id: 'crm.details.documents.document_name' }),
      sorter: () => {
        onSort('name');
      },
    },
    {
      field: 'type',
      label: formatMessage({ id: 'crm.details.documents.file_type' }),
      renderer: doc => <Box className={classes.fileType}>{doc.type}</Box>,
      sorter: () => {
        onSort('type');
      },
    },
    {
      field: 'dateCreated',
      label: formatMessage({ id: 'crm.details.documents.date' }),
      renderer: doc => (
        <>
          <Typography variant="h5">{doc.dateCreated?.toFormat('dd-MM-yyyy') || ''}</Typography>
          <Typography variant="h6">{doc.dateCreated?.toFormat('HH:mm:ss') || ''}</Typography>
        </>
      ),
      sorter: () => {
        onSort('dateCreated');
      },
    },
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" className={classes.tableHeaderCell}>
            <Checkbox
              checked={documents.length === selected.length}
              onClick={e => {
                e.stopPropagation();
                onSelectAllDoc();
              }}
            />
          </TableCell>
          {headerCells.map((cell, index) => (
            <TableCell
              key={index}
              className={classnames(classes.tableHeaderCell, sortColumn === cell.field && 'sorting')}
              onClick={() => cell.sorter?.()}
            >
              <Box display="flex" alignItems="center">
                <div>{cell.label}</div>
                <Box ml={0.5} display="flex" alignItems="center">
                  {sortColumn === cell.field ? (
                    sortDirection === 'ascending' ? (
                      <ArrowUpIcon fontSize="small" color="primary" />
                    ) : (
                      <ArrowDownIcon fontSize="small" color="primary" />
                    )
                  ) : null}
                </Box>
              </Box>
            </TableCell>
          ))}
          <TableCell className={classes.tableHeaderCell} />
        </TableRow>
      </TableHead>
      <TableBody>
        {documents.map((doc, index) => (
          <TableRow
            key={index}
            onClick={() => onClick?.(doc.id)}
            className={classnames(classes.tableRow, index % 2 === 0 && 'striped')}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected.includes(doc.id)}
                inputProps={{ 'aria-labelledby': doc.id }}
                onClick={e => {
                  e.stopPropagation();
                  onSelectDoc(doc.id);
                }}
              />
            </TableCell>
            {headerCells.map((cell, index) => (
              <TableCell key={index}>
                {cell.renderer ? cell.renderer(doc) : cell.field ? doc[cell.field] : null}
              </TableCell>
            ))}
            <TableCell>
              <TableCellMenu doc={doc} onEdit={onEdit} onDelete={onDelete} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
