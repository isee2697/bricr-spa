import React from 'react';

import { useListPimsQuery } from 'api/types';
import { useModalDispatch } from 'hooks';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { LinkedPropertyModal } from 'app/shared/linkedProperties/linkedPropertyModal/LinkedPropertyModal';
import {
  LinkedPropertyForm,
  PimListItem,
} from 'app/shared/linkedProperties/linkedPropertyModal/LinkedPropertyModal.types';

import { SelectPimModalProps } from './AppointmentTypeCard.types';

export const LinkPropertyModalContainer = ({
  isOpened,
  onClose,
  selected,
  refetchQueryVariables,
}: SelectPimModalProps) => {
  const { open } = useModalDispatch();

  const { data: listData } = useListPimsQuery({
    variables: { ...refetchQueryVariables, archived: false },
    fetchPolicy: 'no-cache',
  });

  const pimList = listData?.listPims.items?.filter(pim => !selected.find(item => item.id === pim.id)) as PimListItem[];

  const handleSubmit = async (values: LinkedPropertyForm) => {
    const items = values.linkedProperties?.map(pimId => pimList.find(pim => pim.id === pimId)) as PimListItem[];
    onClose(items ?? []);

    return undefined;
  };

  const onPimAdd = () => {
    open('add-new-pim', {
      propertyCategory: PropertyCategory.PROPERTY,
      disableChange: true,
      isLinkedProperty: true,
    });
  };

  return (
    <LinkedPropertyModal
      isOpened={isOpened}
      onClose={() => onClose([])}
      onSubmit={handleSubmit}
      pimList={pimList ?? []}
      onAdd={onPimAdd}
    />
  );
};
