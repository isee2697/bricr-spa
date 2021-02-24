import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Box, Checkbox, IconButton, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HideIcon, ExitIcon, ClockIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { AppRoute } from 'routing/AppRoute.enum';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { PIM_MATCH_ALLOCATED_PROPERTIES } from 'api/mocks/pim';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ListPimsFilters } from 'api/types';

import { useStyles } from './AllocateResultsDetails.styles';
import { AllocateResultsDetailsProps } from './AllocateResultsDetails.types';
import { StatCard } from './statCard/StatCard';
import { RankingList } from './goldList/List';
import { AssignedTableView } from './tableView/AssignedTableView';
import { PimAllocateResultDetailsFilters } from './dictionaries';

export const AllocateResultsDetails = ({ isSidebarVisible, onSidebarOpen }: AllocateResultsDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});

  const [rankingSelected, setRankingSelected] = useState<string[]>([]);
  const [assignedSelected, setAssignedSelected] = useState<string[]>([]);
  const [unassignedSelected, setUnassignedSelected] = useState<string[]>([]);

  const item = PIM_MATCH_ALLOCATED_PROPERTIES[0];

  const handleNavigateToResults = () => {
    push(joinUrlParams(`${AppRoute.pimDetails}/allocateResults`, params));
  };

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  const handleSelect = (selected: string[], id: string) => {
    if (selected.indexOf(id) === -1) {
      selected.push(id);
    } else {
      selected.splice(selected.indexOf(id), 1);
    }

    return [...selected];
  };

  const handleSelectAll = () => {
    if (
      rankingSelected.length >= 3 &&
      assignedSelected.length === item.assigned.length &&
      unassignedSelected.length === item.unassigned.length
    ) {
      setRankingSelected([]);
      setAssignedSelected([]);
      setUnassignedSelected([]);
    } else {
      setRankingSelected(item.allocatedRelations.map(item => item.id));
      setAssignedSelected(item.assigned.map(item => item.id));
      setUnassignedSelected(item.unassigned.map(item => item.id));
    }
  };

  return (
    <>
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          {!isSidebarVisible && (
            <IconButton
              className={classes.hideSidebarButton}
              onClick={onSidebarOpen}
              size="small"
              variant="roundedContained"
            >
              <HideIcon />
            </IconButton>
          )}
          <Box mr={0.5}>
            <Typography variant="h5">
              {formatMessage({ id: 'pim_details.allocate_results_details.allocate_result' })}:
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.fontWeightBold}>
            {formatMessage(
              { id: 'pim_details.allocate_results_details.allocated_by' },
              {
                date: `${DateTime.local().toLocaleString(DateTime.DATE_HUGE)} ${DateTime.local().toLocaleString(
                  DateTime.TIME_WITH_SECONDS,
                )}`,
                by: 'Margot Janssens',
              },
            )}
          </Typography>
        </Box>
        <Box display="flex">
          <ListOptionsMenu id={`allocate-results-details-menu`} onDeleteClick={() => {}} hideEditButton>
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'pim.details.allocateResults.viewSettings',
              })}
              icon={<ClockIcon />}
            />
          </ListOptionsMenu>
          <Box ml={1.5} />
          <IconButton size="small" variant="rounded" onClick={handleNavigateToResults}>
            <ExitIcon />
          </IconButton>
        </Box>
      </Box>
      <Page withoutHeader>
        <StatCard item={item} />
        <Box mt={2.5} mx={1.5} display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box display="flex" alignItems="center">
            <Checkbox
              color="primary"
              checked={
                rankingSelected.length >= 3 &&
                assignedSelected.length === item.assigned.length &&
                unassignedSelected.length === item.unassigned.length
              }
              onClick={handleSelectAll}
            />
            <Typography variant="h5" color="textSecondary">
              {formatMessage({ id: 'common.select_all' })}
            </Typography>
          </Box>
          <FiltersButton
            color="primary"
            data={activeFilters}
            getActiveFilters={handleFilterChange}
            filters={PimAllocateResultDetailsFilters}
          />
        </Box>
        <RankingList
          items={item.allocatedRelations}
          selected={rankingSelected}
          onSelect={id => setRankingSelected(handleSelect(rankingSelected, id))}
        />
        <AssignedTableView
          type="assigned"
          properties={item.assigned}
          onClick={() => {}}
          selected={assignedSelected}
          onSelectProperty={id => setAssignedSelected(handleSelect(assignedSelected, id))}
          onSelectAllProperties={() =>
            assignedSelected.length === item.assigned.length
              ? setAssignedSelected([])
              : setAssignedSelected(item.assigned.map(item => item.id))
          }
        />
        <AssignedTableView
          type="unassigned"
          properties={item.unassigned}
          onClick={() => {}}
          selected={unassignedSelected}
          onSelectProperty={id => setUnassignedSelected(handleSelect(unassignedSelected, id))}
          onSelectAllProperties={() =>
            unassignedSelected.length === item.unassigned.length
              ? setUnassignedSelected([])
              : setUnassignedSelected(item.unassigned.map(item => item.id))
          }
        />
      </Page>
    </>
  );
};
