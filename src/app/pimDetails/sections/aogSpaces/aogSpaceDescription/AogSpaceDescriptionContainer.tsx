import React from 'react';
import { useParams } from 'react-router';
import { AutosaveForm } from 'ui/organisms';
import {
  AogSpaceType,
  PimAogSpacesDocument,
  SectionWithDescriptionType,
  usePimAogSpacesQuery,
  useUpdateDescriptionMutation,
} from 'api/types';

import { AogSpaceDescriptionProps } from './AogSpaceDescription.types';
import { AogSpaceDescription } from './AogSpaceDescription';

export const AogSpaceDescriptionContainer = ({ type }: AogSpaceDescriptionProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimAogSpacesQuery({ variables: { id } });
  const [updateDescription] = useUpdateDescriptionMutation();

  if (!data) {
    return null;
  }

  let section: SectionWithDescriptionType;
  let description: string | undefined | null;

  switch (type) {
    case AogSpaceType.Animals:
      section = SectionWithDescriptionType.AogAnimals;
      description = data?.getPimInside?.aogAnimalsDescription;
      break;
    case AogSpaceType.Ground:
      section = SectionWithDescriptionType.AogGrounds;
      description = data?.getPimInside?.aogGroundsDescription;
      break;
    case AogSpaceType.Buildings:
      section = SectionWithDescriptionType.AogBuildings;
      description = data?.getPimInside?.aogBuildingsDescription;
      break;
    case AogSpaceType.Installations:
      section = SectionWithDescriptionType.AogInstallations;
      description = data?.getPimInside?.aogInstallationsDescription;
      break;
  }

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            description: body.description,
            pimId: id,
            section,
          },
        },
        refetchQueries: [
          {
            query: PimAogSpacesDocument,
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

  return (
    <AutosaveForm key={type} initialValues={{ description }} onSave={onDescriptionUpdate}>
      <AogSpaceDescription type={type} />
    </AutosaveForm>
  );
};
