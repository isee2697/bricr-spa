import React, { useState } from 'react';
import clsx from 'classnames';

import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
// import { AppRoute } from "routing/AppRoute.enum";
import { Card, CardContent, Grid, Box, Typography, Badge, CardHeader, IconButton } from 'ui/atoms';
// import { useHistory } from "react-router-dom";
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { AddCustomPropertyModal } from 'ui/organisms';
import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';

import {
  ActiveTabStatus,
  TemplateType,
  // WorkflowBluePrints,
  WorkflowTemplatesProps,
} from './WorkflowTemplates.types';
import { useStyles } from './WorkflowTemplates.styles';
import { WorkflowTemplatesTabs } from './workflowTemplatesTabs/WorkflowTemplatesTabs';
import { WorkflowTemplatesItem } from './workflowTemplatesItem/WorkflowTemplatesItem';

const mockData = {
  notifications: ['', ''],
};

export const WorkflowTemplates = ({
  templates,
  updatedBy,
  dateUpdated,
  onAdd,
  templateType = TemplateType.custom,
}: WorkflowTemplatesProps) => {
  const { formatMessage } = useLocale();
  const [isModalVisible, setModalVisible] = useState(false);
  const classes = useStyles();
  // const { push } = useHistory();
  const [status, setStatus] = useState<ActiveTabStatus>('active');
  const { notifications } = mockData;

  const activeTemplates = templates.filter(item => item.status === 'active');
  const inactiveTemplates = templates.filter(item => item.status === 'inactive');

  return (
    <>
      <Page
        showHeader
        headerProps={
          templateType === 'custom'
            ? {
                actionText: formatMessage({
                  id: 'settings.workflow_templates.add_new_workflow_template',
                }),
                actionIcon: <AddIcon color="inherit" />,
                onAction: () => setModalVisible(true),
              }
            : undefined
        }
        title={formatMessage({
          id: `settings.workflow_templates.${templateType}_title`,
        })}
        titleActions={null}
        placeholder="settings.workflow_templates.description_placeholder"
        name="description"
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h2">
                  {formatMessage({
                    id: `settings.workflow_templates.card_${templateType}_title`,
                  })}
                </Typography>
              }
              action={
                <IconButton variant="rounded" size="small" onClick={() => {}} aria-label="adjust">
                  <Badge badgeContent={notifications?.length} color="primary">
                    <ManageIcon />
                  </Badge>
                </IconButton>
              }
            />
            <CardContent>
              <Box mb={2}>
                <WorkflowTemplatesTabs
                  status={status}
                  onStatusChange={setStatus}
                  amounts={{
                    active: activeTemplates?.length || '-',
                    inactive: inactiveTemplates?.length || '-',
                  }}
                />
              </Box>
              {/* <div className={classes.blueprintCheckboxContainer}>
                {Object.keys(WorkflowBluePrints).map((key) => (
                  <CheckboxField
                    key={key}
                    label={`dictionaries.workflow_blueprint.${key}`}
                    name={key}
                    containerClassName={classes.blueprintCheckbox}
                  />
                ))}
              </div> */}
              <List
                className="workflow-template-list"
                items={status === 'active' ? activeTemplates : inactiveTemplates}
                itemIndex="id"
                // onBulk={(selectedItems) => alert(JSON.stringify(selectedItems))}
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
                  id: 'settings.workflow_templates.empty_line_1',
                })}
                emptyDescription={formatMessage({
                  id: 'settings.workflow_templates.empty_line_2',
                })}
                renderItem={(template, checked, checkbox) => (
                  <Box
                    key={template.id}
                    className={clsx(classes.row, { [classes.rowChecked]: checked }, 'workflow-template-row')}
                  >
                    {checkbox}
                    <Box component="span" className={classes.rowItem}>
                      <Box
                        className={classes.itemButton}
                        onClick={() => {
                          // push(AppRoute.workflow.replace(":id", template.id))
                        }}
                      >
                        <WorkflowTemplatesItem
                          template={template}
                          onCopyToCustom={() => {}}
                          onStatusChange={() => {}}
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
              />
            </CardContent>
          </Card>
        </Grid>
      </Page>
      {isModalVisible && (
        <AddCustomPropertyModal
          onClose={() => setModalVisible(false)}
          isOpened={isModalVisible}
          labelId="settings.new_workflow_template.label"
          placeholderId="settings.new_workflow_template.placeholder"
          title={formatMessage({ id: 'settings.new_workflow_template.title' })}
          addText={formatMessage({ id: 'settings.new_workflow_template.add' })}
          iconPickerSelectedTheme={IconSelectedTheme.ORANGE}
          onSubmit={onAdd}
        />
      )}
    </>
  );
};
