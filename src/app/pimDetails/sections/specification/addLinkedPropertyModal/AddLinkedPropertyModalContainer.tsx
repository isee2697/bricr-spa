import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { LinkedPim, useListPimsQuery, usePimSpecificationQuery, useSetLinkedPropertiesMutation } from 'api/types';
import { usePagination } from 'hooks';
import { usePimsSorting } from '../../../../pim/usePimsSorting/usePimsSorting';

import { AddLinkedPropertyModalContainerProps, PimList } from './AddLinkedPropertyModal.types';
import { AddLinkedPropertyModal } from './AddLinkedPropertyModal';

export const AddLinkedPropertyModalContainer = ({ isOpened, onClose }: AddLinkedPropertyModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimSpecificationQuery({ variables: { id } });
  const [pimList, setPimList] = useState<PimList>([]);
  const [selectedPims, setSelectedPims] = useState();
  const [setLinkedProperties] = useSetLinkedPropertiesMutation();
  const { query: sortQuery } = usePimsSorting();

  const { query: paginationQuery } = usePagination({
    itemsCount: 0,
    perPageOptions: ['All'],
  });

  const { data: linkedProperty } = usePimSpecificationQuery({ variables: { id } });

  const { data: listData } = useListPimsQuery({
    variables: { archived: false, ...sortQuery, ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  const setSelectedPim = (id: string) => {
    const currentPim = selectedPims;

    if (currentPim.filter((item: string) => item === id).length === 1) {
      setSelectedPims(currentPim.filter((item: string) => item !== id));
    } else {
      currentPim.push(id);
      setSelectedPims(currentPim);
    }
  };

  useEffect(() => {
    const selectedPim: string[] = [];
    data?.getPimSpecification.linkedProperties?.forEach((item: LinkedPim) => selectedPim.push(item.id));

    setSelectedPims(selectedPim);
    setPimList(listData?.listPims.items);
  }, [listData, data]);

  const handleSubmit = async () => {
    try {
      const { data: result } = await setLinkedProperties({
        variables: {
          input: {
            pimId: id,
            linkedPimIDs: selectedPims,
          },
        },
      });

      if (!result || !result.setLinkedProperties) {
        throw new Error();
      }

      onClose();

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data) {
    return null;
  }

  return (
    <AddLinkedPropertyModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      pimList={pimList}
      linkedProperty={linkedProperty?.getPimSpecification.linkedProperties}
      onPropertySelect={id => setSelectedPim(id)}
      selectedPims={selectedPims}
    />
  );
};
