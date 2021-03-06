import React from 'react';
import { useParams } from 'react-router-dom';

import { Box } from 'ui/atoms';
import { FormSubSectionHeader, TileButton } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useCustomLabels, useLocale } from 'hooks';
import { LabelProperty } from 'api/types';
import { useStyles } from '../../Specification.styles';
import * as dictionaries from '../../dictionaries';
import { SpecificationGeneralFormProps } from '../SpecificationGeneral.types';

export const ObligationForm = ({ onAddPropertyClick }: SpecificationGeneralFormProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const customLabels = useCustomLabels(pimId, [LabelProperty.ObligationToProvideInformation]);

  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.obligation.title' })}
        isExpandable
        isInitExpanded
      >
        {editing => (
          <>
            <Box mb={2}>
              <FormSubSectionHeader
                noBorder
                title={formatMessage({ id: 'pim_details.specification.label_title' })}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              />
            </Box>
            <RadioGroupField
              disabled={!editing}
              xs={2}
              name="specification.obligation.label"
              options={[
                ...dictionaries.obligation,
                ...(customLabels[LabelProperty.ObligationToProvideInformation] ?? []),
              ]}
              actionElement={<TileButton onClick={onAddPropertyClick} isDisabled={!editing} />}
            />
            <Box mt={2}>
              <GenericField
                name="specification.obligation.notes"
                label="pim_details.specification.notes_label"
                placeholder="pim_details.specification.notes_placeholder"
                disabled={!editing}
              />
            </Box>
          </>
        )}
      </FormSection>
    </div>
  );
};
