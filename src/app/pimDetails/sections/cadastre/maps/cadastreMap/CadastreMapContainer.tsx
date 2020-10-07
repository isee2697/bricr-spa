import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';

import { AutosaveForm } from 'ui/organisms';
import { PimCadastreDocument, useUpdateMapMutation, EntityWithFiles } from 'api/types';
import { useGetPrivateFile } from 'hooks';

import { CadastreMapContainerProps } from './CadastralMaps.types';
import { CadastreMap } from './CadastreMap';

export const CadastreMapContainer = ({ cadastreMap, cadastreId, ...props }: CadastreMapContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateMap] = useUpdateMapMutation();

  const { data: mapFile } = useGetPrivateFile(
    (cadastreMap.file && cadastreMap.file.key) || '',
    EntityWithFiles.CadastreMap,
    cadastreMap.id,
  );

  const handleSave = async (body: AnyObject) => {
    try {
      await updateMap({
        variables: {
          input: {
            pimId: id,
            mapId: cadastreMap.id,
            cadastreId: cadastreId,
            map: {
              mapName: body.mapName,
              type: body.type,
              description: body.description,
              name: body.name,
            },
            fileId: body.file.id,
          },
        },
        refetchQueries: [
          {
            query: PimCadastreDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <AutosaveForm onSave={handleSave} initialValues={cadastreMap || {}} mutators={{ ...arrayMutators }}>
      <CadastreMap cadastreMap={cadastreMap} mapFile={mapFile} {...props} />
    </AutosaveForm>
  );
};
