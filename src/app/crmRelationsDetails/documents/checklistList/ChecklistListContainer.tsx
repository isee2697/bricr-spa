import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ChecklistType } from '../checklist/Checklist.types';

import { ChecklistList } from './ChecklistList';
import {
  ChecklistListContainerProps,
  ChecklistList as ChecklistListType,
  DocumentType,
  DocumentCondition,
  AddNewChedklistItemBody,
} from './ChecklistList.types';

export const ChecklistListContainer = (props: ChecklistListContainerProps) => {
  const { push } = useHistory();
  const { path } = props;

  const [list, setList] = useState<ChecklistListType>({
    id: '0001',
    title: 'Isenburgstraat 36',
    type: ChecklistType.Interest,
    items: [
      {
        id: '0001',
        type: DocumentType.AnnualStatementLastYear,
        isUploaded: false,
        isAccepted: false,
        condition: DocumentCondition.Mandatory,
      },
      {
        id: '0002',
        type: DocumentType.AnnualStatementLastYear,
        isUploaded: true,
        uploadedAt: DateTime.local(),
        isAccepted: false,
        condition: DocumentCondition.Mandatory,
      },
      {
        id: '0003',
        type: DocumentType.AnnualStatementLastYear,
        isUploaded: true,
        uploadedAt: DateTime.local(),
        isAccepted: true,
        acceptedAt: DateTime.local(),
        condition: DocumentCondition.Optional,
      },
    ],
  });

  const handleAddNewListItem = async (values: AddNewChedklistItemBody) => {
    setList({
      ...list,
      items: [
        ...list.items,
        {
          ...list.items[0],
          id: `${list.items.length}`,
          type: values.type,
        },
      ],
    });

    push(`${path}/${list.id}/${list.items[list.items.length - 1].id}`);

    return undefined;
  };

  return <ChecklistList {...props} list={list} onAddNewChecklistItem={handleAddNewListItem} />;
};
