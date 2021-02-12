import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { AllocationMain } from './allocationMain/AllocationMain';
import { AddCriteriaModal } from './addCriteriaModal/AddCriteriaModal';
import { AllocateCriteriaDetailsType } from './SalesSettings.types';

export const SalesSettingsContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  const [showCriteriaModal, setShowCriteriaModal] = useState(false);

  const [criterias, setCriterias] = useState<AllocateCriteriaDetailsType[]>([]);

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => setShowCriteriaModal(true)}
            size="small"
          >
            {formatMessage({ id: `pim_details.sales_settings.add_new_allocation` })}
          </Button>
        }
      />

      {showCriteriaModal && (
        <AddCriteriaModal
          isOpened={true}
          onClose={() => setShowCriteriaModal(false)}
          onSubmit={newCriteria => {
            setShowCriteriaModal(false);
            setCriterias([...criterias, { criteriaName: newCriteria.criteriaName, createdDate: DateTime.local() }]);

            return new Promise(resolve => undefined);
          }}
        />
      )}

      <AllocationMain
        title="Alocation settings"
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        criterias={criterias}
      />
    </>
  );
};

export default SalesSettingsContainer;
