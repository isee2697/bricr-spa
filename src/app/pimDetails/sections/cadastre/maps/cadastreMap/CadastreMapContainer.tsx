import React from 'react';
import arrayMutators from 'final-form-arrays';
// import { useParams } from 'react-router-dom';

import { AutosaveForm } from 'ui/organisms';
// import { PimDetailsDocument, CadastreMapType, CadastreMap as CadastreModel } from 'api/types';

import { CadastreMapContainerProps } from './CadastralMaps.types';
import { CadastreMap } from './CadastreMap';

export const CadastreMapContainer = ({ cadastreMap, cadastreId, ...props }: CadastreMapContainerProps) => {
  // const { id } = useParams<{ id: string }>();
  // const [updateMap] = useUpdateMapMutation();

  // const handleSave = async (body: CadastreModel) => {
  // try {
  //   await updateMap({
  //     variables: {
  //       input: {
  //         mapId: cadastreMap.id,
  //         cadastreId: cadastreId,
  //         mapName: body.mapName,
  //         fileName: body.fileName,
  //         description: body.description,
  //         type: body.type as CadastreMapType,
  //       },
  //     },
  //     refetchQueries: [
  //       {
  //         query: PimDetailsDocument,
  //         variables: {
  //           id,
  //         },
  //       },
  //     ],
  //   });

  //   return undefined;
  // } catch (error) {
  //   return { error: true };
  // }
  // };

  return (
    <AutosaveForm
      onSave={() => Promise.resolve({ error: false })}
      initialValues={cadastreMap || {}}
      mutators={{ ...arrayMutators }}
    >
      <CadastreMap cadastreMap={cadastreMap} {...props} />
    </AutosaveForm>
  );
};
