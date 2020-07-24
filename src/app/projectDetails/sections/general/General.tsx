import React from 'react';
import { useLocation } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { PercentIcon } from 'ui/atoms/icons';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection, AutoCalculateForm } from 'ui/organisms';
import { Page } from 'ui/templates';
import { GenericField, RadioGroupField, DatePickerField } from 'form/fields';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { NewConstructionAddress } from 'app/pim/addPimModal/addressStep/form/NewConstructionAddress';

import { GeneralProps } from './General.types';
import { useStyles } from './General.styles';
import * as dictionaries from './dictionaries';

export const General = ({ data }: GeneralProps) => {
  const { state } = useLocation<{ newlyAdded?: boolean }>();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <ProjectDetailsHeader />

      <Page
        title={formatMessage({ id: 'project_details.general.title' })}
        dateUpdated={data?.dateUpdated}
        updatedBy={data?.lastEditedBy}
      >
        <Grid item xs={12}>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: 'project_details.general.address.title' })}
              isEditable
              isExpandable
              isInitExpanded={false}
              className={classes.addressContainer}
            >
              {inEditMode => <NewConstructionAddress inEditMode={inEditMode} />}
            </FormSection>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <FormSection
            title={formatMessage({ id: 'project_details.general.construction.title' })}
            isEditable
            isExpandable
            isInitEditing={!!state?.newlyAdded}
            isInitExpanded={!!state?.newlyAdded}
          >
            {inEditMode => (
              <>
                <FormSubSectionHeader
                  title={formatMessage({ id: 'project_details.general.construction.project_volume' })}
                  subtitle={formatMessage({ id: 'project_details.general.construction.project_volume_description' })}
                />
                <AutoCalculateForm
                  name="automaticallyCalculateQuantity"
                  label={formatMessage({ id: 'project_details.general.construction.automatically_calculate' })}
                  disabled={!inEditMode}
                >
                  {isCalculated => (
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <GenericField
                          className={classes.input}
                          name="objectTypesCount"
                          label="project_details.general.construction.object_types"
                          placeholder="project_details.general.construction.object_types_placeholder"
                          disabled={!inEditMode || isCalculated}
                          type="number"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <GenericField
                          className={classes.input}
                          name="properties"
                          label="project_details.general.construction.properties"
                          placeholder="project_details.general.construction.properties_placeholder"
                          size="medium"
                          disabled={!inEditMode || isCalculated}
                          type="number"
                        />
                      </Grid>
                    </Grid>
                  )}
                </AutoCalculateForm>
                <Box mb={3} />

                <FormSubSectionHeader
                  title={formatMessage({ id: 'project_details.general.construction.progress_project' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                />
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box mt={2}>
                      <RadioGroupField
                        spacing={1}
                        xs={4}
                        md={2}
                        name="progressStatus"
                        options={dictionaries.progressTypes}
                        disabled={!inEditMode}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <DatePickerField
                      name="startConstruction"
                      label="project_details.general.construction.start_construction"
                      placeholder="common.date_placeholder"
                      disabled={!inEditMode}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <GenericField
                      name="noteStartConstruction"
                      label="project_details.general.construction.note_start_construction"
                      placeholder="project_details.general.construction.note_start_construction_placeholder"
                      size="medium"
                      disabled={!inEditMode}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <DatePickerField
                      name="startSale"
                      label="project_details.general.construction.start_sale"
                      placeholder="common.date_placeholder"
                      disabled={!inEditMode}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <GenericField
                      name="noteStartSale"
                      label="project_details.general.construction.note_start_sale"
                      placeholder="project_details.general.construction.note_start_sale_placeholder"
                      size="medium"
                      disabled={!inEditMode}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <DatePickerField
                      name="startDelivery"
                      label="project_details.general.construction.start_delivery"
                      placeholder="common.date_placeholder"
                      disabled={!inEditMode}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <GenericField
                      name="noteStartDelivery"
                      label="project_details.general.construction.note_start_delivery"
                      placeholder="project_details.general.construction.note_start_delivery_placeholder"
                      size="medium"
                      disabled={!inEditMode}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <GenericField
                      name="startConstructionAfterPresalePercentage"
                      label="project_details.general.construction.start_construction_percentage"
                      placeholder="project_details.general.construction.start_construction_percentage_placeholder"
                      type="number"
                      InputProps={{ endAdornment: <PercentIcon /> }}
                      size="medium"
                      disabled={!inEditMode}
                    />
                  </Grid>
                </Grid>
                <Box mb={3} />

                <FormSubSectionHeader
                  title={formatMessage({ id: 'project_details.general.construction.project_risk' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                />
                <Box mt={2}>
                  <RadioGroupField
                    spacing={1}
                    xs={4}
                    md={2}
                    name="projectRisk"
                    options={dictionaries.riskTypes}
                    disabled={!inEditMode}
                  />
                </Box>
                <GenericField
                  name="notes"
                  label="common.notes"
                  placeholder="common.notes_placeholder"
                  size="medium"
                  disabled={!inEditMode}
                />
              </>
            )}
          </FormSection>
        </Grid>
      </Page>
    </>
  );
};
