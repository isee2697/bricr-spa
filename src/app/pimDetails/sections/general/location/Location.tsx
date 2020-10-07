import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button, Grid } from 'ui/atoms';
import { AutosaveForm, FormSection, AddCustomPropertyModalContainer } from 'ui/organisms';
import { GenericField, CheckboxGroupField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
import { FormSubSectionHeader, TileButton } from 'ui/molecules';
import { LocationGoodToKnowType, LabelProperty } from 'api/types';
import { Page } from 'ui/templates';
import { useCustomLabels, useLocale } from 'hooks';

import { LocationProps } from './Location.types';
import { LocationMap } from './locationMap/LocationMap';
import { GoodToKnowRow } from './goodToKnowRow/GoodToKnowRow';

export const Location = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
  initialValues,
  typeOptions,
  onSave,
  dateUpdated,
  updatedBy,
}: LocationProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();

  const [currentLabels, setCurrentLabels] = useState<LabelProperty | null>(null);
  const customLabels = useCustomLabels(pimId, [LabelProperty.Location, LabelProperty.LocationGoodToKnow]);

  return (
    <AutosaveForm onSave={onSave} initialValues={initialValues} mutators={{ ...arrayMutators }}>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button color="primary" variant="outlined" onClick={() => {}} size="small">
            {formatMessage({ id: 'pim_details.general.location.autocheck' })}
          </Button>
        }
      />
      <Page
        title={formatMessage({ id: 'pim_details.general.location.header' })}
        placeholder="pim_details.general.location.placeholder"
        name="description"
        updatedBy={updatedBy}
        dateUpdated={dateUpdated}
      >
        <Grid item xs={12}>
          <FormSection isExpandable title={formatMessage({ id: 'pim_details.general.location.subheader' })}>
            {editable => (
              <>
                <FormSubSectionHeader noBorder title={formatMessage({ id: 'pim_details.general.location.type' })} />
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <GenericField
                      label="pim_details.general.location.latitude"
                      placeholder="pim_details.general.location.latitude_placeholder"
                      name="latitude"
                      disabled={!editable}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      label="pim_details.general.location.longitude"
                      placeholder="pim_details.general.location.longitude_placeholder"
                      name="longitude"
                      disabled={!editable}
                    />
                  </Grid>
                </Grid>
                <Box mb={1} />
                <LocationMap disabled={!editable} latitudeName="latitude" longitudeName="longitude" />
                <Box mb={3} />

                <FormSubSectionHeader
                  noBorder
                  title={formatMessage({ id: 'pim_details.general.location.type' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                />
                <Box paddingTop={2} mb={2} ml={2}>
                  <CheckboxGroupField
                    xs={2}
                    name="type"
                    actionElement={
                      <Box maxWidth={64}>
                        <TileButton
                          title={formatMessage({ id: 'pim_details.specification.advanced.add_custom' })}
                          onClick={() => setCurrentLabels(LabelProperty.Location)}
                          isDisabled={!editable}
                        />
                      </Box>
                    }
                    options={[...typeOptions, ...(customLabels[LabelProperty.Location] ?? [])] as CheckboxDataType[]}
                    disabled={!editable}
                  />
                </Box>
                <GenericField
                  label="pim_details.general.location.notes"
                  placeholder="pim_details.general.location.notes_placeholder"
                  name="notes"
                />
                <Box mb={3} />
              </>
            )}
          </FormSection>
          <Box mb={3} />
          <FormSection isExpandable title={formatMessage({ id: 'pim_details.general.location.distance_title' })}>
            {editable => (
              <>
                <FormSubSectionHeader
                  noBorder
                  title={formatMessage({ id: 'pim_details.general.location.good_to_know' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                />
                {[
                  ...Object.values(LocationGoodToKnowType).map(type => ({ type, icon: undefined })),
                  ...(customLabels[LabelProperty.LocationGoodToKnow]?.map(({ label, icon }) => ({
                    type: label,
                    icon,
                  })) ?? []),
                ].map(({ type, icon }, index) => (
                  <GoodToKnowRow key={`${type}-${index}`} type={type} disabled={!editable} index={index} icon={icon} />
                ))}
                <Box margin={2} maxWidth={64}>
                  <TileButton
                    title={formatMessage({ id: 'pim_details.specification.advanced.add_custom' })}
                    onClick={() => setCurrentLabels(LabelProperty.LocationGoodToKnow)}
                    isDisabled={!editable}
                  />
                </Box>
              </>
            )}
          </FormSection>
        </Grid>
      </Page>
      {!!currentLabels && (
        <AddCustomPropertyModalContainer
          property={currentLabels}
          isOpened={!!currentLabels}
          onClose={() => setCurrentLabels(null)}
        />
      )}
    </AutosaveForm>
  );
};
