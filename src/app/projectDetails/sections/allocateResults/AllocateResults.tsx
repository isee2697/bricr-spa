import React from 'react';

import { ProjectDetailsHeader } from '../../projectDetailsHeader/ProjectDetailsHeader';
import { Button, Card, CardContent, NavBreadcrumb, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './AllocateResults.styles';
import { AllocateResultsProps } from './AllocateResults.types';

export const AllocateResults = ({ onSidebarOpen, isSidebarVisible }: AllocateResultsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <div className={classes.root}>
      <NavBreadcrumb title={formatMessage({ id: 'project.details.allocate_results' })} />
      <ProjectDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        action={
          <Button
            color="primary"
            variant="contained"
            onClick={() => {}}
            startIcon={<AddIcon color="inherit" />}
            size="small"
          >
            {formatMessage({ id: 'project.details.allocation_add' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Card className={classes.allocateResults}>
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'project.details.allocate_results.empty_title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'project.details.allocate_results.empty_description' })}
              </Typography>
            </InfoSection>
          </CardContent>
        </Card>
      </Page>
    </div>
  );
};
