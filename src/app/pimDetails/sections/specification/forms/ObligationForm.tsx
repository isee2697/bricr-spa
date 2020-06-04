import React from 'react';

import { Box } from 'ui/atoms';
import { TileButton } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../Specification.styles';
import { FormSubSection } from 'ui/molecules';
import * as dictionaries from '../dictionaries';

export const ObligationForm = () => {
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
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.specification.label_title' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
              />
            </Box>
            <RadioGroupField
              disabled={!editing}
              xs={2}
              name="obligation"
              options={dictionaries.obligation}
              actionElement={<TileButton onClick={() => {}} isDisabled={!editing} />}
            />
            <Box mt={2}>
              <GenericField
                name="energy.energy_index"
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
