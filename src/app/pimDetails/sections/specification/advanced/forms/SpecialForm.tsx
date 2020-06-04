import React from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { useStyles } from '../Advanced.styles';
import * as dictionaries from '../../dictionaries';
import { Box } from 'ui/atoms';

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
                actionGroupName="advanced.monument"
                options={dictionaries.advancedMonument}
                inputName="advanced.monument.notes"
                label={formatMessage({ id: 'pim_details.specification.notes_label' })}
                placeholder={formatMessage({ id: 'pim_details.specification.notes_placeholder' })}
                isDisabled={!editing}
              />
            </Box>
            <Box mb={3}>
              <SpecialSubsection
                title={formatMessage({ id: 'pim_details.specification.advanced.inside' })}
                subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
                subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                actionGroupType="radio"
                actionGroupName="advanced.inside"
                options={dictionaries.advancedInside}
                inputName="advanced.inside.notes"
                label={formatMessage({ id: 'pim_details.specification.notes_label' })}
                placeholder={formatMessage({ id: 'pim_details.specification.notes_placeholder' })}
                isDisabled={!editing}
              />
            </Box>
            <Box mb={3}>
              <SpecialSubsection
                title={formatMessage({ id: 'pim_details.specification.advanced.housing_options' })}
                subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
                subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                actionGroupType="radio"
                actionGroupName="advanced.options"
                options={dictionaries.advancedOptions}
                inputName="advanced.inside.notes"
                label={formatMessage({ id: 'pim_details.specification.notes_label' })}
                placeholder={formatMessage({ id: 'pim_details.specification.notes_placeholder' })}
                isDisabled={!editing}
              />
            </Box>
            <Box mb={3}>
              <SpecialSubsection
                title={formatMessage({ id: 'pim_details.specification.advanced.special_tags' })}
                subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
                subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                actionGroupType="checkbox"
                actionGroupName="advanced.tags"
                options={dictionaries.advancedTags}
                inputName="advanced.inside.notes"
                label={formatMessage({ id: 'pim_details.specification.notes_label' })}
                placeholder={formatMessage({ id: 'pim_details.specification.notes_placeholder' })}
                isDisabled={!editing}
              />
            </Box>
            <SpecialSubsection
              title={formatMessage({ id: 'pim_details.specification.advanced.property_rights' })}
              subSectionTitle={formatMessage({ id: 'pim_details.specification.advanced.select_type' })}
              subSectionSubtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              actionGroupType="checkbox"
              actionGroupName="advanced.property"
              options={dictionaries.advancedProperty}
              inputName="advanced.inside.notes"
              label={formatMessage({ id: 'pim_details.specification.notes_label' })}
              placeholder={formatMessage({ id: 'pim_details.specification.notes_placeholder' })}
              isDisabled={!editing}
            />
          </>
        )}
      </FormSection>
    </div>
  );
};
