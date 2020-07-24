import React from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';

import {
  useNcpPricesPricingQuery,
  useToggleNcpPricingMutation,
  useUpdateNcpPricingMutation,
  NcpPricesPricingDocument,
  NcpPricesPricingQuery,
  useObjectTypePricesPricingQuery,
  useToggleObjectTypePricingMutation,
  useUpdateObjectTypePricingMutation,
  ObjectTypePricesPricingDocument,
  ObjectTypePricesPricingQuery,
  UpdateCommonPricingInput,
} from 'api/types';
import { AutosaveForm } from 'ui/organisms';
import { EntityType, useEntityType } from '../entityType';

import { PriceType } from './PricesGeneral.types';
import { PricesGeneral } from './PricesGeneral';

const getQuery = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.Project:
      return useNcpPricesPricingQuery;
    case EntityType.ObjectType:
      return useObjectTypePricesPricingQuery;
    default:
      throw new Error('There is no such EntityType');
  }
};

export const PricesGeneralContainer = () => {
  const { id } = useParams<{ id: string }>();
  const entityType = useEntityType();

  const useQuery = getQuery(entityType);
  const { data } = useQuery({ variables: { id } });

  const [toggleNcpPricing] = useToggleNcpPricingMutation();
  const [updateNcpPricing] = useUpdateNcpPricingMutation();

  const [toggleObjectTypePricing] = useToggleObjectTypePricingMutation();
  const [updateObjectTypePricing] = useUpdateObjectTypePricingMutation();

  const handleSetPrice = async (newTypes: { prices: PriceType[] }) => {
    try {
      if (entityType === EntityType.Project) {
        const { data } = await toggleNcpPricing({
          variables: {
            input: {
              id,
              isSale: newTypes.prices.includes('Sale'),
              isRent: newTypes.prices.includes('Rent'),
            },
          },
          refetchQueries: [{ query: NcpPricesPricingDocument, variables: { id } }],
        });

        if (!data?.toggleNcpPricing.id) {
          throw new Error();
        }
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await toggleObjectTypePricing({
          variables: {
            input: {
              id,
              isSale: newTypes.prices.includes('Sale'),
              isRent: newTypes.prices.includes('Rent'),
            },
          },
          refetchQueries: [{ query: ObjectTypePricesPricingDocument, variables: { id } }],
        });

        if (!data?.toggleObjectTypePricing.id) {
          throw new Error();
        }
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  const handleSave = async (values: UpdateCommonPricingInput) => {
    try {
      if (entityType === EntityType.Project) {
        const { data } = await updateNcpPricing({
          variables: {
            input: {
              id,
              description: values.description,
              sale: {
                minPrice: values.sale?.minPrice,
                maxPrice: values.sale?.maxPrice,
                calculateAutomatically: values.sale?.calculateAutomatically,
              },
              rent: {
                minPrice: values.rent?.minPrice,
                maxPrice: values.rent?.maxPrice,
                calculateAutomatically: values.rent?.calculateAutomatically,
              },
            },
          },
          refetchQueries: [{ query: NcpPricesPricingDocument, variables: { id } }],
        });

        if (!data?.updateNcpPricing.id) {
          throw new Error();
        }
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await updateObjectTypePricing({
          variables: {
            input: {
              id,
              description: values.description,
              sale: {
                minPrice: values.sale?.minPrice,
                maxPrice: values.sale?.maxPrice,
                calculateAutomatically: values.sale?.calculateAutomatically,
              },
              rent: {
                minPrice: values.rent?.minPrice,
                maxPrice: values.rent?.maxPrice,
                calculateAutomatically: values.rent?.calculateAutomatically,
              },
            },
          },
          refetchQueries: [{ query: ObjectTypePricesPricingDocument, variables: { id } }],
        });

        if (!data?.updateObjectTypePricing.id) {
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

  return (
    <AutosaveForm
      initialValues={
        ((data as NcpPricesPricingQuery).getNcpPrices?.pricing ||
          (data as ObjectTypePricesPricingQuery).getObjectTypePrices?.pricing) ??
        {}
      }
      onSave={handleSave}
      mutators={{ ...arrayMutators }}
    >
      <PricesGeneral
        types={
          [
            ((data as NcpPricesPricingQuery).getNcpPrices?.pricing?.sale?.isEnabled ||
              (data as ObjectTypePricesPricingQuery).getObjectTypePrices?.pricing?.sale?.isEnabled) &&
              'Sale',
            ((data as NcpPricesPricingQuery).getNcpPrices?.pricing?.rent?.isEnabled ||
              (data as ObjectTypePricesPricingQuery).getObjectTypePrices?.pricing?.rent?.isEnabled) &&
              'Rent',
          ].filter(Boolean) as PriceType[]
        }
        dateUpdated={
          (data as NcpPricesPricingQuery).getNcpPrices?.pricing?.dateUpdated ||
          (data as ObjectTypePricesPricingQuery).getObjectTypePrices?.pricing?.dateUpdated
        }
        updatedBy={
          (data as NcpPricesPricingQuery).getNcpPrices?.pricing?.lastEditedBy ||
          (data as ObjectTypePricesPricingQuery).getObjectTypePrices?.pricing?.lastEditedBy
        }
        onSetPrice={handleSetPrice}
      />
    </AutosaveForm>
  );
};
