import React from 'react';
import classNames from 'classnames';

import { Alert, Box, Grid, Button } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale, useModalDispatch } from 'hooks';
import { Page } from 'ui/templates';
import { FormSection } from 'ui/organisms';
import { PropertyCategory } from 'app/pim/addPimModal/AddPimModal.types';
import { AddIcon } from 'ui/atoms/icons';
import { ProjectDetailsHeader } from '../../projectDetailsHeader/ProjectDetailsHeader';
import { PimActionTabs } from 'app/pim/pimActionTabs/PimActionTabs';

import { useStyles } from './ObjectTypes.styles';
import { ObjectTypeData, ObjectTypesProps } from './ObjectTypes.types';
import { ObjectItem } from './objectItem/ObjectItem';
export const ObjectTypes = ({
  sorting,
  isError,
  isLoading,
  listData,
  amounts,
  onStatusChange,
  pagination,
  status,
}: ObjectTypesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <div className={classes.root}>
      {isError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <ProjectDetailsHeader
        action={
          <Button
            color="primary"
            variant="contained"
            onClick={() => open('add-new-pim', { propertyCategory: PropertyCategory.COMPLEX })}
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
        initialValues={undefined}
        onSave={() => Promise.resolve(undefined)}
      >
        <Grid item xs={12}>
          <FormSection
            titleBadge={listData.length}
            title={formatMessage({ id: `project_details.object_types.card_title` })}
            isEditable={false}
            onOptionsClick={() => {}}
          >
            <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
            <List<ObjectTypeData>
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
              emptyTitle={formatMessage({ id: 'pim.list.empty_title' })}
              emptyDescription={formatMessage({ id: 'pim.list.empty_description' })}
            />
          </FormSection>
        </Grid>
      </Page>
    </div>
  );
};
