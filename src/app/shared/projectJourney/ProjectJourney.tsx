import React from 'react';
import classNames from 'classnames';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { List } from 'ui/molecules';
import { Box, Grid, IconButton, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { LocationIcon, ListIcon, ManageIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';

import { useStyles } from './ProjectJourney.styles';
import { ProjectJourneyProps } from './ProjectJourney.types';
import { ProjectJourneyItem } from './projectJourneyItem/ProjectJourneyItem';
import { ProjectJourneyActionTabs } from './projectJourneyActionTabs/ProjectJourneyActionTabs';

export const ProjectJourney = ({ data, status, onStatusChange, amounts, sorting }: ProjectJourneyProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <ProjectDetailsHeader
        action={
          <Box display="flex">
            <Grid container spacing={3}>
              {data.phase && (
                <Grid item>
                  <Typography variant="h6">{formatMessage({ id: 'project_details.project_journey.phase' })}</Typography>
                  <Typography variant="h5" className={classes.boldText}>
                    {data.phase}
                  </Typography>
                </Grid>
              )}
              {data.designation && (
                <Grid item>
                  <Typography variant="h6">
                    {formatMessage({ id: 'project_details.project_journey.designation' })}
                  </Typography>
                  <Typography variant="h5" className={classes.boldText}>
                    {data.designation}
                  </Typography>
                </Grid>
              )}
              <Grid item style={{ backgroundImage: `url(${data.projectLogo})` }} className={classes.logo}></Grid>
            </Grid>
          </Box>
        }
      />
      <Page title={formatMessage({ id: 'project_details.project_journey.title' })}>
        <Grid item xs={12}>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: 'project_details.project_journey.title' })}
              isEditable={false}
              buttons={
                <>
                  <IconButton variant="rounded" size="small">
                    <ListIcon />
                  </IconButton>
                  <IconButton variant="rounded" size="small">
                    <ManageIcon />
                  </IconButton>
                  <IconButton variant="rounded" size="small">
                    <LocationIcon />
                  </IconButton>
                </>
              }
              onAdd={() => {}}
            >
              <ProjectJourneyActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
              <List
                items={data.items || []}
                renderItem={(item, checked, checkbox) => (
                  <Box
                    key={item.id}
                    className={classNames(classes.row, { [classes.rowChecked]: checked }, 'project-journey-row')}
                  >
                    {checkbox}
                    <Box component="span" className={classes.rowItem}>
                      <ProjectJourneyItem {...item} />
                    </Box>
                  </Box>
                )}
                itemIndex={'id'}
                sortOptions={sorting.sortOptions}
                onSort={sorting.onSort}
                onBulk={() => alert('Bulk clicked')}
              />
            </FormSection>
          </Box>
        </Grid>
      </Page>
    </>
  );
};
