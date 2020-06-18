import React from 'react';
import { Route, Switch, useParams, Redirect } from 'react-router-dom';
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
import { usePimDetailsQuery, Floor as FloorTypes } from 'api/types';

import { AddNewFloorModalContainer } from './addNewFloorModal/AddNewFloorModalContainer';
import { Floor } from './floor/Floor';

export const Inside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const isAddFloorModalOpen = useModalState('add-new-floor');
  const { close, open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();
  const { data: pim } = usePimDetailsQuery({ variables: { id } });

  const getCount = (floor: FloorTypes) => {
    const groupedFloors = groupBy((pim && pim.getPim?.floors) || [], floors => floors.floorType);

    let count: number | undefined;

    Object.values(groupedFloors).flatMap(floors =>
      floors.forEach((floorType, i) => {
        if (floorType.id === floor.id) {
          const numberOfFloorTypeOccurence = groupedFloors[floorType.floorType].length;
          count = numberOfFloorTypeOccurence > 1 ? numberOfFloorTypeOccurence - i : undefined;
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

      {(pim?.getPim?.floors?.length === 0 || pim?.getPim?.floors === null) && (
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

      {pim?.getPim?.floors && pim.getPim.floors.length > 0 && (
        <Switch>
          {pim.getPim.floors.map(floor => (
            <Route
              key={floor.id}
              path={`${AppRoute.pimDetails}/inside/${floor.id}`}
              exact
              render={() => (
                <Floor
                  floor={floor}
                  count={getCount(floor)}
                  isSidebarVisible={isSidebarVisible}
                  onOpenSidebar={onOpenSidebar}
                />
              )}
            />
          ))}
          <Route path={`${AppRoute.pimDetails}/inside`} exact>
            <Redirect to={`${AppRoute.pimDetails.replace(':id', id)}/inside/${pim.getPim.floors[0].id}`} />
          </Route>
        </Switch>
      )}

      <AddNewFloorModalContainer isOpened={isAddFloorModalOpen} onClose={() => close('add-new-floor')} />
    </>
  );
};
