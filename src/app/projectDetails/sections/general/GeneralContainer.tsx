import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';
import { FormRenderProps } from 'react-final-form';

import { useNcpGeneralQuery, useUpdateNcpMutation, NcpGeneralDocument, NcpGeneral, UpdateNcpInput } from 'api/types';
import { AutosaveForm } from 'ui/organisms';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

import { General } from './General';

export const GeneralContainer = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const formRef = useRef<FormRenderProps<UpdateNcpInput>>();

  const { data } = useNcpGeneralQuery({ variables: { id }, fetchPolicy: 'network-only' });
  const [updateNcpGeneral] = useUpdateNcpMutation();

  const handleSave = async ({ archived, ...values }: NcpGeneral) => {
    try {
      const { data } = await updateNcpGeneral({
        variables: {
          input: {
            ...values,
            objectTypesCount: parseInt(values.objectTypesCount?.toString() ?? '') || null,
            properties: parseInt(values.properties?.toString() ?? '') || null,
            startConstructionAfterPresalePercentage:
              parseInt(values.startConstructionAfterPresalePercentage?.toString() ?? '') || null,
          },
        },
        refetchQueries: [
          {
            query: NcpGeneralDocument,
            variables: { id },
          },
        ],
      });

      if (!data?.updateNcp) {
        throw new Error();
      }

      if (data.updateNcp.automaticallyCalculateQuantity && !!formRef.current) {
        const change = formRef.current.form.change;
        change('objectTypesCount', data.updateNcp.objectTypesCount ?? '');
        change('properties', data.updateNcp.properties ?? '');
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data) {
    return null;
  }

  const initialValues = {
    ...data.getNcp,
    type: undefined,
    dateCreated: undefined,
    dateUpdated: undefined,
    lastEditedBy: undefined,
  };

  return (
    <AutosaveForm initialValues={initialValues} onSave={handleSave} mutators={{ ...arrayMutators }}>
      {form => {
        if (!formRef.current) {
          formRef.current = (form as unknown) as FormRenderProps<UpdateNcpInput>;
        }

        return <General data={data.getNcp} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />;
      }}
    </AutosaveForm>
  );
};
