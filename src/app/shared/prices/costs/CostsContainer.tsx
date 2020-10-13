import React from 'react';
import { useParams } from 'react-router-dom';
import {
  useNcpPricesCostsQuery,
  useUpdateNcpCostsDetailsMutation,
  useUpdateNcpCostMutation,
  NcpPricesCostsDocument,
  CommonCost,
  useObjectTypePricesCostsQuery,
  useUpdateObjectTypeCostsDetailsMutation,
  useUpdateObjectTypeCostMutation,
  ObjectTypePricesCostsDocument,
  NcpPricesCostsQuery,
  ObjectTypePricesCostsQuery,
} from 'api/types';
import { EntityType, useEntityType } from 'app/shared/entityType';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

import { Costs } from './Costs';

const getQuery = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.Project:
      return useNcpPricesCostsQuery;
    case EntityType.ObjectType:
      return useObjectTypePricesCostsQuery;
    default:
      throw new Error('There is no such EntityType');
  }
};

export const CostsContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const { entityType } = useEntityType();
  const useQuery = getQuery(entityType);
  const { data } = useQuery({ variables: { id } });

  const [updateNcpCostsDetails] = useUpdateNcpCostsDetailsMutation();
  const [updateNcpCost] = useUpdateNcpCostMutation();
  const [updateObjectTypeCostsDetails] = useUpdateObjectTypeCostsDetailsMutation();
  const [updateObjectTypeCost] = useUpdateObjectTypeCostMutation();

  const handleDescriptionSave = async (values: { description: string }) => {
    try {
      if (entityType === EntityType.Project) {
        const { data } = await updateNcpCostsDetails({
          variables: {
            input: { id, description: values.description },
          },
          refetchQueries: [{ query: NcpPricesCostsDocument, variables: { id } }],
        });

        if (!data?.updateNcpCostsDetails.id) {
          throw new Error();
        }
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await updateObjectTypeCostsDetails({
          variables: {
            input: { id, description: values.description },
          },
          refetchQueries: [{ query: ObjectTypePricesCostsDocument, variables: { id } }],
        });

        if (!data?.updateObjectTypeCostsDetails.id) {
          throw new Error();
        }
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  const handleUpdateCost = async (values: CommonCost) => {
    try {
      if (entityType === EntityType.Project) {
        const { data } = await updateNcpCost({
          variables: {
            input: {
              id: values.id,
              serviceCostsFrom: values.serviceCostsFrom,
              serviceCostsTill: values.serviceCostsTill,
              paymentsFrequency: values.paymentsFrequency,
              vatTaxedServiceCostsFrom: values.vatTaxedServiceCostsFrom,
              vatTaxedServiceCostsTill: values.vatTaxedServiceCostsTill,
              vatPercentage: values.vatPercentage,
              notes: values.notes ?? '',
              name: values.name ?? '',
            },
          },
          refetchQueries: [{ query: NcpPricesCostsDocument, variables: { id } }],
        });

        if (!data?.updateNcpCost.id) {
          throw new Error();
        }
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await updateObjectTypeCost({
          variables: {
            input: {
              id: values.id,
              serviceCostsFrom: values.serviceCostsFrom,
              serviceCostsTill: values.serviceCostsTill,
              paymentsFrequency: values.paymentsFrequency,
              vatTaxedServiceCostsFrom: values.vatTaxedServiceCostsFrom,
              vatTaxedServiceCostsTill: values.vatTaxedServiceCostsTill,
              vatPercentage: values.vatPercentage,
              notes: values.notes ?? '',
              name: values.name ?? '',
            },
          },
          refetchQueries: [{ query: ObjectTypePricesCostsDocument, variables: { id } }],
        });

        if (!data?.updateObjectTypeCost.id) {
          throw new Error();
        }
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data) {
    return null;
  }

  if (!data) {
    return null;
  }

  const { costs } =
    entityType === EntityType.Project
      ? (data as NcpPricesCostsQuery).getNcpPrices
      : (data as ObjectTypePricesCostsQuery).getObjectTypePrices;

  return (
    <Costs
      data={costs}
      onDescriptionSave={handleDescriptionSave}
      onUpdateCost={handleUpdateCost}
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
    />
  );
};
