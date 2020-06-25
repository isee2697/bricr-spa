import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Grid } from 'ui/atoms';
import { TileButton, FormSubSectionHeader } from 'ui/molecules';
import { FormSection, AddCustomPropertyModalContainer } from 'ui/organisms';
import { CheckboxGroupField, GenericField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
import { useLocale, useCustomLabels } from 'hooks';
import { LabelProperty } from 'api/types';
import { useStyles } from '../Advanced.styles';
import * as dictionaries from '../../dictionaries';

export const OwnerAssociation = () => {
  const { id: pimId } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [isModalOpened, setModalOpened] = useState(false);
  const customLabels =
    useCustomLabels(pimId, [LabelProperty.HomeOwnerAssociation])[LabelProperty.HomeOwnerAssociation] ?? [];

  return (
    <div className={classes.root}>
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.advanced.owner_association' })}
        isExpandable
        isInitExpanded
      >
        {editing => (
          <>
            <FormSubSectionHeader
              className="subtitle"
              noBorder
              title={formatMessage({ id: 'pim_details.specification.advanced.general_information' })}
            />
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <GenericField
                  name="specificationAdvanced.homeOwnerAssociation.name"
                  label="pim_details.specification.advanced.owner_association_label"
                  placeholder="pim_details.specification.advanced.owner_association_placeholder"
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={5}>
                <GenericField
                  name="specificationAdvanced.homeOwnerAssociation.monthlyContribution"
                  label="pim_details.specification.advanced.monthly_contribution_label"
                  placeholder="pim_details.specification.advanced.monthly_contribution_placeholder"
                  type="number"
                  disabled={!editing}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.specification.advanced.good_to_know' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <Box my={2}>
              <div className={classes.checkboxWrapper}>
                <CheckboxGroupField
                  disabled={!editing}
                  xs={2}
                  name="specificationAdvanced.homeOwnerAssociation.goodToKnow"
                  options={[...dictionaries.goodToKnow, ...customLabels] as CheckboxDataType[]}
                  actionElement={
                    <TileButton
                      className={classes.tileButton}
                      onClick={() => setModalOpened(true)}
                      isDisabled={!editing}
                      title={formatMessage({ id: 'pim_details.specification.advanced.add_custom' })}
                    />
                  }
                />
              </div>
            </Box>
            <GenericField
              name="specificationAdvanced.homeOwnerAssociation.notes"
              label="pim_details.specification.notes_label"
              placeholder="pim_details.specification.notes_placeholder"
              disabled={!editing}
            />
          </>
        )}
      </FormSection>
      {isModalOpened && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.HomeOwnerAssociation}
          isOpened={isModalOpened}
          onClose={() => setModalOpened(false)}
        />
      )}
    </div>
  );
};
