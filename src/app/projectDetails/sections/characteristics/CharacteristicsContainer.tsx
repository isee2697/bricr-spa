import React, { useRef } from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { FormRenderProps } from 'react-final-form';

import { AutosaveForm } from 'ui/organisms';
import {
  NcpCharacteristicsDocument,
  NcpCharacteristicsInput,
  useProjectPhasesQuery,
  useUpdateNcpCharacteristicsMutation,
} from 'api/types';
import { useNcpCharacteristicsQuery } from 'api/types';

import { sectionsOrder } from './Characteristics.types';
import { Characteristics } from './Characteristics';

export const CharacteristicsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const formRef = useRef<FormRenderProps<NcpCharacteristicsInput>>();

  const { data: phaseData } = useProjectPhasesQuery({
    variables: { name: undefined, ncpId: id, from: 0, limit: 1 },
    fetchPolicy: 'no-cache',
  });

  const { data } = useNcpCharacteristicsQuery({ variables: { id } });
  const [updateCharacteristics] = useUpdateNcpCharacteristicsMutation();

  const handleSave = async (values: NcpCharacteristicsInput) => {
    try {
      const { data } = await updateCharacteristics({
        variables: {
          input: {
            id,
            ...values,
            measurements: {
              ...values.measurements,
              volumeFrom: parseFloat(values?.measurements?.volumeFrom?.toString() ?? '') || null,
              volumeTo: parseFloat(values?.measurements?.volumeTo?.toString() ?? '') || null,
              livingSpaceFrom: parseFloat(values?.measurements?.livingSpaceFrom?.toString() ?? '') || null,
              livingSpaceTo: parseFloat(values?.measurements?.livingSpaceTo?.toString() ?? '') || null,
              plotAreaFrom: parseFloat(values?.measurements?.plotAreaFrom?.toString() ?? '') || null,
              plotAreaTo: parseFloat(values?.measurements?.plotAreaTo?.toString() ?? '') || null,
            },
            projectMarketing: {
              mainLogoId: values.projectMarketing?.mainLogoId,
              emailAddress: values.projectMarketing?.emailAddress,
              website: values.projectMarketing?.website,
              firstColor: values.projectMarketing?.firstColor,
              secondColor: values.projectMarketing?.secondColor,
            },
          },
        },
        refetchQueries: [
          {
            query: NcpCharacteristicsDocument,
            variables: { id },
          },
        ],
      });

      if (!data?.updateNcpCharacteristics) {
        throw new Error();
      }

      if (data.updateNcpCharacteristics.measurements?.calculateAutomatically && !!formRef.current) {
        const change = formRef.current.form.change;
        change('measurements.volumeFrom', data.updateNcpCharacteristics.measurements.volumeFrom ?? '');
        change('measurements.volumeTo', data.updateNcpCharacteristics.measurements.volumeTo ?? '');
        change('measurements.livingSpaceFrom', data.updateNcpCharacteristics.measurements.livingSpaceFrom ?? '');
        change('measurements.livingSpaceTo', data.updateNcpCharacteristics.measurements.livingSpaceTo ?? '');
        change('measurements.plotAreaFrom', data.updateNcpCharacteristics.measurements.plotAreaFrom ?? '');
        change('measurements.plotAreaTo', data.updateNcpCharacteristics.measurements.plotAreaTo ?? '');
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data?.getNcpCharacteristics) {
    return null;
  }

  const initialValues = {
    attentionNote: data?.getNcpCharacteristics.attentionNote,
    characteristicsDescription: data?.getNcpCharacteristics.characteristicsDescription,
    invoiceDetails: data?.getNcpCharacteristics.invoiceDetails,
    measurements: data?.getNcpCharacteristics.measurements,
    projectMarketing: data?.getNcpCharacteristics.projectMarketing,
    energy: data?.getNcpCharacteristics.energy,
  };

  return (
    <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }} initialValues={initialValues}>
      {form => {
        if (!formRef.current) {
          formRef.current = (form as unknown) as FormRenderProps<NcpCharacteristicsInput>;
        }

        return (
          <Characteristics
            characteristicsSections={sectionsOrder.filter(section =>
              (data?.getNcpCharacteristics.characteristicsSections ?? []).includes(section),
            )}
            updatedBy={data?.getNcpCharacteristics.lastEditedBy}
            dateUpdated={data?.getNcpCharacteristics.dateUpdated}
            identificationNumbers={data?.getNcpCharacteristics.identificationNumbers ?? []}
            projectPhase={phaseData?.getProjectPhases.items?.[0]}
          />
        );
      }}
    </AutosaveForm>
  );
};
