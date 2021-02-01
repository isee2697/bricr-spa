import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumbs, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListPimsFilters } from 'api/types';
import { AddIcon, HideIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { useStyles } from './CheckListView.styles';
import { CheckListViewProps } from './CheckListView.types';
import { CheckListViewItem } from './checklistViewItem/CheckListViewItem';
import { CheckListViewTabs } from './checklistViewTabs/CheckListViewTabs';

export const CheckListView = ({
  data,
  isSidebarVisible,
  onSidebarOpen,
  status,
  onStatusChange,
  onFilter,
  activeFilters,
  amounts,
  path,
}: CheckListViewProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <Grid item xs={12}>
      <Grid xs={12} item>
        <Box display="flex" justifyContent="space-between" alignItems="center">
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
            <NavBreadcrumbs />
          </Box>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {}}
            startIcon={<AddIcon color="inherit" />}
            size="small"
          >
            {formatMessage({ id: 'checklist.add_checklist' })}
          </Button>
        </Box>
      </Grid>
      <Page withoutHeader>
        <Grid container xs={12} item justify="space-between">
          <Typography variant="h1">{formatMessage({ id: 'checklist.title' })}</Typography>
        </Grid>
        <Card>
          <CardHeader
            className="checklist-header"
            title={formatMessage({ id: `common.documents` })}
            action={
              <Box display="flex">
                <Box mr={3}>
                  <FiltersButton color="primary" data={activeFilters} getActiveFilters={onFilter} />
                </Box>
              </Box>
            }
          />
          <CardContent className={classes.listContent}>
            <Box mx={2}>
              <CheckListViewTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
            </Box>
            <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
            <List
              className="checklist-view"
              items={data.map((item, index) => ({
                ...item,
                listIndex: index,
              }))}
              itemIndex="id"
              sortOptions={[
                { key: 'lastEdited', name: 'Last edited' },
                { key: 'firstEdited', name: 'First edited' },
              ]}
              onSort={key => alert(key)}
              pagination={{
                count: 8,
                currentPerPage: 10,
                perPageOptions: [10, 25, 'All'],
                onPerPageChange: value => {
                  alert(value);
                },
              }}
              loadingItem={<PropertyItemPlaceholder />}
              emptyTitle={formatMessage({
                id: 'pim_details.checklist_view.empty_line_1',
              })}
              emptyDescription={formatMessage({
                id: 'pim_details.checklist_view.empty_line_2',
              })}
              renderItem={(doc, checked, checkbox) => (
                <Box
                  key={doc.id}
                  className={clsx(classes.row, { [classes.rowChecked]: checked }, 'checklist-view-row')}
                >
                  <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                    {checkbox}
                    <Typography variant="h4" className={classes.rowIndex}>
                      {doc.listIndex}
                    </Typography>
                  </Box>
                  <Box component="span" className={classes.rowItem}>
                    <Box
                      className={classes.itemButton}
                      onClick={() => {
                        push(path + '/' + doc.id);
                      }}
                    >
                      <CheckListViewItem data={doc} />
                    </Box>
                  </Box>
                </Box>
              )}
            />
          </CardContent>
        </Card>
      </Page>
    </Grid>
  );
};
