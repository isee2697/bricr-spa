import React, { useState } from 'react';

import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { Button, Grid, NavBreadcrumb } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { AllocateResultsProps } from './AllocateResults.types';
import { AllocateResultsList } from './list/List';
import { CreateWizard } from './createWizard/CreateWizard';

export const AllocateResults = ({ onSidebarOpen, isSidebarVisible }: AllocateResultsProps) => {
  const { formatMessage } = useLocale();
  const [isAllocating, setIsAllocating] = useState(false);

  return (
    <Grid item xs={12}>
      <NavBreadcrumb title={formatMessage({ id: 'pim.details.allocate_results' })} />
      <PimDetailsHeader
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
              {formatMessage({ id: 'pim.details.allocation_add' })}
            </Button>
          )
        }
      />
      {isAllocating && <CreateWizard onCloseWizard={() => setIsAllocating(false)} />}
      {!isAllocating && <AllocateResultsList />}
    </Grid>
  );
};
