import React from 'react';
import { useParams } from 'react-router-dom';

import { useUpdateCadastreMutation, PimCadastreDocument, Cadastre } from 'api/types';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';

import { MapsContainerProps } from './CadastralMaps.types';
import { CadastralMaps } from './CadastralMaps';

export const CadastralMapsContainer = ({ cadastreItem }: MapsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateCadastre] = useUpdateCadastreMutation();
  const { formatMessage } = useLocale();

  if (!cadastreItem) {
    return <></>;
  }

  const handleEdit = async (body: Cadastre) => {
    try {
      const { data } = await updateCadastre({
        variables: {
          input: {
            pimId: id,
            id: cadastreItem.id,
            mapsDescription: body.mapsDescription,
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

  return (
    <>
      <Page
        placeholder="pim_details.cadastre.maps_description_placeholder"
        name="mapsDescription"
        onSave={handleEdit}
        initialValues={cadastreItem}
        title={formatMessage({ id: 'pim_details.cadastre.cadastre_maps' })}
        updatedBy={cadastreItem.lastEditedBy}
        dateUpdated={cadastreItem.dateUpdated}
      >
        <Grid item xs={12}>
          <CadastralMaps cadastreItem={cadastreItem} />
        </Grid>
      </Page>
    </>
  );
};
