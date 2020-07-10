import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PimMediaDocument,
  SectionWithDescriptionType,
  usePimMediaQuery,
  useUpdateDescriptionMutation,
} from 'api/types';
import { PimTypeProvider } from '../pimType';

import { usePicturesSorting } from './pictures/usePicturesSorting/usePicturesSorting';
import { MediaContainerProps } from './Media.types';
import { Media } from './Media';

export const MediaContainer = ({ pimType, ...props }: MediaContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { sorting, query: sortQuery } = usePicturesSorting();

  // TODO: change data based on type while integration
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
      <PimTypeProvider pimType={pimType}>
        <Media
          {...props}
          media={data.getPimMedia}
          onDescriptionUpdate={onDescriptionUpdate}
          description={data.getPimMedia.description ?? ''}
          sorting={sorting}
          sortQuery={sortQuery}
        />
      </PimTypeProvider>
    );

  return null;
};
