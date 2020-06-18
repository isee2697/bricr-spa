import React from 'react';
import { useParams } from 'react-router-dom';

import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { useUpdateCadastreMutation, PimCadastreDocument, Cadastre } from 'api/types';

import { MapsContainerProps } from './CadastralMaps.types';
import { useStyles } from './CadsatralMaps.styles';
import { CadastralMaps } from './CadastralMaps';

export const CadastralMapsContainer = ({ cadastreItem }: MapsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateCadastre] = useUpdateCadastreMutation();
  const classes = useStyles();

  const handleEdit = async (body: Cadastre) => {
    try {
      if (!cadastreItem) {
        throw new Error('No Cadastre item');
      }

      const { data } = await updateCadastre({
        variables: {
          input: {
            pimId: id,
            id: cadastreItem.id,
            description: body.description,
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

      if (!data) {
        throw new Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (!cadastreItem) {
    return <></>;
  }

  return (
    <>
      <AutosaveForm onSave={handleEdit} initialValues={cadastreItem}>
        <GenericField
          className={classes.description}
          placeholder="pim_details.cadastre.description_placeholder"
          name="description"
          id="cadastreMap.description"
        />
      </AutosaveForm>
      <CadastralMaps cadastreItem={cadastreItem} />
    </>
  );
};
