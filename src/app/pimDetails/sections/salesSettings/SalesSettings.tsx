import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import groupBy from 'lodash/groupBy';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { Floor as FloorTypes, usePimInsideQuery, FloorType } from 'api/types';
import { FloorContainer } from 'app/pimDetails/sections/inside/floor/FloorContainer';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { useEntityType } from 'app/shared/entityType';
import { Page } from 'ui/templates';

import { InsideGeneralContainer } from './general/InsideGeneralContainer';
import { AddNewFloorModalContainer } from './addNewFloorModal/AddNewFloorModalContainer';
import { MomentsContainer } from './moments/MomentsContainer';

export const SalesSettings = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const { isOpen: isAddFloorModalOpen } = useModalState('add-new-floor');
  const { close, open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();
  const { data: pimInsideData } = usePimInsideQuery({ variables: { id } });
  console.log(pimInsideData);
  const { baseUrl } = useEntityType();
  const pimInside = pimInsideData?.getPimInside;

  const getCount = (floor: FloorTypes) => {
    const groupedFloors = groupBy((pimInside && pimInside?.floors) || [], floors => floors.floorType);

    let count: number | undefined;

    Object.values(groupedFloors).flatMap(floors =>
      floors.forEach(({ id, floorType }, index) => {
        if (id === floor.id) {
          const numberOfFloorTypeOccurence = groupedFloors[floorType].length,
            indexAscending = index + 1,
            indexDescending = numberOfFloorTypeOccurence - index;
          count =
            numberOfFloorTypeOccurence > 1
              ? floorType === FloorType.Basement
                ? indexAscending
                : indexDescending
              : undefined;
        }
      }),
    );

    return count;
  };

  const onDescriptionUpdate = async (values: unknown) => {
    try {
      console.log(await values);

      return { error: false };
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />

      <Page
        title={formatMessage({ id: 'pim_details.sales_settings.title' })}
        onSave={onDescriptionUpdate}
        placeholder="pim_details.media.description_placeholder"
        name="description"
        // initialValues={{ description }}
        // updatedBy={media.lastEditedBy}
        // dateUpdated={media.dateUpdated}
      >
        <Grid item xs={12}>
          <MomentsContainer
          // links={media.mediaLinks}
          // onAddCustomType={() => handleAddCustomType(LabelProperty.MediaLink)}
          />
        </Grid>
      </Page>
    </>
  );
};
