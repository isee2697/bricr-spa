import React from 'react';
import { DateTime } from 'luxon';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Box, Emoji } from 'ui/atoms';
import { TasksIcon, BuildingIcon, HistoryIcon, StatusIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { ListOptionsMenu } from 'ui/molecules';

import { DocumentTableViewProps } from './DocumentTableView.types';
import { useStyles } from './DocumentTableView.styles';

export const DocumentTableView = ({
  data,
  onClick,
  onPreview,
  onSend,
  onArchive,
  onDelete,
}: DocumentTableViewProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

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
        {data.map((doc, index) => (
          <TableRow key={index} onClick={() => onClick?.(doc.documentKind, doc.id)}>
            <TableCell padding="checkbox">
              <Checkbox checked={false} inputProps={{ 'aria-labelledby': doc.id }} />
            </TableCell>
            <TableCell className={classes.tableCellFileName}>{doc.name}</TableCell>
            <TableCell className={classes.tableCellDate}>
              {DateTime.fromJSDate(new Date(doc.dateCreated))?.toFormat('dd-MM-yyyy') || ''}
            </TableCell>
            <TableCell className={classes.tableCellSize}>{doc.size}</TableCell>
            <TableCell className={classes.tableCellType}>
              <Box className={classes.fileType}>
                <Emoji children={`⏱️ ${doc.type}`} />
              </Box>
            </TableCell>
            <TableCell>
              <div>
                {' '}
                <ListOptionsMenu id={doc.id} onDeleteClick={() => onDelete?.()} hideEditButton>
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'pim_details.documents.menu.preview',
                    })}
                    onClick={() => {
                      onPreview?.();
                    }}
                  />
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'pim_details.documents.menu.send',
                    })}
                    onClick={() => {
                      onSend?.();
                    }}
                  />
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'pim_details.documents.menu.archive',
                    })}
                    onClick={() => {
                      onArchive?.();
                    }}
                  />
                </ListOptionsMenu>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
