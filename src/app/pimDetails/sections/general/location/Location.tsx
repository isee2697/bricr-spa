import React from 'react';
import { useIntl } from 'react-intl';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button, Grid } from 'ui/atoms';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { FormSubSectionHeader } from 'ui/molecules';
import { GoodToKnowRow } from 'app/pimDetails/sections/general/location/goodToKnowRow/GoodToKnowRow';
import { LocationGoodToKnowType } from 'api/types';
import { Page } from 'ui/templates';

import { LocationProps } from './Location.types';
import { LocationMap } from './locationMap/LocationMap';

export const Location = ({
  title,
  isSidebarVisible,
  onOpenSidebar,
  initialValues,
  typeOptions,
  onSave,
}: LocationProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button color="primary" variant="outlined" onClick={() => {}} size="small">
            {formatMessage({ id: 'pim_details.general.location.autocheck' })}
          </Button>
        }
      />
      <Page
        title={formatMessage({ id: 'pim_details.general.location.header' })}
        onSave={() => Promise.resolve(undefined)}
        placeholder="pim_details.general.location.placeholder"
        name="notes"
      >
        <Grid item xs={12}>
          <AutosaveForm onSave={onSave} initialValues={initialValues}>
            <Grid item xs={12}>
              <FormSection title={formatMessage({ id: 'pim_details.general.location.subheader' })}>
                {editable => (
                  <>
                    <FormSubSectionHeader
                      noBorder
                      title={formatMessage({ id: 'pim_details.general.location.type' })}
                      subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    />
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
                      subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    />
                    <Box paddingTop={2} mb={2}>
                      <RadioGroupField xs={2} name="type" options={typeOptions} disabled={!editable} />
                    </Box>
                    <GenericField
                      label="pim_details.general.location.notes"
                      placeholder="pim_details.general.location.notes_placeholder"
                      name="notes"
                    />
                    <Box mb={3} />

                    <FormSubSectionHeader
                      noBorder
                      title={formatMessage({ id: 'pim_details.general.location.good_to_know' })}
                      subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    />
                    {Object.values(LocationGoodToKnowType).map((type, index) => (
                      <GoodToKnowRow key={`${type}-${index}`} type={type} disabled={!editable} index={index} />
                    ))}
                  </>
                )}
              </FormSection>
            </Grid>
          </AutosaveForm>
        </Grid>
      </Page>
    </>
  );
};
