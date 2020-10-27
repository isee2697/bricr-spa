import React from 'react';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Box, Emoji } from 'ui/atoms';
import { TasksIcon, BuildingIcon, HistoryIcon, StatusIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';

import { DmsTableViewProps } from './DmsTableView.types';
import { useStyles } from './DmsTableView.styles';

export const DmsTableView = ({ data }: DmsTableViewProps) => {
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
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((doc, index) => (
          <TableRow key={index}>
            <TableCell padding="checkbox">
              <Checkbox checked={false} inputProps={{ 'aria-labelledby': doc.id }} />
            </TableCell>
            <TableCell className={classes.tableCellFileName}>{doc.name}</TableCell>
            <TableCell className={classes.tableCellDate}>{doc.modifiedAt?.toFormat('dd-MM-yyyy') || ''}</TableCell>
            <TableCell className={classes.tableCellSize}>{doc.size}</TableCell>
            <TableCell className={classes.tableCellType}>
              <Box className={classes.fileType}>
                <Emoji children={`⏱️ ${doc.type}`} />
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
