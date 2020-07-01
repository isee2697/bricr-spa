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
import { AppRoute } from 'routing/AppRoute.enum';
import { Floor as FloorTypes, usePimInsideQuery, FloorType } from 'api/types';
import { FloorContainer } from 'app/pimDetails/sections/inside/floor/FloorContainer';

import { InsideGeneralContainer } from './general/InsideGeneralContainer';
import { AddNewFloorModalContainer } from './addNewFloorModal/AddNewFloorModalContainer';

export const Inside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const isAddFloorModalOpen = useModalState('add-new-floor');
  const { close, open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();
  const { data: pimInsideData } = usePimInsideQuery({ variables: { id } });
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
              open('add-new-floor');
            }}
            size="small"
          >
            {formatMessage({ id: 'pim_details.add_new_floor' })}
          </Button>
        }
      />

      {(pimInside?.floors?.length === 0 || pimInside?.floors === null) && (
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Inside" />
            <CardContent>
              <InfoSection emoji="🤔">
                <Typography variant="h3">{formatMessage({ id: 'pim_details.inside.empty' })}</Typography>
                <Typography variant="h3">{formatMessage({ id: 'pim_details.inside.empty_description' })}</Typography>
              </InfoSection>
            </CardContent>
          </Card>
        </Grid>
      )}

      {pimInside?.floors && pimInside.floors.length > 0 && (
        <Switch>
          {pimInside.floors.map(floor => (
            <Route
              key={floor.id}
              path={`${AppRoute.pimDetails}/inside/${floor.id}`}
              exact
              render={() => (
                <FloorContainer
                  floor={floor}
                  count={getCount(floor)}
                  isSidebarVisible={isSidebarVisible}
                  onOpenSidebar={onOpenSidebar}
                />
              )}
            />
          ))}
          <Route
            path={`${AppRoute.pimDetails}/inside`}
            exact
            render={() => <InsideGeneralContainer {...pimInside.insideGeneral} />}
          />
        </Switch>
      )}

      <AddNewFloorModalContainer isOpened={isAddFloorModalOpen} onClose={() => close('add-new-floor')} />
    </>
  );
};
