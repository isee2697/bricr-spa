import React from 'react';
import { useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button, Loader } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { usePimDetailsQuery } from 'api/types';

import { AddOutsideFeatureModalContainer } from './addOutsideFeatureModal/AddOutsideFeatureModalContainer';
import { Main } from './main/Main';

export const Outside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  const isAddFloorModalOpen = useModalState('add-new-outside-feature');
  const { close, open } = useModalDispatch();

  const { data: pim } = usePimDetailsQuery({ variables: { id } });

  if (!pim) {
    return <Loader />;
  }

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => {
              open('add-new-outside-feature');
            }}
            size="small"
          >
            {formatMessage({ id: 'pim_details.outside.add_new_feature' })}
          </Button>
        }
      />

      <Main />

      <AddOutsideFeatureModalContainer
        isOpened={isAddFloorModalOpen}
        onClose={() => close('add-new-outside-feature')}
      />
    </>
  );
};
