import React from 'react';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { Grid } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { PercentIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { Input } from './formParts/Input';
import { InterestsProps } from './Interests.types';

export const Interests = ({ dateUpdated, updatedBy, onSidebarOpen, isSidebarVisible }: InterestsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <ProjectDetailsHeader isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page
        title={formatMessage({ id: 'project_details.prices.interest.title' })}
        placeholder="project_details.prices.interest.description_placeholder"
        name="description"
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        <Grid item xs={12}>
          <FormSection title={formatMessage({ id: 'project_details.prices.interest.title' })} isEditable>
            {editing => (
              <>
                <Grid container direction="row" spacing={1}>
                  <Input
                    name="groundInterest"
                    label="project_details.prices.interest.ground_interest"
                    disabled={!editing}
                    InputProps={{ endAdornment: <PercentIcon /> }}
                    type="number"
                    placeholder="project_details.prices.interest.ground_interest_placeholder"
                  />
                  <Input
                    name="buildingInterest"
                    label="project_details.prices.interest.building_interest"
                    disabled={!editing}
                    InputProps={{ endAdornment: <PercentIcon /> }}
                    type="number"
                    placeholder="project_details.prices.interest.building_interest_placeholder"
                  />
                </Grid>
                <Grid container direction="row" spacing={1}>
                  <Input
                    name="rentedagen"
                    label="project_details.prices.interest.interest_days"
                    disabled={!editing}
                    type="number"
                    placeholder="project_details.prices.interest.interest_days_placeholder"
                  />
                  <Input
                    name="suspensiveCondition"
                    label="project_details.prices.interest.suspensive_conditions"
                    disabled={!editing}
                    placeholder="project_details.prices.interest.suspensive_conditions_placeholder"
                  />
                </Grid>
              </>
            )}
          </FormSection>
        </Grid>
      </Page>
    </>
  );
};
