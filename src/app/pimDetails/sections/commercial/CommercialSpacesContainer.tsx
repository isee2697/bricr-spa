import React from 'react';
import { useParams } from 'react-router-dom';

import {
  usePimBogSpacesQuery,
  PimBogSpacesDocument,
  useUpdateDescriptionMutation,
  SectionWithDescriptionType,
} from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { CommercialSpaces } from './CommercialSpaces';

export const CommercialSpacesContainer = (props: PimDetailsSectionProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const [updateDescription] = useUpdateDescriptionMutation();
  const { data } = usePimBogSpacesQuery({ variables: { id: pimId } });

  const handleSave = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            ...body,
            pimId,
            section: SectionWithDescriptionType.BogSpaces,
          },
        },
        refetchQueries: [
          {
            query: PimBogSpacesDocument,
            variables: {
              pimId,
            },
          },
        ],
      });

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (data) return <CommercialSpaces {...props} onSave={handleSave} data={data} />;

  return null;
};

export default CommercialSpacesContainer;
