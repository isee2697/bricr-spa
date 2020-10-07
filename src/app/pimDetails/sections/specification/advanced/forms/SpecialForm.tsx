import React from 'react';
import { LabelProperty } from 'api/types';
import { Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { useStyles } from '../Advanced.styles';
import * as dictionaries from '../../dictionaries';

import { SpecialSubsection } from './component/SpecialSubsection';

export const SpecialForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.advanced.special_charateristics' })}
        isExpandable
        isInitExpanded
      >
        {editing => (
          <>
            <Box mb={3}>
              <SpecialSubsection
                title={formatMessage({ id: 'pim_details.specification.advanced.monument' })}
                subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.monument_type' })}
                subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                actionGroupType="radio"
                actionGroupName="specificationAdvanced.monument.type"
                options={dictionaries.advancedMonument}
                inputName="specificationAdvanced.monument.notes"
                label="pim_details.specification.notes_label"
                placeholder="pim_details.specification.notes_placeholder"
                labelPropertyType={LabelProperty.MonumentSpecification}
                isDisabled={!editing}
              />
            </Box>
            <Box mb={3}>
              <SpecialSubsection
                title={formatMessage({ id: 'pim_details.specification.advanced.inside' })}
                subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
                subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                actionGroupType="radio"
                actionGroupName="specificationAdvanced.inside.type"
                options={dictionaries.advancedInside}
                inputName="specificationAdvanced.inside.notes"
                label="pim_details.specification.notes_label"
                placeholder="pim_details.specification.notes_placeholder"
                labelPropertyType={LabelProperty.InsideSpecification}
                isDisabled={!editing}
              />
            </Box>
            <Box mb={3}>
              <SpecialSubsection
                title={formatMessage({ id: 'pim_details.specification.advanced.housing_options' })}
                subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
                subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                actionGroupType="radio"
                actionGroupName="specificationAdvanced.housingOptions.type"
                options={dictionaries.advancedOptions}
                inputName="specificationAdvanced.housingOptions.notes"
                label="pim_details.specification.notes_label"
                placeholder="pim_details.specification.notes_placeholder"
                labelPropertyType={LabelProperty.HousingOptions}
                isDisabled={!editing}
              />
            </Box>
            <Box mb={3}>
              <SpecialSubsection
                title={formatMessage({ id: 'pim_details.specification.advanced.special_tags' })}
                subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
                subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                actionGroupType="checkbox"
                actionGroupName="specificationAdvanced.specialTags.type"
                options={dictionaries.advancedTags}
                inputName="specificationAdvanced.specialTags.notes"
                label="pim_details.specification.notes_label"
                placeholder="pim_details.specification.notes_placeholder"
                labelPropertyType={LabelProperty.SpecialTags}
                isDisabled={!editing}
              />
            </Box>
            <SpecialSubsection
              title={formatMessage({ id: 'pim_details.specification.advanced.property_rights' })}
              subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
              subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              actionGroupType="checkbox"
              actionGroupName="specificationAdvanced.propertyRights.type"
              options={dictionaries.advancedProperty}
              inputName="specificationAdvanced.propertyRights.notes"
              label="pim_details.specification.notes_label"
              placeholder="pim_details.specification.notes_placeholder"
              labelPropertyType={LabelProperty.PropertyRights}
              isDisabled={!editing}
            />
          </>
        )}
      </FormSection>
    </div>
  );
};
