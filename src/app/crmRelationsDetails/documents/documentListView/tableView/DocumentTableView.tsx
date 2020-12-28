import React, { ReactElement, useState } from 'react';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  Emoji,
  IconButton,
  Menu,
  Typography,
  MenuItem,
} from 'ui/atoms';
import { TasksIcon, BuildingIcon, HistoryIcon, StatusIcon, MenuIcon, DeleteIcon } from 'ui/atoms/icons';
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
  onPreview,
  onSend,
  onArchive,
  onDelete,
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
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell>
            <Box className={classes.tableHeaderCell}>
              <TasksIcon className={classes.tableHeaderIcon} /> {formatMessage({ id: 'dms.list.headers.file_name' })}
            </Box>
          </TableCell>
          <TableCell>
            <Box className={classes.tableHeaderCell}>
              <BuildingIcon className={classes.tableHeaderIcon} />{' '}
              {formatMessage({ id: 'dms.list.headers.date_modified' })}
            </Box>
          </TableCell>
          <TableCell>
            <Box className={classes.tableHeaderCell}>
              <HistoryIcon className={classes.tableHeaderIcon} /> {formatMessage({ id: 'dms.list.headers.size' })}
            </Box>
          </TableCell>
          <TableCell>
            <Box className={classes.tableHeaderCell}>
              <StatusIcon className={classes.tableHeaderIcon} /> {formatMessage({ id: 'dms.list.headers.type' })}
            </Box>
          </TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {documents.map((doc, index) => (
          <TableRow key={index} onClick={() => onClick?.(doc.id)} className={classes.tableRow}>
            <TableCell padding="checkbox">
              <Checkbox checked={false} inputProps={{ 'aria-labelledby': doc.id }} />
            </TableCell>
            <TableCell className={classes.tableCellFileName}>{doc.name}</TableCell>
            <TableCell className={classes.tableCellDate}>{doc.dateCreated?.toFormat('dd-MM-yyyy') || ''}</TableCell>
            <TableCell className={classes.tableCellSize}>{doc.size}</TableCell>
            <TableCell className={classes.tableCellType}>
              <Box className={classes.fileType}>
                <Emoji children={`⏱️ ${doc.type}`} />
              </Box>
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
                      id: 'crm.details.documents.menu.preview',
                    })}
                    onClick={() => {
                      onPreview?.();
                      onMenuClose();
                    }}
                  />
                  <SubMenuItem
                    title={formatMessage({
                      id: 'crm.details.documents.menu.send',
                    })}
                    onClick={() => {
                      onSend?.();
                      onMenuClose();
                    }}
                  />
                  <SubMenuItem
                    title={formatMessage({
                      id: 'crm.details.documents.menu.archive',
                    })}
                    onClick={() => {
                      onArchive?.();
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
