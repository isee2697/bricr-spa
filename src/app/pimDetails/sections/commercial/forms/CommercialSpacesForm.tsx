import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';
import { CommercialSpacesInformationProps } from '../CommercialSpaces.types';
import { AutosaveForm } from 'ui/organisms';
import { useUpdateBogSpaceMutation, PimBogSpacesDocument, BogSpaceType as Type, BogSpace } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { StorageSpaceForm } from './storage/StorageSpaceForm';
import { HorecaSpaceForm } from './horeca/HorecaSpaceForm';
import { OfficeSpaceForm } from './office/OfficeSpaceForm';
import { SocialEstateForm } from './socialRealEstate/SocialRealEstateSpaceForm';
import { BusinessSpaceForm } from './business/BusinessSpaceForm';
import { LeisureSpaceForm } from './leisure/LeisureSpaceForm';
import { TerrainSpaceForm } from './terrain/TerrainSpaceForm';
import { RetailSpaceForm } from './retail/RetailSpaceForm';

export const CommercialSpacesForm = ({ data }: CommercialSpacesInformationProps) => {
  const { commercialSpaceId, id } = useParams<{ id: string; commercialSpaceId: string }>();
  const [updateCommercialSpace] = useUpdateBogSpaceMutation();

  const spacesArray = [...(data.getPimInside.bogSpaces || [])];
  const space = spacesArray.find(space => space.id === commercialSpaceId);

  if (!space) {
    return <Redirect to={`${AppRoute.pimDetails.replace(':id', id)}/commercialspaces`} />;
  }

  const commercialSpaceIndex = spacesArray
    .filter(s => s.type === space.type)
    .findIndex(commercialSpace => commercialSpace.id === commercialSpaceId);

  const handleSave = async (body: BogSpace) => {
    try {
      const { data: response } = await updateCommercialSpace({
        variables: {
          input: {
            pimId: id,
            spaceId: commercialSpaceId,
            spaceName: body.name || '',
            notes: body.notes || null,
            description: body.description || null,
            retailSpaceConfiguration: body.retailSpaceConfiguration,
            leisureSpaceConfiguration: body.leisureSpaceConfiguration,
            horecaSpaceConfiguration: body.horecaSpaceConfiguration,
            businessSpaceConfiguration: body.businessSpaceConfiguration,
            officeSpaceConfiguration: body.officeSpaceConfiguration,
            socialRealEstateSpaceConfiguration: body.socialRealEstateSpaceConfiguration,
            terrainConfiguration: body.terrainConfiguration,
            storageConfiguration: body.storageConfiguration,
          },
        },
        refetchQueries: [
          {
            query: PimBogSpacesDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!response) {
        throw new Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return (
    <AutosaveForm key={space.id} initialValues={space} mutators={{ ...arrayMutators }} onSave={handleSave}>
      {() => {
        switch (space.type) {
          case Type.BusinessSpace:
            return <BusinessSpaceForm commercialSpace={space} index={commercialSpaceIndex} />;
          case Type.RetailSpace:
            return <RetailSpaceForm commercialSpace={space} index={commercialSpaceIndex} />;
          case Type.OfficeSpace:
            return <OfficeSpaceForm commercialSpace={space} index={commercialSpaceIndex} />;
          case Type.Storage:
            return <StorageSpaceForm commercialSpace={space} index={commercialSpaceIndex} />;
          case Type.HorecaSpace:
            return <HorecaSpaceForm commercialSpace={space} index={commercialSpaceIndex} />;
          case Type.SocialRealEstateSpace:
            return <SocialEstateForm commercialSpace={space} index={commercialSpaceIndex} />;
          case Type.Leisure:
            return <LeisureSpaceForm commercialSpace={space} index={commercialSpaceIndex} />;
          case Type.Terrain:
            return <TerrainSpaceForm commercialSpace={space} index={commercialSpaceIndex} />;
        }
      }}
    </AutosaveForm>
  );
};
