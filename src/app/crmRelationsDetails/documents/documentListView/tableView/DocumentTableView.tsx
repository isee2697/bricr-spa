import React, { useState } from 'react';
import classnames from 'classnames';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Box, Typography, DocumentViewer } from 'ui/atoms';
import { ArrowUpIcon, ArrowDownIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { DocumentViewModal, ListOptionsMenu, Modal, PreviewIcon } from 'ui/molecules';

import { DocumentTableHeaderCell, DocumentTableViewProps } from './DocumentTableView.types';
import { useStyles } from './DocumentTableView.styles';

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

  const [passDocuments] = useState(documents.map(document => ({ uri: document.image })));
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'ascending' | 'descending' | null>(null);
  const [isPreviewModalOpen, openPreviewModal] = useState(false);

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
      label: formatMessage({ id: 'crm.details.documents.preview' }),
      renderer: doc => <PreviewIcon onClick={() => openPreviewModal(true)} uri={doc.image} />,
      sorter: () => {
        onSort('type');
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
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" className={classes.tableHeaderCell}>
              <Checkbox
                color="primary"
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
                  color="primary"
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
                <ListOptionsMenu onEditClick={() => {}} onDeleteClick={() => {}} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DocumentViewModal
        documents={passDocuments}
        onClose={() => openPreviewModal(false)}
        isOpened={isPreviewModalOpen}
      />
    </>
  );
};
