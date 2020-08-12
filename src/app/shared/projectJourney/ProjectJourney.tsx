import React from 'react';
import classNames from 'classnames';

import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { List } from 'ui/molecules';
import { Box, Grid, IconButton } from 'ui/atoms';
import { Page } from 'ui/templates';
import { LocationIcon, ListIcon, ManageIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';

import { useStyles } from './ProjectJourney.styles';
import { ProjectJourneyProps } from './ProjectJourney.types';
import { ProjectJourneyItem } from './projectJourneyItem/ProjectJourneyItem';
import { ProjectJourneyActionTabs } from './projectJourneyActionTabs/ProjectJourneyActionTabs';

export const ProjectJourney = ({
  data,
  status,
  onStatusChange,
  amounts,
  sorting,
  isSidebarVisible,
  onSidebarOpen,
  subtitleId,
  titleId,
}: ProjectJourneyProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <ProjectDetailsHeader isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page title={formatMessage({ id: titleId })}>
        <Grid item xs={12}>
          <Box mt={3}>
            <FormSection
              title={formatMessage({ id: subtitleId })}
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
              <Box mx={-2}>
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
                />
              </Box>
            </FormSection>
          </Box>
        </Grid>
      </Page>
    </>
  );
};
