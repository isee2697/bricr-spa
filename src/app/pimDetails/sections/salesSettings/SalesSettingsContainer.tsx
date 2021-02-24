import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import {
  AddAllocateInput,
  AllocateInput,
  ListAllocatesDocument,
  useAddAllocateMutation,
  useDeleteAllocateMutation,
  useGetAllocateLazyQuery,
  useListAllocatesQuery,
  useUpdateAllocateMutation,
} from 'api/types';

import { AllocationMain } from './allocationMain/AllocationMain';
import { AddCriteriaModal } from './addCriteriaModal/AddCriteriaModal';

export const SalesSettingsContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  const [showCriteriaModal, setShowCriteriaModal] = useState(false);

  const { id } = useParams<{ id: string }>();
  const [addAllocate] = useAddAllocateMutation();
  const [updateAllocate] = useUpdateAllocateMutation();
  const [deleteAllocate] = useDeleteAllocateMutation();
  const { data: allocatesData, loading } = useListAllocatesQuery({ variables: { objectId: id } });
  const [getAllocateById, { data: allocateData, loading: loadingAllocate }] = useGetAllocateLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const handleChangeTab = useCallback(
    (tab: string) => {
      getAllocateById({ variables: { id: tab } });
    },
    [getAllocateById],
  );

  useEffect(() => {
    if (!!allocatesData?.listAllocates && allocatesData?.listAllocates?.length > 0)
      handleChangeTab(allocatesData.listAllocates[allocatesData.listAllocates.length - 1].id);
  }, [allocatesData, handleChangeTab]);

  const handleAddAllocateCriteria = async (values: AddAllocateInput) => {
    try {
      const { data } = await addAllocate({
        variables: { input: { ...values, objectId: id } },
        refetchQueries: [
          {
            query: ListAllocatesDocument,
            variables: {
              objectId: id,
            },
          },
        ],
      });

      if (!data || !data.addAllocate) {
        throw new Error();
      }

      setShowCriteriaModal(false);
      handleChangeTab(data.addAllocate.id);

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const handleDeleteAllocateCriteria = async (criteriaId: string) => {
    try {
      const { data } = await deleteAllocate({
        variables: { id: criteriaId },
        refetchQueries: [
          {
            query: ListAllocatesDocument,
            variables: {
              objectId: id,
            },
          },
        ],
      });

      if (!data || !data.deleteAllocate) {
        throw new Error();
      }

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const handleUpdateAllocateCriteria = async (criteriaId: string, values: AllocateInput) => {
    try {
      const { data } = await updateAllocate({
        variables: {
          id: criteriaId,
          input: values,
        },
      });

      if (!data || !data.updateAllocate) {
        throw new Error();
      }

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

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
          onSubmit={handleAddAllocateCriteria}
        />
      )}

      <AllocationMain
        title="Alocation settings"
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        criterias={allocatesData?.listAllocates || []}
        selectedCriteria={allocateData?.getAllocate || undefined}
        onChangeTab={handleChangeTab}
        onSubmit={handleUpdateAllocateCriteria}
        onDelete={handleDeleteAllocateCriteria}
        loadingList={loading}
        loadingAllocate={loadingAllocate}
      />
    </>
  );
};

export default SalesSettingsContainer;
