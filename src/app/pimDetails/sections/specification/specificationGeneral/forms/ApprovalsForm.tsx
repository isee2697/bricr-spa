import React from 'react';

import { Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { CheckboxGroupField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../../Specification.styles';
import { FormSubSection } from 'ui/molecules';
import * as dictionaries from '../../dictionaries';

export const ApprovalsForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.approvals.title' })}
        isExpandable
        isInitExpanded
      >
        {editing => (
          <>
            <Box mb={2}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.specification.label_title' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <div className={classes.checkboxWrapper}>
              <CheckboxGroupField
                disabled={!editing}
                xs={2}
                name="specification.approvals.label"
                options={dictionaries.approvals}
              />
            </div>
            <Box mt={2}>
              <GenericField
                name="specification.approvals.notes"
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
