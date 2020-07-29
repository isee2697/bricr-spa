import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PimPricingDocument,
  useAddCostsMutation,
  LabelProperty,
  CostType,
  useAddNcpCostMutation,
  NcpPricesCostsDocument,
} from 'api/types';
import { useCustomLabels } from 'hooks';
import { useEntityType, EntityType } from 'app/shared/entityType';

import { AddCostModalContainerProps, CostForm } from './AddCostModal.types';
import { AddCostModal } from './AddCostModal';
import * as dictionaries from './dictionaries';

export const AddCostModalContainer = ({ isModalOpened, onModalClose, onAdd }: AddCostModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const entityType = useEntityType();

  const customLabels = useCustomLabels(id, [LabelProperty.Cost], entityType)[LabelProperty.Cost] ?? [];

  const [addCost] = useAddCostsMutation();
  const [addNcpCost] = useAddNcpCostMutation();

  const handleAdd = async (values: CostForm) => {
    if (!id) {
      throw new Error();
    }

    try {
      if (entityType === EntityType.Property) {
        await addCost({
          variables: {
            input: { id, ...values },
          },
          refetchQueries: [
            {
              query: PimPricingDocument,
              variables: { id },
            },
          ],
        });
      }

      if (entityType === EntityType.Project) {
        await addNcpCost({
          variables: {
            input: { id, ...values, type: values.type as CostType },
          },
          refetchQueries: [{ query: NcpPricesCostsDocument, variables: { id } }],
        });
      }

      onAdd();

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return (
    <AddCostModal
      costTypes={[
        ...(entityType === EntityType.Property ? dictionaries.costTypes : dictionaries.ncpCostTypes),
        ...customLabels,
      ]}
      isModalOpened={isModalOpened}
      onModalClose={onModalClose}
      onAddCost={handleAdd}
    />
  );
};
