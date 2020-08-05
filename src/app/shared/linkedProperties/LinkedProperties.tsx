import React, { useState } from 'react';
import classNames from 'classnames';

import { Alert, Box, Grid, Button } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { FormSection } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { PimActionTabs } from 'app/pim/pimActionTabs/PimActionTabs';
import { ListPim } from 'api/types';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';

import { useStyles } from './LinkedProperties.styles';
import { ObjectTypesProps } from './LinkedProperties.types';
import { LinkedPropertyItem } from './linkedPropertyItem/LinkedPropertyItem';
import { LinkedPropertyModalContainer } from './linkedPropertyModal/LinkedPropertyModalContainer';

export const LinkedProperties = ({
  sorting,
  isError,
  isLoading,
  listData,
  amounts,
  onStatusChange,
  pagination,
  status,
  description,
  onDescriptionSave,
  dateUpdated,
  updatedBy,
  onSidebarOpen,
  isSidebarVisible,
  showAddButton = false,
  titleId,
  projectId,
  refetchQueryVariables,
}: ObjectTypesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div className={classes.root}>
        {isError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
        <ProjectDetailsHeader
          isSidebarVisible={isSidebarVisible}
          onSidebarOpen={onSidebarOpen}
          action={
            showAddButton && (
              <Button
                color="primary"
                variant="contained"
                onClick={() => setModalOpened(true)}
                startIcon={<AddIcon color="inherit" />}
                size="small"
              >
                {formatMessage({ id: 'project_details.properties.add' })}
              </Button>
            )
          }
        />
        <Page
          title={formatMessage({ id: titleId })}
          placeholder="project_details.properties.description_placeholder"
          name="description"
          initialValues={{ description }}
          onSave={onDescriptionSave}
          dateUpdated={dateUpdated}
          updatedBy={updatedBy}
        >
          <Grid item xs={12}>
            <FormSection
              titleBadge={listData.length}
              title={formatMessage({ id: `project_details.properties.card_title` })}
              isEditable={false}
              onOptionsClick={() => {}}
            >
              <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
              <Box mx={-2}>
                <List<ListPim>
                  className="object-type-list"
                  items={listData}
                  itemIndex="id"
                  renderItem={(linkedProperty, checked, checkbox) => (
                    <Box
                      key={linkedProperty.id}
                      className={classNames(classes.row, { [classes.rowChecked]: checked }, 'object-type-row')}
                    >
                      {checkbox}
                      <Box component="span" className={classes.rowItem}>
                        <LinkedPropertyItem {...linkedProperty} projectId={projectId} />
                      </Box>
                    </Box>
                  )}
                  onBulk={() => alert('Bulk clicked')}
                  sortOptions={sorting.sortOptions}
                  onSort={sorting.onSort}
                  pagination={pagination}
                  loading={isLoading}
                  loadingItem={<PropertyItemPlaceholder />}
                  emptyTitle={formatMessage({ id: 'project_details.properties.empty_line_1' })}
                  emptyDescription={formatMessage({ id: 'project_details.properties.empty_line_2' })}
                />
              </Box>
            </FormSection>
          </Grid>
        </Page>
      </div>
      {isModalOpened && (
        <LinkedPropertyModalContainer
          isOpened={isModalOpened}
          onClose={() => setModalOpened(false)}
          refetchQueryVariables={refetchQueryVariables}
        />
      )}
    </>
  );
};
