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
import { HistoryIcon, MenuIcon, DeleteIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';

import { DocumentTableViewProps } from './DocumentTableView.types';
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
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

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
          <TableCell className={classes.tableHeaderCell}>
            {formatMessage({ id: 'crm.details.documents.document_name' })}
          </TableCell>
          <TableCell className={classes.tableHeaderCell}>
            {formatMessage({ id: 'crm.details.documents.file_type' })}
          </TableCell>
          <TableCell className={classes.tableHeaderCell}>
            {formatMessage({ id: 'crm.details.documents.date' })}
          </TableCell>
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
            <TableCell className={classes.tableCellFileName}>{doc.name}</TableCell>
            <TableCell className={classes.tableCellType}>
              <Box className={classes.fileType}>{doc.type}</Box>
            </TableCell>
            <TableCell className={classes.tableCellDate}>
              <Typography variant="h5">{doc.dateCreated?.toFormat('dd-MM-yyyy') || ''}</Typography>
              <Typography variant="h6">{doc.dateCreated?.toFormat('HH:mm:ss') || ''}</Typography>
            </TableCell>
            <TableCell>
              <div>
                <IconButton
                  className="menu-icon"
                  variant="rounded"
                  size="small"
                  selected={Boolean(menuEl)}
                  onClick={onMenuClick}
                >
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
