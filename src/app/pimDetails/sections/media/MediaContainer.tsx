import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PimMediaDocument,
  SectionWithDescriptionType,
  usePimMediaQuery,
  useUpdateDescriptionMutation,
} from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { usePicturesSorting } from 'app/pimDetails/sections/media/pictures/usePicturesSorting/usePicturesSorting';

import { Media } from './Media';

export const MediaContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { sorting, query: sortQuery } = usePicturesSorting();
  const { data } = usePimMediaQuery({ variables: { id, picturesSort: sortQuery } });

  const [updateDescription] = useUpdateDescriptionMutation();

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            ...body,
            pimId: id,
            section: SectionWithDescriptionType.Media,
          },
        },
        refetchQueries: [
          {
            query: PimMediaDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (data)
    return (
      <Media
        {...props}
        media={data.getPimMedia}
        onDescriptionUpdate={onDescriptionUpdate}
        description={data.getPimMedia.description ?? ''}
        sorting={sorting}
        sortQuery={sortQuery}
      />
    );

  return null;
};
