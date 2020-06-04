import React from 'react';

import { Box, Grid } from 'ui/atoms';
import { TileButton } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { CheckboxGroupField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../Advanced.styles';
import * as dictionaries from '../../dictionaries';
import { FormSubSection } from 'ui/molecules';

export const OwnerAssociation = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.advanced.owner_association' })}
        isExpandable
        isInitExpanded
      >
        {editing => (
          <>
            <FormSubSection
              className="subtitle"
              noBorder
              title={formatMessage({ id: 'pim_details.specification.advanced.general_information' })}
            />
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <GenericField
                  name="advanced.parking.description"
                  label="pim_details.specification.advanced.owner_association_label"
                  placeholder="pim_details.specification.advanced.owner_association_placeholder"
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={5}>
                <GenericField
                  name="advanced.parking.capacity"
                  label="pim_details.specification.advanced.monthly_contribution_label"
                  placeholder="pim_details.specification.advanced.monthly_contribution_placeholder"
                  disabled={!editing}
                />
              </Grid>
            </Grid>
            <Box mt={2}>
              <FormSubSection
                noBorder
                title={formatMessage({ id: 'pim_details.specification.advanced.parking_facilities' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Box>
            <Box my={2}>
              <div className={classes.checkboxWrapper}>
                <CheckboxGroupField
                  disabled={!editing}
                  xs={2}
                  name="advanced.parking"
                  options={dictionaries.goodToKnow}
                  actionElement={
                    <TileButton
                      className={classes.tileButton}
                      onClick={() => {}}
                      isDisabled={!editing}
                      title={formatMessage({ id: 'pim_details.specification.advanced.add_custom' })}
                    />
                  }
                />
              </div>
            </Box>
            <GenericField
              name="advanced.inside.notes"
              label="pim_details.specification.notes_label"
              placeholder="pim_details.specification.notes_placeholder"
              disabled={!editing}
            />
          </>
        )}
      </FormSection>
    </div>
  );
};
