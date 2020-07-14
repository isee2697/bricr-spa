import React, { useRef } from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { FormRenderProps } from 'react-final-form';

import { AutosaveForm } from 'ui/organisms';
import { NcpCharacteristicsDocument, NcpCharacteristicsInput, useUpdateNcpCharacteristicsMutation } from 'api/types';
import { useNcpCharacteristicsQuery } from 'api/types';

import { FormValues, sectionsOrder } from './Characteristics.types';
import { Characteristics } from './Characteristics';

export const CharacteristicsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const formRef = useRef<FormRenderProps<NcpCharacteristicsInput>>();

  const { data } = useNcpCharacteristicsQuery({ variables: { id } });
  const [updateCharacteristics] = useUpdateNcpCharacteristicsMutation();

  const handleSave = async ({ phase, ...values }: FormValues) => {
    try {
      const { data } = await updateCharacteristics({
        variables: {
          input: {
            id,
            ...values,
            measurements: {
              ...values.measurements,
              volumeFrom: parseInt(values?.measurements?.volumeFrom?.toString() ?? '') || null,
              volumeTo: parseInt(values?.measurements?.volumeTo?.toString() ?? '') || null,
              livingSpaceFrom: parseInt(values?.measurements?.livingSpaceFrom?.toString() ?? '') || null,
              livingSpaceTo: parseInt(values?.measurements?.livingSpaceTo?.toString() ?? '') || null,
              plotAreaFrom: parseInt(values?.measurements?.plotAreaFrom?.toString() ?? '') || null,
              plotAreaTo: parseInt(values?.measurements?.plotAreaTo?.toString() ?? '') || null,
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
          />
        );
      }}
    </AutosaveForm>
  );
};
