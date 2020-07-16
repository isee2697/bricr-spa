import React from 'react';
import classNames from 'classnames';

import { Alert, Box, Card, CardContent, CardHeader, Grid } from 'ui/atoms';
import { PimSidebarMenu } from '../pim/pimSidebarMenu/PimSidebarMenu';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks';
import { PimActionTabs } from '../pim/pimActionTabs/PimActionTabs';
import { ListNcp } from 'api/types';

import { useStyles } from './Project.styles';
import { ProjectHeader } from './projectHeader/ProjectHeader';
import { ProjectProps } from './Project.types';
import { ProjectItem } from './projectItem/ProjectItem';

export const Project = ({
  status,
  onStatusChange,
  type,
  isLoading,
  isError,
  amounts,
  listData,
  sorting,
  pagination,
}: ProjectProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      {isError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <PimSidebarMenu type={type} onTypeChange={() => {}} />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Grid container spacing={3} className={classes.content}>
            <ProjectHeader />
            <Grid item xs={12}>
              <Card>
                <CardHeader className="project-list-header" title={formatMessage({ id: `pim.type.${type}` })} />
                <CardContent>
                  <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
                  <List<ListNcp>
                    className="project-list"
                    items={listData}
                    itemIndex="id"
                    renderItem={(project, checked, checkbox) => (
                      <Box
                        key={project.id}
                        className={classNames(classes.row, { [classes.rowChecked]: checked }, 'project-row')}
                      >
                        {checkbox}
                        <Box component="span" className={classes.rowItem}>
                          <ProjectItem {...project} />
                        </Box>
                      </Box>
                    )}
                    onBulk={() => alert('Bulk clicked')}
                    sortOptions={sorting.sortOptions}
                    onSort={sorting.onSort}
                    pagination={pagination}
                    loading={isLoading}
                    loadingItem={<PropertyItemPlaceholder />}
                    emptyTitle={formatMessage({ id: 'pim.list.empty_title' })}
                    emptyDescription={formatMessage({ id: 'pim.list.empty_description' })}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
