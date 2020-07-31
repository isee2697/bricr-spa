import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { Alert, Box, Grid, Button } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale, useModalDispatch } from 'hooks';
import { Page } from 'ui/templates';
import { FormSection } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { PimActionTabs } from 'app/pim/pimActionTabs/PimActionTabs';
import { ListPim } from 'api/types';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';

import { useStyles } from './LinkedProperties.styles';
import { ObjectTypesProps } from './LinkedProperties.types';
import { LinkedPropertyItem } from './linkedPropertyItem/LinkedPropertyItem';

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
  linkedPropertiesIds,
  showAddButton = false,
  titleId,
}: ObjectTypesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id, projectId } = useParams<{ id: string; projectId: string }>();

  return (
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
              onClick={() =>
                open('add-new-pim', {
                  propertyCategory: PropertyCategory.PROPERTY,
                  projectId,
                  objectTypeId: id,
                  linkedPropertiesIds: linkedPropertiesIds,
                  disableChange: true,
                  isLinkedProperty: true,
                })
              }
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
                    <LinkedPropertyItem {...linkedProperty} />
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
          </FormSection>
        </Grid>
      </Page>
    </div>
  );
};
