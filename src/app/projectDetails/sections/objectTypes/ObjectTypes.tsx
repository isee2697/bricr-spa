import React, { useState } from 'react';
import classNames from 'classnames';

import { Alert, Box, Grid, Button } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { FormSection } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { PimActionTabs } from 'app/pim/pimActionTabs/PimActionTabs';
import { ListObjectTypes } from 'api/types';

import { useStyles } from './ObjectTypes.styles';
import { ObjectTypesProps } from './ObjectTypes.types';
import { ObjectItem } from './objectItem/ObjectItem';
import { AddNewObjectTypeModalContainer } from './addNewObjectTypeModal/AddNewObjectTypeModalContainer';
export const ObjectTypes = ({
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
}: ObjectTypesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isModalOpened, setModalOpened] = useState(false);

  const renderContent = () => (
    <Grid item xs={12}>
      <FormSection
        titleBadge={listData.length}
        title={formatMessage({ id: `project_details.object_types.card_title` })}
        isEditable={false}
        onOptionsClick={() => {}}
      >
        <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
        <Box mx={-2}>
          <List<ListObjectTypes>
            className="object-type-list"
            items={listData}
            itemIndex="id"
            renderItem={(objectType, checked, checkbox) => (
              <Box
                key={objectType.id}
                className={classNames(classes.row, { [classes.rowChecked]: checked }, 'object-type-row')}
              >
                {checkbox}
                <Box component="span" className={classes.rowItem}>
                  <ObjectItem {...objectType} />
                </Box>
              </Box>
            )}
            onBulk={() => alert('Bulk clicked')}
            sortOptions={sorting.sortOptions}
            onSort={sorting.onSort}
            pagination={pagination}
            loading={isLoading}
            loadingItem={<PropertyItemPlaceholder />}
            emptyTitle={formatMessage({ id: 'project_details.object_types.empty_line_1' })}
            emptyDescription={formatMessage({ id: 'project_details.object_types.empty_line_2' })}
          />
        </Box>
      </FormSection>
    </Grid>
  );

  return (
    <div className={classes.root}>
      {isError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <ProjectDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            variant="contained"
            onClick={() => setModalOpened(true)}
            startIcon={<AddIcon color="inherit" />}
            size="small"
          >
            {formatMessage({ id: 'pim.object_type_add' })}
          </Button>
        }
      />
      <Page
        title={formatMessage({ id: `project_details.object_types.title` })}
        placeholder="project_details.object_types.description_placeholder"
        name="description"
        initialValues={{ description }}
        onSave={onDescriptionSave}
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        {renderContent()}
        {isModalOpened && (
          <AddNewObjectTypeModalContainer isOpened={isModalOpened} onClose={() => setModalOpened(false)} />
        )}
      </Page>
    </div>
  );
};
