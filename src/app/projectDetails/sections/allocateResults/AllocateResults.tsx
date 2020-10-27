import React, { useState } from 'react';

import { ProjectDetailsHeader } from '../../projectDetailsHeader/ProjectDetailsHeader';
import { Button, NavBreadcrumb } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './AllocateResults.styles';
import { AllocateResultsProps } from './AllocateResults.types';
import { List } from './list/List';
import { CreateWizard } from './createWizard/CreateWizard';

export const AllocateResults = ({ onSidebarOpen, isSidebarVisible }: AllocateResultsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isAllocating, setIsAllocating] = useState(true);

  return (
    <div className={classes.root}>
      <NavBreadcrumb title={formatMessage({ id: 'project.details.allocate_results' })} />
      <ProjectDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        action={
          isAllocating ? (
            <Button color="primary" variant="outlined" onClick={() => setIsAllocating(false)} size="small">
              {formatMessage({ id: 'common.cancel' })}
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={() => setIsAllocating(true)}
              startIcon={<AddIcon color="inherit" />}
              size="small"
            >
              {formatMessage({ id: 'project.details.allocation_add' })}
            </Button>
          )
        }
      />
      {isAllocating && <CreateWizard />}
      {!isAllocating && <List />}
    </div>
  );
};
