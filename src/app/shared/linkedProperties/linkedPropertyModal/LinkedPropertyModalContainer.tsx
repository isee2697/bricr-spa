import React from 'react';
import { useParams } from 'react-router-dom';
import {
  NcpGeneralOverallInfoDocument,
  ObjectTypeLinkedPimsDocument,
  ObjectTypeOverallInfoDocument,
  useLinkedPimsListQuery,
  useSetObjectTypeLinkedPimsMutation,
} from 'api/types';
import { useModalDispatch, usePagination } from 'hooks';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';

import { LinkedPropertyForm, LinkedPropertyModalContainerProps } from './LinkedPropertyModal.types';
import { LinkedPropertyModal } from './LinkedPropertyModal';

export const LinkedPropertyModalContainer = ({
  isOpened,
  onClose,
  refetchQueryVariables,
}: LinkedPropertyModalContainerProps) => {
  const { id, projectId } = useParams<{ id: string; projectId: string }>();
  const [setLinked] = useSetObjectTypeLinkedPimsMutation();
  const { open } = useModalDispatch();

  const { query: paginationQuery } = usePagination({
    itemsCount: 0,
    perPageOptions: ['All'],
  });

  const { data: listData } = useLinkedPimsListQuery({
    variables: { ...paginationQuery, id },
    fetchPolicy: 'no-cache',
  });

  const handleSubmit = async (values: LinkedPropertyForm) => {
    try {
      if (values.linkedProperties) {
        const { data: setResult } = await setLinked({
          variables: {
            input: {
              id,
              linkedProperties: [
                ...(listData?.linkedObjectIds.linkedPropertiesIds ?? ([] as string[])),
                ...values.linkedProperties,
              ],
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeOverallInfoDocument,
              variables: {
                id,
                projectId: projectId,
              },
            },
            {
              query: NcpGeneralOverallInfoDocument,
              variables: { id: projectId },
            },
            {
              query: ObjectTypeLinkedPimsDocument,
              variables: {
                id,
                ...refetchQueryVariables,
              },
            },
          ],
        });

        if (!setResult || !setResult.setObjectTypeLinkedPims) {
          throw new Error();
        }
      }

      onClose();

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  const onPimAdd = () => {
    open('add-new-pim', {
      propertyCategory: PropertyCategory.PROPERTY,
      projectId,
      objectTypeId: id,
      linkedPropertiesIds: listData?.linkedObjectIds.linkedPropertiesIds ?? [],
      disableChange: true,
      isLinkedProperty: true,
    });
  };

  return (
    <>
      <LinkedPropertyModal
        isOpened={isOpened}
        onClose={onClose}
        onSubmit={handleSubmit}
        pimList={listData?.pims.items ?? []}
        onAdd={onPimAdd}
      />
    </>
  );
};
