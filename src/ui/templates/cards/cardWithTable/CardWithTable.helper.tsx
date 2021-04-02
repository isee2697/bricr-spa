import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { AnyObject } from 'final-form';

import { ListTableItem, PreviewIcon } from 'ui/molecules';
import { Chip, Typography, Box, UserAvatar } from 'ui/atoms';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { LinkIcon, PinIcon, SettingsIcon } from 'ui/atoms/icons';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { InvoiceItem } from 'app/shared/dms/cardItems/invoiceItem/InvoiceItem';
import { InvoiceItemStatus, InvoiceItemType } from 'app/shared/dms/cardItems/invoiceItem/InvoiceItem.types';

import { EmailFilters, FileFilters } from './Dictionary';
import { FileTypeView, FileType } from './CardWithTable.types';
import { FileHeaderProps } from './CardWithTable.types';
import { CardWithTableActions } from './actions/CardWithTableActions';

const filesPreviewClassName = 'files-previewer';

export const renderListIndexHeaderCell = (
  view: FileTypeView,
  headerCells: ListTableCell<FileType>[],
  onSettings: (open: boolean) => void,
) => {
  if (view === FileTypeView.Email || view === FileTypeView.File) {
    return (
      <Box display="flex" flexGrow={1} mr={2}>
        <Box flexGrow={1}>
          <ListTableItem headerCells={headerCells} isHeader />
        </Box>
        <Box ml={0.5} mr={0.5}>
          <SettingsIcon onClick={() => onSettings(true)} />
        </Box>
      </Box>
    );
  } else {
    return undefined;
  }
};

export const showHeaderCell = (view: FileTypeView) => {
  return view === FileTypeView.Email || view === FileTypeView.File;
};

type ActionFunction<F> = (file: F) => void;

export const renderItem = (
  view: FileTypeView,
  item: FileType,
  isSelected: boolean,
  checkbox: ReactNode,
  headerCells: ListTableCell<FileType>[],
  actions: AnyObject,
) => {
  if (view === FileTypeView.Invoices) {
    return <InvoiceItem item={(item as unknown) as InvoiceItemType} />;
  } else {
    return (
      <Box className="card-file-list">
        <Box>{checkbox}</Box>
        <Box flexGrow={1}>
          <ListTableItem<FileType>
            key={item.id}
            renderCell={renderCardListCell}
            headerCells={headerCells}
            item={item}
          />
        </Box>
        <CardWithTableActions item={item} actions={actions} />
      </Box>
    );
  }
};

export const renderCardListCell = (fieldName: keyof FileType, item?: FileType) => {
  const checkItem = Object.assign(item ?? {});

  switch (fieldName) {
    case 'preview':
      return <PreviewIcon className={filesPreviewClassName} uri={checkItem?.uri} />;
    case 'type':
      return <Chip size="small" variant="outlined" label={checkItem?.type} />;
    case 'from':
    case 'to':
      const field = (fieldName === 'from' ? checkItem?.from : checkItem?.to)?.[0];

      return (
        <Box display="flex" alignItems="center">
          <UserAvatar avatar={checkItem?.image} name={`${field?.name}`} />
          <Box mr={0.5} />
          <Typography variant="h5">{field?.name}</Typography>
        </Box>
      );
    case 'body':
      return checkItem?.body ? checkItem.body.substring(0, 24) : '';
    case 'dateCreated':
    case 'date':
      const date = !!checkItem?.date ? DateTime.fromISO(checkItem.date) : checkItem?.dateCreated;

      return (
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h5">{date?.toFormat('dd-MM-yyyy') || ''}</Typography>
          <Typography variant="h6">{date?.toFormat('HH:mm:ss') || ''}</Typography>
        </Box>
      );

    case 'pinned':
      return <PinIcon color={checkItem?.pinned ? 'error' : 'action'} />;
    case 'links':
      return (
        <Box display="flex" alignItems="center">
          <LinkIcon />
          <Typography variant="caption">{checkItem?.links && checkItem.links > 0 ? checkItem.links : '-'}</Typography>
        </Box>
      );
    default:
      return checkItem?.[fieldName] as string;
  }
};

export const fileHeaderCells = ({ view }: FileHeaderProps): ListTableCell<FileType>[] => {
  let options: ListTableCell<FileType>[] = [];

  if (view === FileTypeView.File) {
    options = [
      {
        field: 'name',
        label: 'crm.details.documents.document_name',
        sortable: true,
      },
      {
        field: 'preview',
        label: 'crm.details.documents.preview',
        sortable: true,
      },
      {
        field: 'type',
        label: 'crm.details.documents.file_type',
        sortable: true,
      },
      {
        field: 'dateCreated',
        label: 'crm.details.documents.date',
        sortable: true,
      },
      {
        field: 'size',
        label: 'file.size.label',
        defaultHidden: true,
      },
      {
        field: 'uri',
        label: 'file.uri.label',
        defaultHidden: true,
      },
    ];
  } else {
    options = [
      {
        field: 'from',
        label: 'email.table.from',
        sortable: true,
      },
      {
        field: 'to',
        label: 'email.table.to',
        sortable: true,
        defaultHidden: true,
      },

      {
        field: 'pinned',
        label: <PinIcon />,
      },
      {
        field: 'subject',
        label: 'email.table.subject',
      },
      {
        field: 'links',
        label: <LinkIcon />,
      },
      {
        field: 'date',
        label: 'email.table.date',
      },
      {
        field: 'body',
        label: 'email.table.body',
        defaultHidden: true,
      },
    ];
  }

  return options;
};

const getFiltersForView = (view: FileTypeView) => (view === FileTypeView.File ? FileFilters : EmailFilters);
const mapCellsToColumns = (cells: ListTableCell<FileType>[]): HeaderColumnItemType<FileType>[] =>
  cells.map(cell => ({ value: cell.field, hidden: !!cell.defaultHidden }));

export const useCardWithTableState = (view: FileTypeView) => {
  const [baseHeaderCells, setHeaderCells] = useState(fileHeaderCells({ view }));
  const [filters, setFilters] = useState(getFiltersForView(view));
  const [activeFilters, setActiveFilters] = useState({});
  const [isColumnModalOpen, setColumnModalOpen] = useState(false);
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [invoiceTab, setInvoiceTab] = useState<InvoiceItemStatus>(InvoiceItemStatus.ActionRequired);

  const [activeColumns, setActiveColumns] = useState(mapCellsToColumns(baseHeaderCells));

  const listener = useCallback(() => setPreviewModalOpen(true), [setPreviewModalOpen]);

  const headerCells = activeColumns
    .map(column => baseHeaderCells.find(cell => column.value === cell.field && !column.hidden))
    .filter(field => !!field) as ListTableCell<FileType>[];

  useEffect(() => {
    const cells = fileHeaderCells({ view });
    setHeaderCells(cells);
    setActiveColumns(mapCellsToColumns(cells));
    setActiveFilters({});
    setFilters(getFiltersForView(view));
  }, [view]);

  useEffect(() => {
    document.querySelector(`.${filesPreviewClassName}`)?.addEventListener('click', listener);

    return () => {
      document.querySelector(`.${filesPreviewClassName}`)?.removeEventListener('click', listener);
    };
  }, [baseHeaderCells, listener]);

  return {
    headerCells,
    activeFilters,
    setActiveFilters,
    activeColumns,
    setActiveColumns,
    filters,
    isColumnModalOpen,
    setColumnModalOpen,
    setPreviewModalOpen,
    isPreviewModalOpen,
    setUploadModalOpen,
    isUploadModalOpen,
    invoiceTab,
    setInvoiceTab,
  };
};
