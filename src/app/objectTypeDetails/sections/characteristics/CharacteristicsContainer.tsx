import React, { useRef } from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { FormRenderProps } from 'react-final-form';
import { AutosaveForm } from 'ui/organisms';
import {
  CharacteristicsSections,
  NcpCharacteristicsInput,
  ObjectTypeCharacteristicsDocument,
  ObjectTypeCharacteristicsInput,
  useObjectTypeCharacteristicsQuery,
  useUpdateObjectTypeCharacteristicsMutation,
} from 'api/types';
import { Characteristics } from 'app/shared/characteristics/Characteristics';
import { sectionsOrder } from 'app/shared/characteristics/Characteristics.types';
import { EntityType } from 'app/shared/entityType';
import { ObjectTypeDetailsCommonProps } from 'app/objectTypeDetails/ObjectTypeDetails.types';

export const CharacteristicsContainer = ({ isSidebarVisible, onSidebarOpen }: ObjectTypeDetailsCommonProps) => {
  const { id } = useParams<{ id: string }>();
  const formRef = useRef<FormRenderProps<NcpCharacteristicsInput>>();

  const { data } = useObjectTypeCharacteristicsQuery({ variables: { id } });
  const [updateCharacteristics] = useUpdateObjectTypeCharacteristicsMutation();

  const handleSave = async (values: ObjectTypeCharacteristicsInput) => {
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
            query: ObjectTypeCharacteristicsDocument,
            variables: { id },
          },
        ],
      });

      if (!data?.updateObjectTypeCharacteristics) {
        throw new Error();
      }

      if (data.updateObjectTypeCharacteristics.measurements?.calculateAutomatically && !!formRef.current) {
        const change = formRef.current.form.change;
        change('measurements.volumeFrom', data.updateObjectTypeCharacteristics.measurements.volumeFrom ?? '');
        change('measurements.volumeTo', data.updateObjectTypeCharacteristics.measurements.volumeTo ?? '');
        change('measurements.livingSpaceFrom', data.updateObjectTypeCharacteristics.measurements.livingSpaceFrom ?? '');
        change('measurements.livingSpaceTo', data.updateObjectTypeCharacteristics.measurements.livingSpaceTo ?? '');
        change('measurements.plotAreaFrom', data.updateObjectTypeCharacteristics.measurements.plotAreaFrom ?? '');
        change('measurements.plotAreaTo', data.updateObjectTypeCharacteristics.measurements.plotAreaTo ?? '');
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data?.getObjectTypeCharacteristics) {
    return null;
  }

  const initialValues = {
    attentionNote: data?.getObjectTypeCharacteristics.attentionNote,
    characteristicsDescription: data?.getObjectTypeCharacteristics.characteristicsDescription,
    measurements: data?.getObjectTypeCharacteristics.measurements,
    projectMarketing: data?.getObjectTypeCharacteristics.projectMarketing,
    energy: data?.getObjectTypeCharacteristics.energy,
  };

  return (
    <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }} initialValues={initialValues}>
      {form => {
        if (!formRef.current) {
          formRef.current = (form as unknown) as FormRenderProps<NcpCharacteristicsInput>;
        }

        return (
          <Characteristics
            onSidebarOpen={onSidebarOpen}
            isSidebarVisible={isSidebarVisible}
            characteristicsSections={sectionsOrder.filter(section =>
              (data?.getObjectTypeCharacteristics.characteristicsSections ?? []).includes(section),
            )}
            updatedBy={data?.getObjectTypeCharacteristics.lastEditedBy}
            dateUpdated={data?.getObjectTypeCharacteristics.dateUpdated}
            identificationNumbers={data?.getObjectTypeCharacteristics.identificationNumbers ?? []}
            availableSections={[
              CharacteristicsSections.ProjectMarketing,
              CharacteristicsSections.Measurements,
              CharacteristicsSections.Energy,
              CharacteristicsSections.AccountManagers,
              CharacteristicsSections.IdentificationNumber,
              CharacteristicsSections.AttentionField,
              CharacteristicsSections.ObjectTypes,
            ]}
            entityType={EntityType.ObjectType}
          />
        );
      }}
    </AutosaveForm>
  );
};
