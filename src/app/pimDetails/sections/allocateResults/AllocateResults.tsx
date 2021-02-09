import React, { useState } from 'react';

import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { Button, Grid, NavBreadcrumb } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { AllocateResultsProps } from './AllocateResults.types';
import { AllocateResultsList } from './list/List';
import { CreateWizard } from './createWizard/CreateWizard';
import { AllocateTypeModal } from './allocateTypeModal/AllocateTypeModal';
import { AllocateType } from './allocateTypeModal/AllocateTypeModal.types';
import { AllocateTypeDetailsModal } from './allocateTypeDetailsModal/AllocateTypeDetailsModal';

export const AllocateResults = ({ onSidebarOpen, isSidebarVisible }: AllocateResultsProps) => {
  const { formatMessage } = useLocale();
  const [isAllocating, setIsAllocating] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showTypeDetailsModal, setShowTypeDetailsModal] = useState<AllocateType | null>(null);

  const handleTypeDetailsModal = (type: AllocateType) => {
    setShowTypeModal(false);

    if (type === AllocateType.StartWithBlank) {
      setIsAllocating(true);
    } else {
      setShowTypeDetailsModal(type);
    }
  };

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
              onClick={() => setShowTypeModal(true)}
              startIcon={<AddIcon color="inherit" />}
              size="small"
            >
              {formatMessage({ id: 'pim.details.allocation_add' })}
            </Button>
          )
        }
      />
      {showTypeModal && (
        <AllocateTypeModal
          isOpen={showTypeModal}
          onClose={() => setShowTypeModal(false)}
          onSelect={handleTypeDetailsModal}
        />
      )}
      {showTypeDetailsModal && (
        <AllocateTypeDetailsModal
          isOpen={!!showTypeDetailsModal}
          allocateType={showTypeDetailsModal}
          onClose={() => setShowTypeDetailsModal(null)}
          onNext={() => {
            setShowTypeDetailsModal(null);
            setIsAllocating(true);
          }}
          onPrev={() => {
            setShowTypeDetailsModal(null);
            setShowTypeModal(true);
          }}
        />
      )}
      {isAllocating && (
        <CreateWizard onGotoResult={() => setIsAllocating(false)} onSaveCriteria={() => setIsAllocating(false)} />
      )}
      {!isAllocating && <AllocateResultsList />}
    </Grid>
  );
};
