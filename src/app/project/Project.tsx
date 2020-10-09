import React from 'react';
import classNames from 'classnames';
import { Alert, Box, Card, CardContent, CardHeader, Grid } from 'ui/atoms';
import { PimSidebarMenu } from 'app/pim/pimSidebarMenu/PimSidebarMenu';
import { PimActionTabs } from 'app/pim/pimActionTabs/PimActionTabs';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks';
import { BulkField, BulkOperations, ListNcp } from 'api/types';
import { FieldChange } from 'ui/bulk/fieldChange/FieldChange';

import { useStyles } from './Project.styles';
import { ProjectHeader } from './projectHeader/ProjectHeader';
import { ProjectProps } from './Project.types';
import { ProjectItem } from './projectItem/ProjectItem';

export const Project = ({
  status,
  onStatusChange,
  pricingType,
  onPricingTypeChange,
  type,
  isLoading,
  isError,
  error,
  amounts,
  listData,
  sorting,
  pagination,
  onOperation,
  bulkData,
  onBulk,
  onBulkOpen,
}: ProjectProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      {isError && (
        <Alert severity="error">
          {formatMessage({ id: 'common.error' }, { message: error?.message?.replace('GraphQL error: ', '') })}
        </Alert>
      )}
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <PimSidebarMenu
            type={type}
            onTypeChange={() => {}}
            pricingType={pricingType}
            onPricingTypeChange={onPricingTypeChange}
          />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Grid container spacing={3} className={classes.content}>
            <ProjectHeader />
            <Grid item xs={12}>
              <Card>
                <CardHeader className="project-list-header" title={formatMessage({ id: `pim.type.${type}` })} />
                <CardContent className={classes.listContent}>
                  <Box mx={2}>
                    <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
                  </Box>
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
                          <ProjectItem
                            onArchive={() => onOperation(BulkOperations.Archive, [project])}
                            onDelete={() => onOperation(BulkOperations.Delete, [project])}
                            {...project}
                          />
                        </Box>
                      </Box>
                    )}
                    renderDeleteTitle={({ name }) => name ?? ''}
                    onBulk={onBulk}
                    onOperation={onOperation}
                    sortOptions={sorting.sortOptions}
                    onSort={sorting.onSort}
                    pagination={pagination}
                    loading={isLoading}
                    loadingItem={<PropertyItemPlaceholder />}
                    emptyTitle={formatMessage({ id: 'pim.list.empty_title' })}
                    emptyDescription={formatMessage({ id: 'pim.list.empty_description' })}
                    onBulkOpen={onBulkOpen}
                    bulkData={bulkData}
                    bulkTitle={formatMessage({ id: 'project.bulk.title' })}
                    bulkSubmitText={formatMessage({ id: 'project.bulk.submit' })}
                    bulkActions={[
                      {
                        key: BulkField.City,
                        title: formatMessage({ id: 'project.bulk.city.title' }),
                        content: (
                          <FieldChange
                            fieldLabelId="project.bulk.city.label"
                            fieldName={BulkField.City}
                            fieldPlaceholderId="project.bulk.city.placeholder"
                            valuesFieldName={'cityValues'}
                            valuesLabel={formatMessage({ id: 'project.bulk.city.values_title' })}
                          />
                        ),
                      },
                    ]}
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
