import React from 'react';
import { DateTime } from 'luxon';

import { FileTypeView, FileType } from 'ui/templates/cards/cardWithFileList/CardWithFileList.types';
import { PreviewIcon } from 'ui/molecules';
import { Chip, Typography, Box, UserAvatar } from 'ui/atoms';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { LinkIcon, PinIcon } from 'ui/atoms/icons';

import { FileHeaderProps } from './CardWithFileList.types';

export const renderCardListCell = (fieldName: keyof FileType, item?: FileType) => {
  const checkItem = Object.assign(item ?? {});

  switch (fieldName) {
    case 'preview':
      return <PreviewIcon uri={checkItem?.uri} />;
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
