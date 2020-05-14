import React, { useState } from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';

import { AddNewFloorModalContainer } from './addNewFloorModal/AddNewFloorModalContainer';
import { AddNewSpaceModalContainer } from './addNewSpace/AddNewSpaceModalContainer';

export const Inside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const [isAddFloorModalOpen, setAddFloorModalOpened] = useState(false);
  const [isAddNewSpaceModalOpen, setAddNewSpaceModalOpened] = useState(false);

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
              setAddFloorModalOpened(true);
            }}
            size="small"
          >
            {formatMessage({ id: AppMessages['pim_details.add_new_floor'] })}
          </Button>
        }
      />
      <Button
        color="primary"
        startIcon={<AddIcon color="inherit" />}
        variant="contained"
        onClick={() => {
          setAddNewSpaceModalOpened(true);
        }}
        size="small"
      >
        {formatMessage({ id: AppMessages['pim_details.add_new_floor'] })}
      </Button>
      <AddNewFloorModalContainer isOpened={isAddFloorModalOpen} onClose={() => setAddFloorModalOpened(false)} />
      <AddNewSpaceModalContainer isOpened={isAddNewSpaceModalOpen} onClose={() => setAddNewSpaceModalOpened(false)} />
    </>
  );
};
