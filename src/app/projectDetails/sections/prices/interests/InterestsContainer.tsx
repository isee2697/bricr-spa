import React from 'react';
import { useParams } from 'react-router-dom';

import {
  useNcpPricesInterestsQuery,
  useUpdateNcpInterestsMutation,
  InterestsInput,
  NcpPricesInterestsDocument,
} from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { Interests } from './Interests';

export const InterestsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useNcpPricesInterestsQuery({ variables: { id } });
  const [updateNcpInterests] = useUpdateNcpInterestsMutation();

  const handleSave = async (values: InterestsInput) => {
    try {
      const { data } = await updateNcpInterests({
        variables: {
          input: { ...values, id },
        },
        refetchQueries: [{ query: NcpPricesInterestsDocument, variables: { id } }],
      });

      if (!data?.updateNcpInterests.id) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data?.getNcpPrices) {
    return null;
  }

  const initialValues = {
    buildingInterest: data.getNcpPrices.interests?.buildingInterest,
    description: data.getNcpPrices.interests?.description,
    groundInterest: data.getNcpPrices.interests?.groundInterest,
    rentedagen: data.getNcpPrices.interests?.rentedagen,
    suspensiveCondition: data.getNcpPrices.interests?.suspensiveCondition,
  };

  return (
    <AutosaveForm initialValues={initialValues} onSave={handleSave}>
      <Interests
        dateUpdated={data.getNcpPrices.interests?.dateUpdated}
        updatedBy={data.getNcpPrices.interests?.lastEditedBy}
      />
    </AutosaveForm>
  );
};
